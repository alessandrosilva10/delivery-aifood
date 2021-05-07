<template>
  <div>
    <Navbar :fixedTop="false"/>
  <div class="container">
    <div class="columns">
  <div v-for="(opt, id) in address" :key="id" class="column is-one-fifth is-mobile">
        <div class="card">
  <div class="card-content">
    <div class="content">
      {{opt.user_id}}<br/>
      {{opt.user_first_name}}<br/>
      {{opt.user_last_name}}<br/>
      {{opt.user_phone_number}}<br/>
      {{opt.user_landline}}<br/>
      {{opt.user_image_path}}<br/>
      {{opt.account_status}}<br/>
    </div>
  </div>
</div>
  </div>
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
   this.address = this.$store.getters['profile/address']
  },
  data() {
    return{
      address: null,
      options: [
        {
          title: 'Meus Pedidos'
        },
                {
          title: 'Meu Endereço'
        },
                {
          title: 'Meus Pedidos'
        },
                {
          title: 'Meus Pedidos'
        }
            ,    {
          title: 'Meus Pedidos'
        },
                {
          title: 'Meus Pedidos'
        }
           ,     {
          title: 'Meus Pedidos'
        },
                {
          title: 'Meus Pedidos'
        },
                {
          title: 'Meus Pedidos'
        }
      ],
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
