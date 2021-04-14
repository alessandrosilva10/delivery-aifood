<template>
    <b-tabs type="is-toggle">
        <b-tab-item>
            <template #header>
                <b-icon style="color: blue;" icon="clock"></b-icon>
                <span> Aguardando <b-tag rounded> 3 </b-tag> </span>
            </template>
            <p style="text-align:center;">Pedidos aguardando aprovação</p><br>
                What light is light, if Silvia be not seen? <br>
                What joy is joy, if Silvia be not by— <br>
                Unless it be to think that she is by <br>
                And feed upon the shadow of perfection? <br>
                Except I be by Silvia in the night, <br>
                There is no music in the nightingale.
        </b-tab-item>
        <b-tab-item>
            <template #header>
                <b-icon style="color: red" icon="exclamation-triangle"></b-icon>
                <span> Cancelado <b-tag rounded> 3 </b-tag> </span>
            </template>
             <p style="text-align:center;">Pedidos cancelados</p><br>
                  What light is light, if Silvia be not seen? <br>
                What joy is joy, if Silvia be not by— <br>
                Unless it be to think that she is by <br>
                And feed upon the shadow of perfection? <br>
                Except I be by Silvia in the night, <br>
                There is no music in the nightingale.
        </b-tab-item>
    </b-tabs>
</template>

<script>
export default {
    data() {
        return {
            count: 1
        }
    },
    mounted() {
        setTimeout(() => {
            this.count++;
        }, 3 * 1000)
    }
}
</script>

<style>
a {
    color: #7957d5;
    text-decoration: none;
}

.tabs li.is-active a {
    background-color: white !important;
    color:grey !important;
    text-decoration: none !important;
}

.tabs.is-toggle li.is-active a {
    background-color:white !important;
    color:grey !important;
    z-index: 1;
    text-decoration: none !important;
}
.tabs.is-toggle a {
    background-color: white !important;
    color:grey !important;
    z-index: 1;
    text-decoration: none !important;
    border-color: grey !important;
}
</style>
