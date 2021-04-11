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
        <b-dropdown-item custom aria-role="menuitem" style="width: 500px">
            Logged as <b>Rafael Beraldo</b>
        </b-dropdown-item>
        <hr class="dropdown-divider">
        <b-dropdown-item has-link aria-role="menuitem">
            <a href="https://google.com" target="_blank">
                <b-icon icon="link"></b-icon>
                Google (link)
            </a>
        </b-dropdown-item>
        <b-dropdown-item value="home" aria-role="menuitem">
            <b-icon icon="home"></b-icon>
            Home
        </b-dropdown-item>
        <b-dropdown-item value="products" aria-role="menuitem">
            <b-icon icon="cart"></b-icon>
            Products
        </b-dropdown-item>
        <b-dropdown-item value="blog" disabled aria-role="menuitem">
            <b-icon icon="book-open"></b-icon>
            Blog
        </b-dropdown-item>
        <hr class="dropdown-divider" aria-role="menuitem">
        <b-dropdown-item value="settings">
            <b-icon icon="settings"></b-icon>
            Settings
        </b-dropdown-item>
        <b-dropdown-item value="logout" aria-role="menuitem">
            <b-icon icon="logout"></b-icon>
            Logout
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
    data() {
        return {
            navigation: 'home'
        }
    }
}
</script>

<style scoped>

</style>
