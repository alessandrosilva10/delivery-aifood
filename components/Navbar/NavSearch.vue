<template>
  <b-field message="">
    <b-input class="navbar-search-input" placeholder="Busque por um item..."
        type="search"
        icon="search-dollar"
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
