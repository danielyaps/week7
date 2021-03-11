<template>
  <div>
    <ul>
        <li v-for="item in items" v-bind:key="item.name">
            <h2>{{item.name}}</h2>
            <img v-bind:src="item.imageURL" v-show = "true">
            <p>${{item.price}}</p>
            <qtyCounter v-on:counter="onCounter" v-bind:item="item"></qtyCounter>
        </li>
    </ul>
    <basket v-bind:itemsSelected="itemsSelected" v-bind:items="items"></basket>
  </div>
</template>

<script>
import database from '../firebase.js'
import QuantityCounter from './QuantityCounter.vue'
import Basket from './Basket.vue'
export default {
  data() {
    return {
      items: [],
      itemsSelected: []
    }
  },
  methods: {
    fetchItems:function(){
      database.collection('menu').get().then((querySnapShot)=>{
        let item={}
        querySnapShot.forEach(doc=>{
            item=doc.data()
            item.id=doc.id
            this.items.push(item) 
        })      
      })    
    },
    onCounter: function (item, count) {
      if (this.itemsSelected.length === 0 && count > 0) {
        //If there is nothing in items selected, push the ORDER in
        this.itemsSelected.push([item.name, count, item.price]);
      } else {

        // Loop through everything to check what is not in the basket
        for (let i = 0; i < this.itemsSelected.length; i++) {
          const curr_item = this.itemsSelected[i];
          const item_name = curr_item[0];
          
          if (item_name == item.name && count > 0) {
            this.itemsSelected.splice(i, 1);
            this.itemsSelected.push([item.name, count, item.price]);
            return;
          } else if (item_name ==item.name && count==0){
            this.itemsSelected.splice(i,1);
            return;
          } else if (i==this.itemsSelected.length-1 && item_name !=item.name){
            this.itemsSelected.push([item.name, count, item.price]);
            return;
          }    
        }
        
      }
    },
  },
  created(){
      this.fetchItems()    
  },
  components:{
    'qtyCounter':QuantityCounter,
    'basket':Basket,
  }
}

</script>

<style scoped>
#itemsList {
  width: 78%;
  max-width: 70%;
  margin: 0px;
  padding: 0 5px;
  box-sizing: border-box;
}
ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
  width: 78%;
}
li {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 10px;
  border: 1px solid #222;
  margin: 10px;
}
img {
  width: 200px;
  height: 200px;
}

#price {
  font-size: 30px;
}

#itemName {
  font-size: 30px;
}

</style>