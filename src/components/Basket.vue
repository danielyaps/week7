<template>
  <div>
    <ul>
        <p> Menu: </p>
        <li v-for="each in itemsSelected" v-bind:key="each[0]">
            <p>{{each[0]}} x {{each[1]}}</p>
        </li>
    </ul>
    <button v-on:click="findTotal() + sendOrder()">Calculate Total</button>
    <p v-if="calculate">Subtotal : ${{total}} <br>
      Grandtotal : ${{grandTotal}}
    </p>
  </div>
</template>

<script>
import database from '../firebase.js'

export default {
  props:{
      itemsSelected:{
        type:Array
      },
      items:{
        type:Array
      }
  },
  data() {
    return {
      total: 0,
      calculate: false,
      fullBasket: []
    }
  },
  methods: {
    findTotal:function() {
      this.total = 0;
      this.calculate = true;
      for (let i = 0; i < this.itemsSelected.length; i++) {
        const curr_item = this.itemsSelected[i];
        this.total += (curr_item[1] * curr_item[2]);
      }
    },
    sendOrder: function() {
      for (let k = 0; k < this.itemsSelected.length; k++){
        this.fullBasket.push(this.itemsSelected[k]);
      }
      for (let i = 0; i < this.items.length; i++) {
        var found = false;
        for (let j = 0; j < this.fullBasket.length; j++) {
          if (this.items[i].name == this.fullBasket[j][0]){
            found = true;
          }
          if (!found && j == this.fullBasket.length-1){
            this.fullBasket.push([this.items[i].name, 0, this.items[i].price]);
          }
        }
      }      
      database.collection('orders').add(Object.assign({}, this.fullBasket)).then(() => location.reload());
    }
  },
  computed: {
    // a computed getter
    grandTotal: function () {
      var grandTotal = this.total * 1.07;
      return grandTotal.toFixed(2);
    }
  },
  components:{
  }
}
</script>

<style scoped>
button{
    font-family: Arial;  
    border: 1px solid;
    width:200px;
    border-radius: 8px;
    font-size: 32px;
    text-align: center;
    background-color: #ffd1c1;
    color: black;
}
div {
  position: absolute;
  top: 40%;
  left: 78%;
}
</style>