<template>
  <div>
    <v-container>
      <v-layout space-around class='mb-2'>
        <v-btn flat icon to='/'>
          <v-icon large>keyboard_backspace</v-icon>
        </v-btn>
      </v-layout>
    </v-container>
    <div class='item'>
      <v-card max-height='200px' max-width='380px' class='pl-3 ml-3 card'>
        <v-container fluid grid-list-md>
          <v-layout row wrap>
            <h2>Resultado</h2>
          </v-layout>
        </v-container>
        <v-container>
          <table class='table' width='300px' align='center'>
            <tr>
              <th id='th-jogador'>{{$route.params.name}}</th>
              <td></td>
              <th>Criador</th>
            </tr>
            <tr>
              <td id='cmp-jogador'>{{escolhaJogador}}</td>
              <td>X</td>
              <td id='cmp-criador'>{{escolhacriador}}</td>
            </tr>
          </table>
        </v-container>
      </v-card>
    </div>
    <div class='buton text-xs-center'>
      <v-container>
        <v-layout>
          <v-dialog v-model='modal' persistent max-width='290'>
      <v-card>
        <v-card-title class='headline'>O vencedor é</v-card-title>
        <v-card-text>{{RegrasJogo()}}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color='black darken-1' flat @click='modal = false'>Fechar</v-btn>
        </v-card-actions>
      </v-card>
          </v-dialog>
          <v-btn round color='primary' dark @click="jogadorJoga('Papel')">Papel</v-btn>
          <v-btn round color='primary' dark @click="jogadorJoga('Pedra')">Pedra</v-btn>
          <v-btn round color='primary' dark @click="jogadorJoga('Tesoura')">Tesoura</v-btn>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'

export default {
  components: {
    HelloWorld
  },
  name: 'Resultado',
  data () {
    return {
      usuario: '',
      escolhacriador: ' ',
      escolhaJogador: ' ',
      vencedor: '',
      modal: false
    }
  },
  methods: {

    computadorJoga () {
      let jogadas = ['Pedra', 'Papel', 'Tesoura']
      let numero = Math.floor(Math.random() * 3)
      this.escolhacriador = jogadas[numero]
    },
    jogadorJoga (jogada) {
      this.escolhaJogador = jogada
      this.computadorJoga()
      this.modal = true
    },

    RegrasJogo () {
      let vencedor = null
      if (this.escolhaJogador === 'Pedra') {
        if (this.escolhacriador === 'Pedra') {
          vencedor = 'Empate'
        } else if (this.escolhacriador === 'Papel') {
          vencedor = 'Criador'
        } else if (this.escolhacriador === 'Tesoura') {
          vencedor = this.$route.params.name
        }
      } else if (this.escolhaJogador === 'Papel') {
        if (this.escolhacriador === 'Pedra') {
          vencedor = this.$route.params.name
        } else if (this.escolhacriador === 'Papel') {
          vencedor = 'Empate'
        } else if (this.escolhacriador === 'Tesoura') {
          vencedor = 'Criador'
        }
      } else if (this.escolhaJogador === 'Tesoura') {
        if (this.escolhacriador === 'Pedra') {
          vencedor = 'Criador'
        } else if (this.escolhacriador === 'Papel') {
          vencedor = this.$route.params.name
        } else if (this.escolhacriador === 'Tesoura') {
          vencedor = 'Empate'
        }
      }
      return vencedor
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.item {
  padding-top: 15%;
}
.card {
  border-radius: 10px;
  width: 720px;
  height: 540px;
  text-align: center;
}
#main {
  width: 390px;
  margin: 0 auto;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  border-color: #555;
  font-size: 13px;
}
select,
input {
  padding: 5px;
  font-size: 17px;
  margin: 5px;
}
input.placar {
  width: 30px;
  text-align: center;
}
table {
  width: 250px;
  border: 0;
}
table th,
table td {
  padding: 3px;
}
table th {
  border: 1px solid black;
  border-radius: 4px;
}
table td {
  text-align: center;
  margin: 5px;
  height: 30px;
  width: 30px;
  line-height: 20px;
}
#cmp-vencedor {
  background-color: #fff;
  border: 1px solid black;
  border-radius: 4px;
}
.buton {
  padding-top: 30%;
  padding: 15px 20px;
}
</style>
