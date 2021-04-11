<template>
  <b-field message="Busque por um item...">
    <b-input class="navbar-search-input" placeholder="Pesquisar..."
        type="search"
        icon="magnify"
        >
    </b-input>
    <p class="control">
        <b-button style="background-color: red; color: white;" type="" label="Search" />
    </p>
  </b-field>
</template>

<script>
export default {

}
</script>

<style scoped>
  .navbar-search-input{
    width: 400px !important;
  }
</style>
