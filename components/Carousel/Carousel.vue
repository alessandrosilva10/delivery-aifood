<template>
    <section>
        <b-carousel-list
            class="carousel"
            v-model="values"
            :data="items"
            :arrow="arrow"
            :arrow-hover="arrowHover"
            :items-to-show="perList"
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
    methods: {
      test() {

        console.log('values')
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
            perList: 8,
            increment: 1,
            repeat: true,
            items: [
                {
                    title: 'Coxinha',
                    image: require('@/assets/images/10reais.png'),
                    url: 'www.google.com'
                },
                                {
                    title: 'Coxinha',
                    image: require('@/assets/images/10reais.png'),
                    url: 'www.google.com'
                },
                                {
                    title: 'Coxinha',
                    image: require('@/assets/images/10reais.png'),
                    url: 'www.google.com'
                },
                                {
                    title: 'Coxinha',
                    image: require('@/assets/images/10reais.png'),
                    url: 'www.google.com'
                },
                                {
                    title: 'Coxinha',
                    image: require('@/assets/images/10reais.png'),
                    url: 'www.google.com'
                },
                                {
                    title: 'Coxinha',
                    image: require('@/assets/images/10reais.png'),
                    url: 'www.google.com'
                },
                                {
                    title: 'Coxinha',
                    image: require('@/assets/images/10reais.png'),
                    url: 'www.google.com'
                },
                                {
                    title: 'Coxinha',
                    image: require('@/assets/images/10reais.png'),
                    url: 'www.google.com'
                },
                                {
                    title: 'Coxinha',
                    image: require('@/assets/images/10reais.png'),
                    url: 'www.google.com'
                },
                                {
                    title: 'Coxinha',
                    image: require('@/assets/images/10reais.png'),
                    url: 'www.google.com'
                },
                                {
                    title: 'Coxinha',
                    image: require('@/assets/images/10reais.png'),
                    url: 'www.google.com'
                },
                                {
                    title: 'Coxinha',
                    image: require('@/assets/images/10reais.png'),
                    url: 'www.google.com'
                },
                                {
                    title: 'Coxinha',
                    image: require('@/assets/images/10reais.png'),
                    url: 'www.google.com'
                },
                                {
                    title: 'Coxinha',
                    image: require('@/assets/images/10reais.png'),
                    url: 'www.google.com'
                },
                                {
                    title: 'Coxinha',
                    image: require('@/assets/images/10reais.png'),
                    url: 'www.google.com'
                },
                                {
                    title: 'Coxinha',
                    image: require('@/assets/images/10reais.png'),
                    url: 'www.google.com'
                },
            ]
        }
    }
}
</script>
<style scoped>
.carousel-slide{
  width: 1176px !important;
  height: 1176px !important;
}
</style>
