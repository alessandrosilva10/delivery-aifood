<template>

<div>
 <b-navbar :fixed-top="true">
        <template #brand>
          <BrandIcon :brand_logo="brand_logo" />
        </template>
        <template #start>
                   <div class="navbar-search">
          <NavSearch />
        </div>
        </template>
        <template #end>
          <div class="navbar-menu">
            <div class="navbar-end">
                <a
                @click="openCheckout"
                class="navbar-item"
                role="button">
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
  data() {
    return {
      brand_logo: "https://www.freepnglogos.com/uploads/logo-ifood-png/ifood-pizzaria-santa-clara-logo-phone-mobile-ifood-png-6.png"
    }
  },
  methods: {
    openCheckout(){
      this.$router.push('/checkout')
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

  .aifood_logo {
    height: 80px !important;
    padding-top: 15px !important;
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

  @media screen and (min-width: 1024px){
  .navbar {
    background-color: rgba(242, 241, 239, 1) !important;
    height: 10vh !important;
    padding-left: 30vh !important;
    padding-right: 30vh !important;
  };
  }
</style>
