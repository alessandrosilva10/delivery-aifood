<template>
    <b-dropdown v-if="!checkout"
        v-model="navigation"
        position="is-bottom-left"
        append-to-body
        aria-role="menu">
        <template #trigger>
            <a
                class="navbar-item"
                role="button">
                <b-icon :icon="icon" style="color: red;" size="is-medium"></b-icon>
            </a>
        </template>

        <b-dropdown-item v-if="this.$auth.loggedIn" custom aria-role="menuitem">
            Logado como <b>{{this.$auth.user.username}}</b>
        </b-dropdown-item>
        <b-dropdown-item v-else custom aria-role="menuitem">
            Logado como <b>visitante</b>
        </b-dropdown-item>

        <hr class="dropdown-divider">
        <b-dropdown-item has-link aria-role="menuitem">
            <a style="text-decoration: none;" href="/perfil" target="">
            <b-icon icon="user"></b-icon>
                Meu perfil
            </a>
        </b-dropdown-item>

                <b-dropdown-item has-link aria-role="menuitem">
            <a style="text-decoration: none;" href="https://google.com" target="_blank">
                <b-icon icon="money-check"></b-icon>
                Meus pedidos
            </a>
        </b-dropdown-item>
        <b-dropdown-item has-link aria-role="menuitem">
            <a style="text-decoration: none;" href="https://google.com" target="_blank">
                <b-icon icon="hands-helping"></b-icon>
                Suporte
            </a>
        </b-dropdown-item>
        <hr class="dropdown-divider" aria-role="menuitem">
        <b-dropdown-item v-if="this.$auth.loggedIn === false" has-link aria-role="menuitem">
            <a style="text-decoration: none;" href="/login" target="">
                <b-icon icon="lock-open"></b-icon>
                Entrar
            </a>
        </b-dropdown-item>
<b-dropdown-item v-else has-link aria-role="menuitem">
            <a style="text-decoration: none;" @click="logout()">
                <b-icon icon="sign-out-alt"></b-icon>
                Sair
            </a>
        </b-dropdown-item>
    </b-dropdown>
</template>

<script>

export default {
  components: {

  },
  props: {
    icon: {
      type: String,
      required: true
    },
    checkout: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    logout(){
      this.$auth.logout()
      this.$buefy.toast.open({
        message: 'Logout realizado com sucesso!',
        type: 'is-success',
        duration: 2500,
        position: 'is-top-right'
      });
      window.open('/', '_self');
    }
  },
    data() {
        return {
            navigation: 'home'
        }
    }
}
</script>

<style scoped>

</style>
