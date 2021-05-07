<template>
  <div>
    <Navbar :fixedTop="false"/>
  <div class="container">
    <br> <br> <br>
  <div class="columns">
  <div class="column"></div>
  <div class="column  is-one-quarter is-mobile">
     <section>
        <b-field label="Nome">
            <b-input :value="address.user_first_name"></b-input>
        </b-field>

        <b-field label="Sobrenome">
            <b-input :value="address.user_last_name"></b-input>
        </b-field>

        <b-field label="Telefone residencial">
            <b-input :value="address.user_landline"></b-input>
        </b-field>

        <b-field label="Telefone celular">
            <b-input type="text"  id="phone" data-politespace data-grouplength="3,3,4" :value="address.user_phone_number"></b-input>
        </b-field>

        <b-field label="Status da conta">
            <b-input :value="address.account_status"></b-input>
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

export default {
  middleware: 'auth',
  components: {
    Navbar
  },
  computed: {
    ...mapState('profile', ['profile']),
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
