<template>
    <img
        class="aifood_logo"
        :src="brand_logo"
        alt="Aifood"
  >
</template>

<script>
export default {
  props: {
    brand_logo: {
      type: String,
      required: true
    }
  }
}
</script>

<style>

</style>
