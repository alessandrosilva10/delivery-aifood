<template>
    <section>
        <b-carousel-list 
            :items-to-show="perList"
            :has-shadow="false"
            class="carousel"
            v-model="values"
            :data="items"
            :arrow="arrow"
            :arrow-hover="arrowHover"   
            :items-to-list="increment"
            :repeat="repeat"
            :has-drag="drag"
            :has-grayscale="gray"
            :has-opacity="opacity"
            @click.native="test"
        />
    </section>
</template>

<script>
export default {
    props: ['items'],
    methods: {
      test() {

      }
    },
    data() {
        return {
            arrow: true,
            arrowHover: true,
            drag: true,
            gray: false,
            opacity: false,
            overlay: true,
            values: 1,
            perList: 10,
            increment: 1,
            repeat: true
        }
    }
}
</script>
<style>
</style>
