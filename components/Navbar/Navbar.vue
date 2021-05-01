<template>

<div>
 <b-navbar  :fixed-top="fixedTop">
        <template #brand>
          <BrandIcon :url="'/'" :brand_logo="brand_logo" />
         <div class="navbar-search">
          <NavSearch />
        </div>
        </template>
        <template #start>
          <div class="mobile-menu">
          <b-navbar-item href="#">
                Carrinho
            </b-navbar-item>
            <b-navbar-item href="#">
                Perfil
            </b-navbar-item>
            <b-navbar-item href="#">
                Sair
            </b-navbar-item>
          </div>
        </template>
        <template #end>
          <div class="navbar-menu">
            <div class="navbar-end">

                <a
                @click="openCheckout"
                class="navbar-item"
                role="button">
                {{cartLength}}
                <b-icon icon="shopping-cart" style="color: red;" size="is-medium" ></b-icon>
            </a>

            <NavIcon :checkout="false" icon="user"/>
            </div>
        </div>
        </template>
    </b-navbar>
    </div>
</template>
<script>
import NavIcon from '~/components/Navbar/NavIcon'
import BrandIcon from '~/components/Navbar/BrandIcon'
import NavSearch from '~/components/Navbar/NavSearch'

export default {
  components: {
    NavIcon, BrandIcon, NavSearch
  },
  props: ['cartLength', 'fixedTop'],
  data() {
    return {
      brand_logo: "https://www.freepnglogos.com/uploads/logo-ifood-png/ifood-pizzaria-santa-clara-logo-phone-mobile-ifood-png-6.png",
    }
  },
  methods: {
    openCheckout(){
      window.location.replace("/checkout");
    }
  }
}
</script>

<style scoped>
  .navbar {
    background-color: rgba(242, 241, 239, 1) !important;
    height: 10vh !important;
    padding-left: 30vh !important;
    padding-right: 30vh !important;
  }

  .mobile-menu{
    display: none;
  }

  .aifood_logo {
    cursor: pointer;
    height: 80px !important;
    padding-top: 15px !important;
    padding-left: 5px !important;
  }
  .navbar-search{
      padding-top: 25px !important;
      padding-left: 50% !important;
  }
  .navbar-menu{
    padding-top: 12px !important;
  }
  .navbar-search-input{
    width: 400px !important;
  }

@media (max-width: 1000px) {
  .aifood_logo {
    cursor: pointer;
    height: 45px !important;
    padding-top: 5px !important;
  }
  .navbar {
    height: 10vh !important;
    padding-left: 0vh !important;
    padding-right: 0vh !important;
  }
  .navbar-search{
    padding-top: 2vh !important;
    padding-left: 1vh !important;
    width: 68% !important;
  }
  .mobile-menu{
    display: inline-block;
  }
}

  @media screen and (min-width: 1024px){
    .navbar {
      background-color: rgba(242, 241, 239, 1) !important;
      height: 10vh !important;
      padding-left: 30vh !important;
      padding-right: 30vh !important;
    }
  }
</style>
