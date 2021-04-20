<template>
  <div class="container">
    <div v-if="!isLojaOpen" style="margin-bottom: 50px" class="card">
    <div class="card-content">
      <center><p style="color: rgb(255, 0, 0); font-family: 'Raleway',sans-serif; font-size: 21px; font-weight: 500; line-height: 32px; font-weight: bold">No momento a loja está fechada</p></center>
    </div>
  </div>
    <div  class="columns is-multiline">
      <div  v-for="s in products" class="column is-one-quarter" :key="s.name">
        <section >
        <b-modal :canCancel="['x']" :active.sync="isComponentModalActive" has-modal-card>
            <div  class="modal-card" style="width: 900px; height: 500px">
                <header class="modal-card-head">
                    <h1 style="text-align: center; font-weight: 500; font-size: 1.0rem" class="modal-card-title">Adicione ao seu pedido</h1>
                </header>
                <section class="modal-card-body">

                                <div class="columns is-mobile">
                <div  class="column is-half">
                    <b-field label="">

                            <figure class="image is-3by2">
               <img class="" :src="getImgModal()"" :alt="s.brand">
              </figure>
                    </b-field>
                </div>
                <div class="column is-half">
                  <p>{{product_name}}</p>
                  <p>Valor: R${{value}} reais</p>
                  <p>Assada na hora</p>
                  <p>Entrega grátis</p>
                  <br>
                   <p>Algum comentário?</p>
                                               <b-field label="">
            <b-input maxlength="200" v-model="observation" placeholder="Ex: tirar a cabelo, maionese à parte etc." type="textarea"></b-input>
        </b-field>
                <b-field label="">
                 <b-button style=" background-color: red; color: white"
                                @click="closeModal"
                icon-left="close">
                Fechar
            </b-button>

      <b-numberinput v-model="quantity_order" style="margin-left: 20px;  background-color: red; color: white" controls-position="compact" @click="quantity_order++" min="1"></b-numberinput>

              <b-button
              style="margin-left: 20px; background-color: red; color: white"
                icon-left="plus"
                @click="addOrder"
                >
                Adicionar
            </b-button>

            </b-field>

                    </div>
              </div>
                </section>
            </div>
        </b-modal>
    </section>
        <div class="card" style="height: 100%" @click="openModal(s.image_path, s.price, s.name)">
          <div class="card-content">
            <div class="media">
              <div class="media-left">
              <figure class="image is-128x128">
               <img class="store_img" :src="getImgUrl(s.image_path)" :alt="s.brand">
              </figure>
              </div>
              <div class="media-content">
                <span><strong>{{s.name}}</strong></span>
                <br>
                <p style="font-size: 14px; padding-top: 10px;">
                  <span style=" color: #e7a74e">4.9</span>
                <b-icon
                  class="star"
                  icon="star"
                  size="is-small"
                /> Lanches . 1.2km</p>
                <p style="font-size: 14px; padding-top: 10px">40-50 min . <span style="color: #50a773">Grátis</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['products'],
  data(){
    return{
      isLojaOpen: true,
      cartItems: [],
      isComponentModalActive: false,
      email: '',
      password: '',
      product_image: '',
      product_name: 'coxinha.png',
      quantity_order: 1,
      value: '',
      observation: '',
      Alength: 0
    }
  },
  methods: {
  getImgUrl(image_path) {
    return require('@/assets/images/'+image_path)
},
getImgModal(){
  return '_nuxt/assets/images/'+this.product_image
},
    toast() {
                this.$buefy.toast.open('Something happened')
            },
            success() {
                this.$buefy.toast.open({
                    message: 'Pedido adicionado com sucesso!',
                    type: 'is-success',
                    duration: 2500,
                    position: 'is-top-right'
                })
            },
            danger() {
                this.$buefy.toast.open({
                    duration: 2500,
                    message: `<b>Produto já se encontra adicionado no carrinho</b>`,
                    type: 'is-danger',
                    position: 'is-top-right'
                })
            },

    addOrder(){
      if(this.isLojaOpen){
        let order = {
            "name": this.name,
            "value": this.value,
            "observation": this.observation,
            "quantity": this.quantity_order,
            "total_value": this.value * this.quantity_order,
            "product_image": this.product_image
      }

      let tempOrder = [];
      tempOrder.push(order)

      const checkUsername = obj => obj.value === this.value;

      let result;

      if(JSON.parse(localStorage.getItem('cartItems'))){
        result = JSON.parse(localStorage.getItem('cartItems')).some(checkUsername);
      }



      if(result){
        this.danger();
      }else{
         if(localStorage.getItem('cartItems')){
          tempOrder = tempOrder.concat(JSON.parse(localStorage.getItem('cartItems')));
        }
         // Save back to localStorage
         localStorage.setItem('cartItems', JSON.stringify(tempOrder));
         this.success();
      }

      this.isComponentModalActive = false
      this.quantity_order = 1
      this.observation = ''

      }else{
        alert("No momento a loja está fechada e não está aceitando pedidos!");
      }
    },
    openModal(image, value, name){
      this.isComponentModalActive = true
      this.product_image = image
      this.product_name = name
      this.value = value
    },
    closeModal(){
      this.quantity_order = 1
      this.isComponentModalActive = false
    }
  }
}
</script>

<style>
.container {
  padding-top: 4vh;
}

.card{
 border: solid 1px white;
}

.card:hover {
 border: solid 1px #E5E5E5;
 cursor: pointer;
}

.store_img {
  border-radius: 50%;
}

.carousel-slide{

}

.image-size{
  width: 100%;
  height: 350px;
}

.columns  {
  margin-top: 12px;
}

.button.is-primary{
  background-color: red;
}

.button.is-primary:hover {
 background-color: red;

}

.star{
  color: #e7a74e;
}
</style>
