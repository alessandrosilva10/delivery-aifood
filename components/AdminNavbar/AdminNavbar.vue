<template>
<div >
 <b-navbar :centered="true" :fixed-top="false">
       <!-- <template #brand>
          <BrandIcon  class="navbar-item" :brand_logo="brand_logo" />
        </template>-->
        <template #start>
           <div role="navigation" aria-label="main navigation">
            <div class="navbar-start">
            <b-tooltip label="Cadastrar"
                type="is-info"
                  position="is-bottom"
                    class="navbar-item"
                  square>
                <b-icon icon="plus" class="icons" style="color: white;" size="is-large" ></b-icon>
              </b-tooltip>


                     <b-tooltip label="Listar Produtos"
                       type="is-info"
            position="is-bottom"
              class="navbar-item"
            square>
           <b-icon icon="eye" class="icons" style="color: white;" size="is-large" ></b-icon>
        </b-tooltip>

             <b-tooltip label="Carrinho"
                      type="is-info"
            position="is-bottom"
              class="navbar-item"
            square>
           <b-icon icon="shopping-cart" class="icons" style="color: white;" size="is-large" ></b-icon>
        </b-tooltip>


                     <b-tooltip label="Estatística"
                     type="is-info"
            position="is-bottom"
              class="navbar-item"
            square>
           <b-icon icon="chart-pie" class="icons" style="color: white;" size="is-large" ></b-icon>
        </b-tooltip>

                     <b-tooltip label="Perfil"
                      type="is-info"
            position="is-bottom"
              class="navbar-item"
            square>
           <b-icon icon="user" class="icons" style="color: white;" size="is-large" ></b-icon>
        </b-tooltip>
                     <b-tooltip label="Sair"
                      type="is-info"
            position="is-bottom"
              class="navbar-item"
            square>
           <b-icon icon="sign-out-alt" class="icons" style="color: white;" size="is-large" ></b-icon>
        </b-tooltip>
            </div>
        </div>
        </template>
        <template #end>
          <div class="navbar-menu">
            <div class="navbar-end">
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
      alert('a')
      this.$router.push('/checkout')
    }
  }
}
</script>

<style scoped>
  .navbar {
    background-color: white !important;
    height: 10vh !important;
    padding-left: 3vh !important;
    padding-right: 3vh !important;
  }

  @media screen and (max-width: 1024px){
    .icons{
      color: grey !important;
    }
  }


  .aifood_logo {
    height: 60px !important;
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
    background-color:rgba(0, 86, 255, 0.69)!important;
    height: 10vh !important;
    padding-left: 8vh !important;
    padding-right: 8vh !important;
    padding-top: 2vh !important;
  };
  }

.navbar-item:hover {
    transform: scale(1.5);
}
</style>
