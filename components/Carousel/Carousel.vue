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
            @click.native='openFoodCategory(items[count], count++)'
        />
    </section>
</template>

<script>
export default {
    methods: {
      openFoodCategory(a){
      this.$router.push(a.url)
    }
    },
    data() {
        return {
            count: 0,
            arrow: true,
            arrowHover: true,
            drag: true,
            gray: false,
            opacity: false,
            overlay: true,
            values: 1,
            perList: 10,
            increment: 1,
            repeat: true,
            items: [
                {
                    alt: 'Slide 1',
                    title: 'Slide 1',
                    image: "images/hotdog_logo.png",
                    srcFallback: 'https://picsum.photos/id/0/1230/500',
                    url: '/cachorro-quente'
                },
                               {
                    alt: 'Slide 1',
                    title: 'Slide 1',
                    image: "images/burguer_logo.png",
                    srcFallback: 'https://picsum.photos/id/0/1230/500',
                     url: '/hamburguer'
                },
                                {
                    alt: 'Slide 1',
                    title: 'Slide 1',
                    image: "images/cake_logo.png",
                    srcFallback: 'https://picsum.photos/id/0/1230/500',
                     url: '/bolos'
                },
                                {
                    alt: 'Slide 1',
                    title: 'Slide 1',
                    image: "images/coke_logo.png",
                    srcFallback: 'https://picsum.photos/id/0/1230/500',
                     url: '/refrigerantes'
                },
                               {
                    alt: 'Slide 1',
                    title: 'Slide 1',
                    image: "images/burguer_logo.png",
                    srcFallback: 'https://picsum.photos/id/0/1230/500',
                     url: '/hamburguer'
                },
                               {
                    alt: 'Slide 1',
                    title: 'Slide 1',
                    image: "images/pizza_logo.png",
                    srcFallback: 'https://picsum.photos/id/0/1230/500',
                     url: '/pizzas'
                },
                               {
                    alt: 'Slide 1',
                    title: 'Slide 1',
                    image: "images/chocolate_logo.png",
                    srcFallback: 'https://picsum.photos/id/0/1230/500',
                     url: '/chocolates'
                },                               {
                    alt: 'Slide 1',
                    title: 'Slide 1',
                    image: "images/fries_logo.png",
                    srcFallback: 'https://picsum.photos/id/0/1230/500',
                     url: '/batata-frita'
                }, {
                    alt: 'Slide 1',
                    title: 'Slide 1',
                    image: "images/hotdog_logo.png",
                    srcFallback: 'https://picsum.photos/id/0/1230/500',
                     url: '/hotdog'
                },
                                 {
                    alt: 'Slide 1',
                    title: 'Slide 1',
                    image: "images/burguer_logo.png",
                    srcFallback: 'https://picsum.photos/id/0/1230/500',
                     url: '/hamburguer'
                },



    ]
        }
    }
}
</script>
<style>
</style>
