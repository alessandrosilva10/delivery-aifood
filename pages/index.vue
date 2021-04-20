<template>
  <section class="main">
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;500&display=swap" rel="stylesheet">
    <Navbar />
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
    <Index :products="products.products" />
    <Footer />
  </section>
</template>

<script>
// b-icon use it --> https://fontawesome.com/icons/dollar-sign?style=solid
// NavIcon use --> https://materialdesignicons.com/icon/cart
import Card from '~/components/Card'
import Navbar from '~/components/Navbar/Navbar'
import Carousel from '~/components/Carousel/Carousel'
import Index from '~/components/Flexbox/Index'
import Footer from '~/components/Footer/Footer'
import { mapState } from 'vuex';

export default {
  name: 'HomePage',
  components: {
    Card, Navbar, Carousel, Index, Footer
  },
  computed: {
    ...mapState('products', ['products'])
  },
  data(){
    return{

    }
  },
  created() {
    this.$store.dispatch('products/loadProducts')
    if(process.browser){
     //this.cartLength = JSON.parse(localStorage.getItem('cartItems')).length;
    }
  }
}
</script>
<style scoped>
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


</style>
