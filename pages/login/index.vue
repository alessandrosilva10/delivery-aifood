<template>
  <div class="container">
    <h1 class="title">Gostaria de fazer o login com a sua conta do aifood?</h1>
    <div class="columns is-centered is-mobile">
      <div class="column">
      <img class="logo" style="" src="images/chocolate_logo.png" />
      {{email}} {{password}}
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

                  <div class="columns is-centered is-mobile">
      <div class="column is-2 ">
               <b-button type="is-success"
               style="float: left; margin-top: 2vh;"
               icon-pack="fas"
                icon-left="sign-in-alt">
                Entrar
            </b-button>
      </div>
            <div class="column is-8">
<vue-hcaptcha  style="  display: table;
  margin: 0 auto;" sitekey="b928ba3d-0c43-42eb-9a01-27570a8aec49"></vue-hcaptcha>
      </div>
            <div class="column is-2 ">
            <b-button type="is-danger"
              style="float: right; margin-top: 2vh;"
              icon-pack="fas"
              icon-left="user-plus">
              Cadastrar
            </b-button>
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
      password: ''
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
  width: 100%;
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
