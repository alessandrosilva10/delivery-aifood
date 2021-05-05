<template>
  <div class="container">
    <div v-if="!isLojaOpen" style="margin-bottom: 50px" class="card">
    <div class="card-content">
      <center><p style="color: rgb(255, 0, 0); font-family: 'Raleway',sans-serif; font-size: 21px; font-weight: 500; line-height: 32px; font-weight: bold">No momento a loja está fechada</p></center>
    </div>
  </div>
    <div  class="columns is-multiline">
      <div  v-for="s in products" class="column is-one-quarter" :key="s.id">
        <div class="card" style="height: 100%" @click="openModal(s.image, s.price, s.name)">
          <div class="card-content">
            <div class="media">
              <div class="media-left">
              <figure class="image is-128x128">
               <img class="store_img" :src="getImgUrl(s.image)" :alt="s.brand">
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
      <Modal :isComponentModalActive="isComponentModalActive" :observation="observation" :addOrder="addOrder" :closeModal="closeModal" :quantity_order="quantity_order" :getImgModal="getImgModal" :product_name="product_name" :value="value" />
    </div>
  </div>
</template>

<script>
import Modal from '~/components/Modal/Modal'

export default {
  components: {
  'Modal' : Modal
 },
  props: ['products'],
  data(){
    return{
      isLojaOpen: true,
      cartItems: [],
      email: '',
      password: '',
      product_name: 'coxinha.png',
      product_image: '',
      isComponentModalActive: false,
      quantity_order: 1,
     observation: '',
      value: '',
    }
  },
  computed: {
    cartCount() {
      return this.StoreCart.length;
    },
  },
  created() {
   //console.log(this.$store.getters['cart/StoreCartState'])
  },
  methods: {
  /* addToCart() {
   let order = {
            "name": this.product_name,
            "value": this.value,
            "observation": this.observation,
            "quantity": this.quantity_order,
            "total_value": this.value * this.quantity_order,
            "product_image": this.product_image
      }

      this.$store.dispatch("cart/addItem", order);
      alert("added")
        console.log(this.$store.getters['cart/StoreCart'])
    },*/
  getImgUrl(image) {
    return `../images/${image}`
  },
  getImgModal(){
    return `../images/${this.product_image}`
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
        if(this.$auth.loggedIn) {
              let order = {
                  "name": this.product_name,
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
              this.$store.dispatch("cart/addItem", tempOrder);
              this.success();
            }

            this.isComponentModalActive = false
            this.quantity_order = 1
            this.observation = ''
        }else{
          this.$buefy.toast.open({
          duration: 33500,
          message: `Por favor, faça login para fazer pedidos na loja.`,
          position: 'is-top',
          type: 'is-danger'
        })
      }
      }else if(this.isLojaOpen == false){
         this.$buefy.toast.open({
          duration: 2500,
          message: `No momento a loja está fechada e não está aceitando pedidos!`,
          position: 'is-top-right',
          type: 'is-danger'
        })
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

<style scoped>
.container {
  padding-top: 4vh;
}

.card{
 border: solid 1px white;
}

.card:hover {
 border: solid 1px #E5E5E5;
 cursor: pointer;
transform: scale(1.1);
}

.store_img {
  border-radius: 50%;
}

.toast{
  width: 3000px !important;
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
