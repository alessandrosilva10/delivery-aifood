<template>
<div>
        <b-notification :closable="false">
             <h1 style="padding-top: 150px; padding-bottom: 50px; text-align: center; font-size: 4vh">Um momento estamos carregando os produtos da loja</h1>
            <b-loading :is-full-page="isFullPage" v-model="isLoading" :can-cancel="true"></b-loading>
        </b-notification>
       </div>
</template>

<script>
export default {
    props: ['isLoading', 'isFullPage']
}
</script>

<style>

</style>
