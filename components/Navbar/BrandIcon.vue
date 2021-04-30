<template>

  <img
        tag="img"
        class="aifood_logo"
        :src="brand_logo"
        alt="Aifood"
        @click="open(url)">

</template>

<script>
export default {
  props: {
    brand_logo: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  },
  methods: {
    open(url){
        window.open(url, '_blank');
    }
  }
}
</script>

<style>

</style>
