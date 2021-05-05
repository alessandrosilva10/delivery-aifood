<template>
  <div>
    <Navbar :fixedTop="false"/>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar/Navbar'

export default {
  middleware: 'auth',
  components: {
    Navbar
  }
}
</script>

<style>

</style>
