<template>
<section>
<Navbar :fixedTop="false"/>
<client-only>
<div style="margin-top: 120px;" class="columns is-mobile">
  <div class="column is-half
is-offset-one-quarter">

    <Steps :totalStoreCart="totalStoreCart" :getImgUrl="getImgUrl" :getImgModal="getImgModal" :cartItems="cartItems" :cartItemsLength="cartItemsLength"/>
  </div>
</div>

<!--
<div class="columns is-2">
          <div style="background-color: #63a4ff;
          background-image: linear-gradient(315deg, #63a4ff 0%, #63a4ff 74%);" class="box"><br>
          <center><span style="color: #fff">CHECKOUT</span></center>
           </div>
    </div>
{this.$store.getters.orders}}
  <div class="column is-8">
  <Steps/>


    <div style="background-color: #63a4ff;
background-image: linear-gradient(315deg, #63a4ff 0%, #63a4ff 74%);" class="box"><br>
<center><span style="color: #fff">Pague utilizando o seu cartão de crédito</span></center>
<br>
    <stripe-element-card
      pk="pk_test_51IW1MBLrIdC5lYpk3Eqqny4PX4tQbniOyHXycjppEhSgkP8nVLDdDW8elbkDF3RTHLXfik1EkkM07yGTtG5D7NYn003Qh6xdTp"
      ref="elementRef"
      @token="tokenCreated"
      :hidePostalCode="true"
      locale="pt"
      :elementStyle="style"
      />
      <PaymentImages />
      <button style="
      display: block;
    width: calc(100%);
    height: 40px;
    background-color: white;
    border-radius: 4px;
    border-color: white;
    color: blue;
    text-transform: uppercase;
    font-weight: 600;
    cursor: pointer;
      " @click="pay">pagar</button><br>
  </div>

</div>
<div class="columns is-2"></div>
</div>-->
</client-only>
  </section>
</template>

<script>
import Card from '~/components/Card'
import Navbar from '~/components/Navbar/Navbar'
import Carousel from '~/components/Carousel/Carousel'
import Index from '~/components/Flexbox/Index'
import Footer from '~/components/Footer/Footer'
import PaymentImages from '~/components/Stripe/PaymentImages'
import Steps from '~/components/Steps/Steps'
import { mapGetters } from 'vuex';

export default {
  middleware: 'auth',
  components: {
    Card, Navbar, Carousel, Index, Footer, PaymentImages, Steps
  },
          sockets: {
        connect: function () {
            console.log('socket connected')
        },
        customEmit: function (data) {
            console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
        },
       test_message(datasocket) {
     //this.$store.dispatch('setOrders', datasocket.data);
     console.log(datasocket.data)
    this.items = datasocket.data
  }
    },
    //https://github.com/vuejs/vuex/issues/136
  data () {
    this.pulishableKey = 'pk_test_51IW1MBLrIdC5lYpk3Eqqny4PX4tQbniOyHXycjppEhSgkP8nVLDdDW8elbkDF3RTHLXfik1EkkM07yGTtG5D7NYn003Qh6xdTp';
    return {
      cartItems: this.$store.getters['cart/StoreCart'],
      cartItemsLength: this.$store.getters['cart/StoreCartLength'],
      totalStoreCart: this.$store.getters['cart/TotalStoreCart'],
      style:  {
      base: {
        fontSize: "18px",
        color: "black",
        fontFamily: "Quicksand",
        letterSpacing: "2px",
        fontSmoothing: "antialiased",
        "::placeholder": {
          color: "black"
        },
        padding: "11110px",

      },
      invalid: {
        color: "#9e2146"
      }
    }
    }
  },
  created(){

  },
  computed: {
    getCartItemsLength(){
      if(process.browser){
          if(localStorage.getItem('cartItems')){
            console.log(JSON.parse(localStorage.getItem('cartItems')))
            return JSON.parse(localStorage.getItem('cartItems')).length;
          }
          return 0;
      }
    },
  },
  methods: {
    getImgUrl(image) {
    return `../images/${image}`
},
getImgModal(product_image){
   return `../images/${product_image}`
},
    onChange(value){
      console.log(value)
    },
    pay(){
            this.$refs.elementRef.submit();
      },
    tokenCreated (token) {
      alert(token.id)
       this.$socket.emit("test_message", {"data": token.id})
     // console.log(this.$refs.elementRef)
    },
  }
};
</script>
<style scoped>

</style>
