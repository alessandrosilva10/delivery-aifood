<template>
  <div>
    <Navbar :fixedTop="false"/>
  <div class="container">
    <div class="columns">
  <div v-for="(opt, id) in options" :key="id" class="column is-one-fifth is-mobile">
        <div class="card">
  <div class="card-content">
    <div class="content">
        {{opt.title}}
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

export default {
  middleware: 'auth',
  components: {
    Navbar
  },
  data() {
    return{
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
