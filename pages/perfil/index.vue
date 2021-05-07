<template>
  <div>
    <Navbar :fixedTop="false"/>
  <div class="container">
    <br> <br> <br>
  <div class="columns">
  <div class="column"></div>
  <div class="column  is-one-fifths is-mobile">
     <section>
        <span style="font-size: 28px; font-weight: bold;">Dados do cliente </span>
<br><br>
        <b-field label="Nome">
            <b-input :value="address.user_first_name"></b-input>
        </b-field>

        <b-field label="Sobrenome">
            <b-input :value="address.user_last_name"></b-input>
        </b-field>

        <b-field label="Telefone residencial">
            <b-input type="tel" name="phone" ref="kPhone" :value="address.user_landline"></b-input>
        </b-field>

        <b-field label="Telefone celular">
            <b-input type="tel" name="phone" ref="kPhone2"  :value="address.user_phone_number"></b-input>
        </b-field>

        <b-field label="Status da conta">
            <b-input disabled v-if="address.account_status" value="Ativo"></b-input>
            <b-input disabled v-else value="Desativada"></b-input>
        </b-field>
        <br>
        <b-button type="is-danger" outlined>Confirmar dados</b-button>
    </section>
  </div>
  <div class="column"></div>
</div>

</div>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar/Navbar'
import { mapState } from 'vuex';
import Cleave from 'cleave.js';
import "cleave.js/dist/addons/cleave-phone.BR";

export default {
  middleware: 'auth',
  components: {
    Navbar
  },
  computed: {
    ...mapState('profile', ['profile']),
  },
  mounted(){
    let element = this.$refs.kPhone.$el.querySelector('input');

    new Cleave(element, {
      phone: true,
      phoneRegionCode: "BR",
      blocks: [2, 4, 4],
      delimiters: [' (', ') ', '-', '-']
    });


    let element2 = this.$refs.kPhone2.$el.querySelector('input');

    new Cleave(element2, {
      phone: true,
      phoneRegionCode: "BR",
      blocks: [2, 5, 4],
     delimiters: [' (', ') ', '-', '-']
    });

  },
  async created(){
   await this.$store.dispatch('profile/loadProfile')
   this.address = this.$store.getters['profile/address'][0]
  },
  data() {
    return{
      address: {},
    }
  }
}
</script>

<style scoped>
.columns {
  margin: 0 auto;
}

body {
  position: relative;
  height: auto;
  min-height: 100% !important;
}
</style>
