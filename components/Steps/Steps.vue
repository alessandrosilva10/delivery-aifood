<template>
    <section>
        <b-steps
            v-model="activeStep"
            :animated="isAnimated"
            :rounded="isRounded"
            :has-navigation="hasNavigation"
            :icon-prev="prevIcon"
            :icon-next="nextIcon"
            :label-position="labelPosition"
            :mobile-mode="mobileMode">
            <b-step-item label="Carrinho" icon="cart-plus" :clickable="isStepsClickable">
                <h1 class="title has-text-centered">Carrinho</h1>
                Lorem ipsum dolor sit amet.
            </b-step-item>


            <b-step-item label="Perfil" icon="user":clickable="isStepsClickable" :type="{'is-success': isProfileSuccess}">
                <h1 class="title has-text-centered">Perfil</h1>
                Lorem ipsum dolor sit amet.
            </b-step-item>

            <b-step-item label="Pagamento" icon="dollar-sign"" :visible="showSocial" :clickable="isStepsClickable">
  <div style="padding-top: 40px; padding-bottom: 100px;     align-items: center;
  display: flex;
  justify-content: center;">
               <div class="is-offset-one-quarter box" style="background-color: #63a4ff;
background-image: linear-gradient(315deg, #63a4ff 0%, #63a4ff 74%); width: 50vh;"><br>
<center><span style="color: #fff">Pague utilizando o seu cartão de crédito</span></center>
<br>
    <stripe-element-card
      pk="pk_test_51IW1MBLrIdC5lYpk3Eqqny4PX4tQbniOyHXycjppEhSgkP8nVLDdDW8elbkDF3RTHLXfik1EkkM07yGTtG5D7NYn003Qh6xdTp"
      ref="elementRef"
      @token="tokenCreated"
      :hidePostalCode="true"
      locale="pt"
      :elementStyle="style"
      />
      <PaymentImages />

      <b-button style="width: calc(100%);" type="is-primary" inverted outlined @click="pay">      <b-icon
            icon=""
            size="is-small"
      /> Pagar</b-button>
      <!--
      <button style="
      display: block;
    width: calc(100%);
    height: 40px;
    background-color: white;
    border-radius: 4px;
    border-color: white;
    color: blue;
    text-transform: uppercase;
    font-weight: 600;
    cursor: pointer;
      " @click="pay">pagar</button>--><br>
  </div></div>

            </b-step-item>

            <b-step-item label="Conclusão" icon="check-circle" :clickable="isStepsClickable" disabled>
                <h1 class="title has-text-centered">Conclusão</h1>
                Lorem ipsum dolor sit amet.
            </b-step-item>

            <template
                v-if="customNavigation"
                #navigation="{previous, next}">
                <b-button
                    outlined
                    type="is-danger"
                    icon-pack="fas"
                    icon-left="backward"
                    :disabled="previous.disabled"
                    @click.prevent="previous.action">
                    Anterior
                </b-button>

                <b-button
                    style="float: right"
                    outlined
                    type="is-success"
                    icon-pack="fas"
                    icon-right="forward"
                    :disabled="next.disabled"
                    @click.prevent="next.action">
                    Próximo
                </b-button>
            </template>
        </b-steps>
    </section>
</template>

<script>
import PaymentImages from '~/components/Stripe/PaymentImages'

    export default {
    components: {
    PaymentImages
    },
        data() {
            return {
            style:  {
      base: {
      width: "50px",
        fontSize: "18px",
        color: "black",
        fontFamily: "Quicksand",
        letterSpacing: "2px",
        fontSmoothing: "antialiased",
        "::placeholder": {
          color: "black"
        },
        padding: "11110px",

      }},
                activeStep: 0,

                showSocial: true,
                isAnimated: true,
                isRounded: true,
                isStepsClickable: false,

                hasNavigation: true,
                customNavigation: true,
                isProfileSuccess: false,

                prevIcon: 'chevron-left',
                nextIcon: 'chevron-right',
                labelPosition: 'bottom',
                mobileMode: 'minimalist'
            }
        },methods: {
    onChange(value){
      console.log(value)
    },
    pay(){
            this.$refs.elementRef.submit();
      },
    tokenCreated (token) {
      alert(token.id)
       this.$socket.emit("test_message", {"data": token.id})
     // console.log(this.$refs.elementRef)
    },
  }
    }
</script>

<style scoped>


</style>
