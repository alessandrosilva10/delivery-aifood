
  <template>
  <b-navbar :fixed-top="true" :transparent="true" >
        <template #brand>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
                    alt="Lightweight UI components for Vue.js based on Bulma"
                >
            </b-navbar-item>
        </template>
        <template #start>
            <b-navbar-item  class="b-navbar-item-" href="#">
                Cadastrar
            </b-navbar-item>
            <b-navbar-item  class="b-navbar-item-" href="#">
                Listar
            </b-navbar-item>
            <b-navbar-dropdown :arrowless="true"  class="b-navbar-item-" :boxed="true" :hoverable="true" label="Gráfico">
                <b-navbar-item  class="b-navbar-item-" href="#">
                    Gráfico
                </b-navbar-item>
                <b-navbar-item  class="b-navbar-item-" href="#">
                    Contact
                </b-navbar-item>
            </b-navbar-dropdown>
        </template>

        <template #end>
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-primary">
                        <strong>Sign up</strong>
                    </a>
                    <a class="button is-light">
                        Log in
                    </a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>


</template>


<script>
  export default {
    data: () => ({

    }),
  }
</script>

<style>
.navbar {
  padding-left: 80px;
  padding-right: 80px;
  padding-top: 10px;
  padding-bottom: 10px;
  border: solid 1px #E5E5E5;
  cursor: pointer;
}

.b-navbar-item-{
 text-decoration:none !important;
 color: black !important;
 font-size: 14px !important;
 font-weight: bold !important;
}

router-link a{
    text-decoration: none !important;
}

.navbar-link a:hover{
  color: white !important;
  text-decoration: none;
}
</style>

