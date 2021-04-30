<template>
      <footer class="footer">
  <div class="content">
    <div class="columns">
        <div class="column">
  <GmapMap
      :center='center'
      :zoom='15'
      style='width:100%;  height: 400px;'
    />
  </div>
  <div class="column">
  </div>
</div>
   <div style="margin-left: 40%; padding-bottom:10px; height: 10px !important;" class="columns is-mobile is-centered">
      <div class="column" style="">

           <b-tooltip label="Página principal do aifood"
            position="is-bottom">
             <BrandIcon :url="'/'" brand_logo="https://www.freepnglogos.com/uploads/logo-ifood-png/ifood-pizzaria-santa-clara-logo-phone-mobile-ifood-png-6.png"/>
        </b-tooltip>

        <b-tooltip label="Instagram"
            position="is-bottom"
            :animated="false">
          <BrandIcon :url="'https://www.instagram.com/teste'" :brand_logo="require('~/assets/images/instagram.png')"/>
        </b-tooltip>

        <b-tooltip label="Facebook"
            position="is-bottom"
            :animated="false">
          <BrandIcon :url="'www.facebook.com/teste'" :brand_logo="require('~/assets/images/facebook.png')"/>
        </b-tooltip>

        <b-tooltip label="WhatsApp"
            position="is-bottom"
            :animated="false">
          <BrandIcon :url="'www.whatsapp.com/teste'" :brand_logo="require('~/assets/images/whatsapp.png')"/>
        </b-tooltip>

           <!-- <p style="font-weight: bold; font-size: 14px; margin-top: 50px">Aifood!® é uma marca registrada de AIFOOD COMÉRCIO ELETRÔNICO S/A | CNPJ: 05.570.714/0001-59 | Todos os direitos reservados. Os preços anunciados neste site ou via e-mail promocional podem ser alterados sem prévio aviso. O Aifood! não é responsável por erros descritivos. As fotos contidas nesta página são meramente ilustrativas do produto e podem variar de acordo com o fornecedor/lote do fabricante. Este site trabalha 100% em criptografia SSL.</p>-->
      </div>
  </div>
  </div>
</footer>
</template>

<script>
import BrandIcon from '~/components/Navbar/BrandIcon'

export default {
  components: {
    BrandIcon
  },
  data() {
    return {
      center: { lat: -22.668490, lng: -50.433550 },
    }
  },
}
</script>

<style scoped>
  .aifood_logo {
    height:50px !important;
    padding-left: 35px !important;
    padding-top: 10px;
  }
</style>
