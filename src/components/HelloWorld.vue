<template>
  <v-container>
    <div class="item">
      <h1>joKeNpo</h1>
      <p></p>
      <v-layout row wrap>
        <v-flex xs6 sm6 md3>
          <v-text-field v-model="usuario" label="Digite seu nome" outline></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex xs6>
          <div class="text-xs-center">
            <v-btn round color="primary" dark :to="`/resultado/${this.usuario}`">Entrar</v-btn>
          </div>
        </v-flex>
      </v-layout>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      usuario: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-family: "Permanent Marker", cursive;
  font-size: 60px;
  position: relative;
  right: 25%;
}
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.item {
  padding-top: 30%;
}
</style>
