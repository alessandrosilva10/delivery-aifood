<template>
          <section>
        <b-modal :canCancel="['x']" :active.sync="isComponentModalActive" has-modal-card>
            <!--<div  class="modal-card" style="width: 900px; height: 500px">-->
              <div  class="modal-card" style="">
                <header class="modal-card-head">
                    <h1 style="text-align: center; font-weight: 500; font-size: 1.0rem" class="modal-card-title">Adicione ao seu pedido</h1>
                </header>
                <section class="modal-card-body">

                                <div class="columns is-mobile">
                <div  class="column is-half">
                    <b-field label="">

                            <figure class="image is-3by2">
               <img class="" :src="getImgModal()" alt="a">
              </figure>
                    </b-field>
                </div>
                <div class="column is-half">
                  <p>{{product_name}}</p>
                  <p>Valor: R${{value}} reais</p>
                  <p>Assada na hora</p>
                  <p>Entrega grátis</p>
                  <br>
                   <p>Algum comentário?</p>
                   <br/>
                      <b-field label="">
                        <b-input maxlength="200" v-model="observation" placeholder="Ex: tirar a cabelo, maionese à parte etc." type="textarea"></b-input>
                    </b-field>
                    </div>
              </div>
              <div class="columns is-centered" style="padding-top: 10px;">
              <b-field label="">
                 <b-button style=" background-color: red; color: white"
                     @click="closeModal"
                icon-left="window-close">
                Fechar
            </b-button>

      <b-numberinput v-model="quantity_order" style="margin-left: 20px; width: 120px;  background-color: red !important; color: white" controls-position="compact" @click="quantity_order++" min="1"></b-numberinput>
              <b-button
              style="margin-left: 20px; background-color: red; color: white"
                icon-left="plus"

                @click="addOrder"
                >
                Adicionar
            </b-button>

            </b-field></div>
                </section>
            </div>
        </b-modal>
</section>
</template>

<script>
export default {
  props: ['addOrder', 'closeModal', 'quantity_order', 'getImgModal', 'product_name', 'value', 'observation', 'isComponentModalActive'],

}
</script>

<style>
.modal-card {
   width: 900px; height: 470px;
}

@media (max-width: 1000px) {
  .modal-card {
    width: 100% !important; height: 470px !important;
  }
}

.button.is-primary:hover {
    background-color: red;
    color: #fff;
}
.button.is-primary {
    background-color: red;
    color: #fff;
}

</style>
