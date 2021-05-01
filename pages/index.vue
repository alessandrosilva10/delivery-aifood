<template>
  <section class="main">
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;500&display=swap" rel="stylesheet">
    <Navbar :fixedTop="true" :cartLength="this.$store.getters['cart/StoreCartLength']"/>
      <div class="voucher">
      <b-icon
            icon="dollar-sign"
            size="is-small"
            style="color: white;"
      /> <p>Você tem 8 cupons! Aproveite seus descontos</p>

    </div>
    <div class="container">
      <Carousel />
    </div>
     <Spinner v-if="isLoading" :isLoading="isLoading" :isFullPage="isFullPage"/>
     <div v-else >
       <Index :products="products.products" />
       <Footer />
     </div>

  </section>
</template>

<script>
// b-icon use it --> https://fontawesome.com/icons/dollar-sign?style=solid
// NavIcon use --> https://materialdesignicons.com/icon/cart
import Card from '~/components/Card'
import Navbar from '~/components/Navbar/Navbar'
import Carousel from '~/components/Carousel/Carousel'
import Index from '~/components/Flexbox/Index'
import Spinner from '~/components/Spinner/Spinner'
import Footer from '~/components/Footer/Footer'
import { mapState } from 'vuex';


export default {
  name: 'HomePage',
  components: {
    Card, Navbar, Carousel, Index, Footer, Spinner
  },
  data(){
    return {
         isLoading: true,
                isFullPage: true,
    }
  },
    methods: {

  },
  computed: {
   cartLength(){
       return this.$store.getters['cart/StoreCartLength']
   },
    ...mapState('products', ['products']),
  },
  created() {

   /* var text = "#rawString#";
var key = CryptoJS.enc.Base64.parse("#base64Key#");
var iv  = CryptoJS.enc.Base64.parse("#base64IV#");

console.log("Initial String:: "+text);

var encrypted = CryptoJS.AES.encrypt(text, key, {iv: iv});
console.log("Encrypted String:: "+encrypted.toString());

var decrypted = CryptoJS.AES.decrypt(encrypted, key, {iv: iv});
console.log("Decrypted String:: "+decrypted.toString(CryptoJS.enc.Utf8));*/

    this.$store.dispatch('products/loadProducts')
    setTimeout(() => {
        this.isLoading = false
    }, 1200)
  }
}
</script>
<style>
 .main {
    background-color: white !important;
    font-family: 'Quicksand', sans-serif;
 }

 .voucher{
    box-sizing: border-box;
    background-color: #50a773;
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 4vh;
 }
 .voucher  p{
   color: white;
}

.carousel-list.has-shadow {
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
}

.carousel{

}
.carousel-slide img{

  max-width: 100px;
  height: 100px;
  margin-top: 40px;

}

@media (max-width: 1000px) {
  .carousel-slide img{
       width: 120% !important;
      max-width: 40px !important;
      height: 50px !important;
      margin-top: 40px !important;
  }
}

.carousel-slide img:hover{
  transform: scale(1.1);
}

.image img{
  width:  120px;
  height: 120px;
  display: block;
  object-fit: fill;
}

</style>
