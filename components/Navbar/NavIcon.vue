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
        <b-dropdown-item custom aria-role="menuitem">
            Logged as <b>Rafael Beraldo</b>
        </b-dropdown-item>
        <hr class="dropdown-divider">
        <b-dropdown-item has-link aria-role="menuitem">
            <a style="text-decoration: none;" href="https://google.com" target="_blank">
                <b-icon icon="link"></b-icon>
                Google (link)
            </a>
        </b-dropdown-item>
                <b-dropdown-item has-link aria-role="menuitem">
            <a style="text-decoration: none;" href="https://google.com" target="_blank">
                <b-icon icon="link"></b-icon>
                Google (link)
            </a>
        </b-dropdown-item>
        <b-dropdown-item has-link aria-role="menuitem">
            <a style="text-decoration: none;" href="https://google.com" target="_blank">
                <b-icon icon="link"></b-icon>
                Google (link)
            </a>
        </b-dropdown-item>
        <hr class="dropdown-divider" aria-role="menuitem">
<b-dropdown-item has-link aria-role="menuitem">
            <a style="text-decoration: none;" href="https://google.com" target="_blank">
                <b-icon icon="link"></b-icon>
                Google (link)
            </a>
        </b-dropdown-item>
<b-dropdown-item has-link aria-role="menuitem">
            <a style="text-decoration: none;" href="https://google.com" target="_blank">
                <b-icon icon="link"></b-icon>
                Google (link)
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
    data() {
        return {
            navigation: 'home'
        }
    }
}
</script>

<style scoped>

</style>
