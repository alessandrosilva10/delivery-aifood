<template>
<client-only>
      <div v-if="!isMobile">
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
                            v-model="username"
                            type="text"
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
        <div class="column">
          <b-button
            @click="login()"
            class="button"
            style="margin-top: 2vh; float: left; color: deepskyblue"
            icon-pack="fas"
            icon-left="sign-in-alt">
              Entrar
          </b-button>
        </div>
        <div class="column">            <b-button
                    class="button"
                    style="margin-top: 2vh; float: right; color: deepskyblue"
                    icon-pack="fas"
                    icon-left="user-plus">
                    Cadastrar
                  </b-button></div>
      </div>





      <div class="columns is-mobile">
        <div class="column">
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
  </div>
  <div v-else-if="isMobile">
        <div class="">
          <h1 class="title">Faça o login no Aifood</h1>
          <div class="columns is-centered is-mobile">
            <div class="column">
              <div style="margin-top: 7vh; width: 80%; margin-left: 11%" class="card">
                <div class="card-content">
                <section style="padding-top: 1vh;">
                  <h3 class="subtitle">Faça o login com a sua conta</h3>
                    <b-field>
                        <b-input placeholder="Email"
                             v-model="username"
                            type="text"
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
                      <div class="column">               <b-button
                                  class="button"
                                  style="margin-top: 2vh; float: left; color: deepskyblue"
                                  icon-pack="fas"
                                    icon-left="sign-in-alt">
                                    Entrar
                                </b-button></div>
                      <div class="column">            <b-button
                                  class="button"
                                  style="margin-top: 2vh; float: right; color: deepskyblue"
                                  icon-pack="fas"
                                  icon-left="user-plus">
                                  Cadastrar
                                </b-button></div>
                    </div>
                      <div class="columns is-mobile">
                        <div class="column">
                          <vue-hcaptcha  style="  display: table;
                        margin: 0 auto;" sitekey="b928ba3d-0c43-42eb-9a01-27570a8aec49"
                                language="por"
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
     </div>
     </client-only>
</template>

<script>
import axios from 'axios';
import VueHcaptcha from '@hcaptcha/vue-hcaptcha';

export default {
  components: { VueHcaptcha },
  data() {
    return {
      email: '',
      username: '',
      password: '',
      verified: true,
      expired: false,
      token: null,
      eKey: null,
      error: null,
    }
  },
 computed: {
    isMobile () {
      if (process.client) {
          if (screen.width <= 760) {
            return true
          } else {
            return false
        }
      }
    }
},
beforeCreate(){
  if(this.$auth.loggedIn){
        window.open("/", "_self")
      }
},
    methods: {
      async login(){
        if(this.verified){
            try {
              let response = await this.$auth.loginWith('local', {
                data: {
                  username: this.username, password: this.password
                }
              });
            window.open("/","_self")

            this.$buefy.toast.open({
            message: 'Login realizado com sucesso!',
            type: 'is-success',
            duration: 2500,
            position: 'is-top-right'
          }); //this.$auth.strategy.token.sync()
        }catch (err) {
          console.log(err)
        }
      }else{
        this.$buefy.toast.open({
            message: 'Você precisa ativar o Hcaptcha!',
            type: 'is-warning',
            duration: 2500,
            position: 'is-top-right'
          });
      }
    },
        getImage(){
          return "../images/hotdog_logo.png";
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
  background: linear-gradient(to right, rgba(34, 167, 240, 1), rgba(137, 196, 244, 1)) !important;
}

html.md-theme-default {
    background-color: var(--md-theme-default-text-primary-on-background-variant,  linear-gradient(to right, rgba(34, 167, 240, 1), rgba(137, 196, 244, 1)) ) !important;
}

.title {
  padding-top: 15vh; text-align:center; color: white; font-family: Roboto,sans-serif; font-size: 5vh;
}

@media (min-width:960px) { .card {
  margin-top: 15vh;
  width: 75%;
  }
 }


.logo {
width: 50%;
margin-top: 15vh;
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

.card {
  border: 1px solid deepskyblue;
  border-radius: 2.5vh !important;
}

.button {
  margin-left: 6vh !important;
  margin-right: 6vh !important;
}

.button:hover {
  color: white !important;
  background-color: deepskyblue !important;
  transform: scale(1.1)
}
</style>
