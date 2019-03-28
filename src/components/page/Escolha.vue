<template>
  <div>
    <v-container>
      <v-layout space-around class="mb-2">
        <v-btn flat icon to="/">
          <v-icon large>keyboard_backspace</v-icon>
        </v-btn>
      </v-layout>
    </v-container>
    <div class="item">
      <v-card max-height="200px" max-width="380px" class="pl-3 ml-3 card">
        <v-container fluid grid-list-md>
          <v-layout row wrap>
            <h2>Escolha uma opção</h2>
          </v-layout>
        </v-container>
        <v-container>
          <v-layout>
            <v-space></v-space>
            <v-radio-group v-model="color" row>
              <v-radio
                v-for="(colorValue, i) in ['Papel', 'Pedra', 'Tesoura']"
                :key="i"
                :label="colorValue"
                :value="colorValue"
              ></v-radio>
              <!-- <v-radio-group v-model="radioGroup" v-for="(titulo, key) in titulos" v-bind:key="key">
              <v-radio v-bind:label="titulo" value="key"></v-radio> !-->
            </v-radio-group>
          </v-layout>
        </v-container>
      </v-card>
    </div>
    <v-container>
      <v-layout>
        <v-flex xs6>
          <div class="text-xs-center">
            <v-btn round color="primary" dark to="/resultado">Iniciar Jogo</v-btn>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Escolha',
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item {
  padding-top: 20%;
}
.card {
  border-radius: 10px;
}
</style>
