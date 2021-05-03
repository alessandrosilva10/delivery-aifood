<template>
  <div class="container">
    <h1 class="title">Gostaria de fazer o login com a sua conta do aifood?</h1>
    <div class="columns is-centered is-mobile">
      <div class="column">
      <img class="logo" style="" :src="getImage()" />
      </div>
      <div class="column">
        <div class="card">
          <div class="card-content">
          <section style="padding-top: 1vh;">
            <h3 class="subtitle">Faça o login com a sua conta</h3>
              <b-field>
                  <b-input placeholder="Email"
                      v-model="email"
                      type="email"
                      icon-pack="fas"
                      icon="envelope">
                  </b-input>
              </b-field>
              <b-field>
                  <b-input type="password"
                      v-model="password"
                        icon-pack="fas"
                      icon="unlock-alt"
                      placeholder="Senha"
                      password-reveal>
                  </b-input>
              </b-field>

<div class="columns">
  <div class="column">               <b-button type="is-success"
               style="margin-top: 2vh; float: left;"
               icon-pack="fas"
                icon-left="sign-in-alt">
                Entrar
            </b-button></div>
  <div class="column">            <b-button type="is-danger"
              style="margin-top: 2vh; float: right;"
              icon-pack="fas"
              icon-left="user-plus">
              Cadastrar
            </b-button></div>
</div>





<div class="columns is-mobile">
  <div class="column is-half is-offset-one-quarter">
    <vue-hcaptcha  style="  display: table;
  margin: 0 auto;" sitekey="b928ba3d-0c43-42eb-9a01-27570a8aec49"
          @verify="onVerify"
            @expired="onExpire"
            @error="onError"
  ></vue-hcaptcha>
  </div>
</div>




          </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
 import VueHcaptcha from '@hcaptcha/vue-hcaptcha';

export default {
  components: { VueHcaptcha },
  data() {
    return {
      email: '',
      password: '',
      verified: false,
      expired: false,
      token: null,
      eKey: null,
      error: null,
    }
  },
    methods: {
        getImage(){
          return "../images/chocolate_logo.png";
        },
        onVerify(token, ekey) {
            this.verified = true;
            this.token = token;
            this.eKey = ekey;
            console.log(`Callback token: ${token}, ekey: ${ekey}`);
        },
        onExpire() {
            this.verified = false;
            this.token = null;
            this.eKey = null;
            this.expired = true;
            console.log('Expired');
        },
        onError(err) {
            this.token = null;
            this.eKey = null;
            this.error = err;
            console.log(`Error: ${err}`);
        },
        onSubmit() {
            console.log('Submitting the invisible hCaptcha', this.$refs.invisibleHcaptcha);
            this.$refs.invisibleHcaptcha.execute();
        }
    }
}
</script>

<style >
body{
  background: linear-gradient(to right, rgba(34, 167, 240, 1), rgba(137, 196, 244, 1));
}

.title {
  padding-top: 15vh; text-align:center; color: white; font-family: Roboto,sans-serif; font-size: 5vh;
}

.card {
  margin-top: 15vh;
  width: 75%;
}

.logo {
width: 50%;
margin-top: 12vh;
}

.subtitle {
  color:  grey!important;
  text-align: center;
}

.control {
  color: black !important;
}

.b-button {
  margin-top: 2.5vh !important;
}
</style>
