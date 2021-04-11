<template>
  <div class="container">
    <div v-if="!isLojaOpen" style="margin-bottom: 50px" class="card">
    <div class="card-content">
      <center><p style="color: rgb(255, 0, 0); font-family: 'Raleway',sans-serif; font-size: 21px; font-weight: 500; line-height: 32px; font-weight: bold">No momento a loja está fechada</p></center>
    </div>
  </div>
    <div class="columns is-multiline">
      <div v-for="s in foods" class="column is-one-quarter" :key="s.brand">
        <div class="card" style="height: 100%" @click="openModal(s.image, s.value)">
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <img class="store_img" width="100px" height="100px" :src="s.image" :alt="s.brand">
              </div>
              <div class="media-content">
                <span><strong>{{s.brand}}</strong></span>
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
       <section>
        <b-modal :canCancel="['x']" :active.sync="isComponentModalActive" has-modal-card>
            <form action="">
            <div class="modal-card" style="width: 900px; height: 500px">
                <header class="modal-card-head">
                    <h1 style="text-align: center; font-weight: 500; font-size: 1.0rem" class="modal-card-title">Adicione ao seu pedido</h1>
                </header>
                <section class="modal-card-body">
                                <div class="columns is-mobile">
                <div  class="column is-half">
                    <b-field label="">
                     <img class="image-size" :src="product_image" />
                    </b-field>
                </div>
                <div class="column is-half">
                  <p>Coxinha de frango</p>
                  <p>Valor: R${{value}} reais</p>
                  <p>Assada na hora</p>
                  <p>Entrega grátis</p>
                  <br>
                   <p>Algum comentário?</p>
                                               <b-field label="">
            <b-input maxlength="200" placeholder="Ex: tirar a cabelo, maionese à parte etc." type="textarea"></b-input>
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
        </form>
        </b-modal>
    </section>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      isLojaOpen: true,
      cart_item: [{
        order_id: '',
        order: '',
        total: 0,
        quantity: 0
      }],
      isComponentModalActive: false,
      email: '',
      password: '',
      product_image: '',
      quantity_order: 1,
      value: '',
      foods: [
        {brand: 'Bolo de chocolate', image: require('@/assets/images/bolochocolate.png'), value: 25},
        {brand: 'Coxinha de frango', image: require('@/assets/images/coxinha.png'), value: 25},
        {brand: 'Cachorro quente', image: require('@/assets/images/hotdog.png'), value: 25},
        {brand: 'Esfiha de carne', image: require('@/assets/images/esfiha.png'), value: 25},
                {brand: 'Bolo de chocolate', image: require('@/assets/images/bolochocolate.png'), value: 25},
        {brand: 'Coxinha de frango', image: require('@/assets/images/coxinha.png'), value: 25},
        {brand: 'Cachorro quente', image: require('@/assets/images/hotdog.png'), value: 25},
        {brand: 'Esfiha de carne', image: require('@/assets/images/esfiha.png'), value: 25},
                {brand: 'Bolo de chocolate', image: require('@/assets/images/bolochocolate.png'), value: 25},
        {brand: 'Coxinha de frango', image: require('@/assets/images/coxinha.png'), value: 25},
        {brand: 'Cachorro quente', image: require('@/assets/images/hotdog.png'), value: 25},
        {brand: 'Esfiha de carne', image: require('@/assets/images/esfiha.png'), value: 25},
                {brand: 'Bolo de chocolate', image: require('@/assets/images/bolochocolate.png'), value: 25},
        {brand: 'Coxinha de frango', image: require('@/assets/images/coxinha.png'), value: 25},
        {brand: 'Cachorro quente', image: require('@/assets/images/hotdog.png'), value: 25},
        {brand: 'Esfiha de carne', image: require('@/assets/images/esfiha.png'), value: 25},
                {brand: 'Bolo de chocolate', image: require('@/assets/images/bolochocolate.png'), value: 25},
        {brand: 'Coxinha de frango', image: require('@/assets/images/coxinha.png'), value: 25},
        {brand: 'Cachorro quente', image: require('@/assets/images/hotdog.png'), value: 25},
        {brand: 'Esfiha de carne', image: require('@/assets/images/esfiha.png'), value: 25},
                {brand: 'Bolo de chocolate', image: require('@/assets/images/bolochocolate.png'), value: 25},
        {brand: 'Coxinha de frango', image: require('@/assets/images/coxinha.png'), value: 25},
        {brand: 'Cachorro quente', image: require('@/assets/images/hotdog.png'), value: 25},
        {brand: 'Esfiha de carne', image: require('@/assets/images/esfiha.png'), value: 25},
                {brand: 'Bolo de chocolate', image: require('@/assets/images/bolochocolate.png'), value: 25},
        {brand: 'Coxinha de frango', image: require('@/assets/images/coxinha.png'), value: 25},
        {brand: 'Cachorro quente', image: require('@/assets/images/hotdog.png'), value: 25},
        {brand: 'Esfiha de carne', image: require('@/assets/images/esfiha.png'), value: 25},
                {brand: 'Bolo de chocolate', image: require('@/assets/images/bolochocolate.png'), value: 25},
        {brand: 'Coxinha de frango', image: require('@/assets/images/coxinha.png'), value: 25},
        {brand: 'Cachorro quente', image: require('@/assets/images/hotdog.png'), value: 25},
        {brand: 'Esfiha de carne', image: require('@/assets/images/esfiha.png'), value: 25},
                {brand: 'Bolo de chocolate', image: require('@/assets/images/bolochocolate.png'), value: 25},
        {brand: 'Coxinha de frango', image: require('@/assets/images/coxinha.png'), value: 25},
        {brand: 'Cachorro quente', image: require('@/assets/images/hotdog.png'), value: 25},
        {brand: 'Esfiha de carne', image: require('@/assets/images/esfiha.png'), value: 25},
                {brand: 'Bolo de chocolate', image: require('@/assets/images/bolochocolate.png'), value: 25},
        {brand: 'Coxinha de frango', image: require('@/assets/images/coxinha.png'), value: 25},
        {brand: 'Cachorro quente', image: require('@/assets/images/hotdog.png'), value: 25},
        {brand: 'Esfiha de carne', image: require('@/assets/images/esfiha.png'), value: 25},
                {brand: 'Bolo de chocolate', image: require('@/assets/images/bolochocolate.png'), value: 25},
        {brand: 'Coxinha de frango', image: require('@/assets/images/coxinha.png'), value: 25},
        {brand: 'Cachorro quente', image: require('@/assets/images/hotdog.png'), value: 25},
        {brand: 'Esfiha de carne', image: require('@/assets/images/esfiha.png'), value: 25},
                {brand: 'Bolo de chocolate', image: require('@/assets/images/bolochocolate.png'), value: 25},
        {brand: 'Coxinha de frango', image: require('@/assets/images/coxinha.png'), value: 25},
        {brand: 'Cachorro quente', image: require('@/assets/images/hotdog.png'), value: 25},
        {brand: 'Esfiha de carne', image: require('@/assets/images/esfiha.png'), value: 25},
                {brand: 'Bolo de chocolate', image: require('@/assets/images/bolochocolate.png'), value: 25},
        {brand: 'Coxinha de frango', image: require('@/assets/images/coxinha.png'), value: 25},
        {brand: 'Cachorro quente', image: require('@/assets/images/hotdog.png'), value: 25},
        {brand: 'Esfiha de carne', image: require('@/assets/images/esfiha.png'), value: 25},
                {brand: 'Bolo de chocolate', image: require('@/assets/images/bolochocolate.png'), value: 25},
        {brand: 'Coxinha de frango', image: require('@/assets/images/coxinha.png'), value: 25},
        {brand: 'Cachorro quente', image: require('@/assets/images/hotdog.png'), value: 25},
        {brand: 'Esfiha de carne', image: require('@/assets/images/esfiha.png'), value: 25},

      ]
    }
  },
  //https://www.storyblok.com/tp/how-to-build-a-shop-with-nuxt-storyblok-and-snipcart
  methods: {
    toast() {
                this.$buefy.toast.open('Something happened')
            },
            success() {
                this.$buefy.toast.open({
                    message: 'Pedido adicionado com sucesso!',
                    type: 'is-success',
                    duration: 1500,
                    //position: ''
                })
            },
            danger() {
                this.$buefy.toast.open({
                    duration: 1500,
                    message: `Something's not good, also I'm on <b>bottom</b>`,
                    position: 'is-bottom',
                    type: 'is-danger'
                })
            },

    addOrder(){
      if(this.isLojaOpen){
        //alert(this.cart_item.lastIndexOf())
        this.cart_item.quantity = this.quantity_order
        this.cart_item.order_id = 100
        this.cart_item.order = "Coxinha"
              this.quantity_order = 1
      this.isComponentModalActive = false
      this.success();
      }else{
        alert("No momento a loja está fechada e não está aceitando pedidos!");
      }
    },
    openModal(image, value){
      this.isComponentModalActive = true
      this.product_image = image
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
