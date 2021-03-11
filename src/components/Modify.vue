<template>
    <div>
            <div v-for="(food,index) in this.datapacket[0]" v-bind:key="index">
                {{food[0]}}: {{food[1]}}<br>
                <input v-model.number="updateNumbers[index]" type="number" id=index placeholder=0 min="0"> <br>
            </div>
            <br>
            <button v-on:click="updateOrder">Update Order</button>
    </div>
</template>

<script>
import database from "../firebase.js"
export default {
  props:{
      items:{
        type:Array
      },
  },
  data() {
    return {
        docId: this.$route.params.orderId,
        datapacket:[],
        copiedData: [],
        updateNumbers: [],
    }
  },
    methods: {
        fetchItems:function(){
            database.collection('orders').doc(this.docId).get().then((doc)=>{
                this.datapacket.push(doc.data())
            });

        },
        updateOrder:function(){
            this.copiedData = Object.assign({}, this.datapacket[0]);
            for (let i = 0; i < Object.keys(this.copiedData).length; i++) {
                if(this.updateNumbers[i] == null) {
                    continue;
                }
                this.copiedData[i][1] = this.updateNumbers[i];
            }
            database.collection('orders').doc(this.docId).set(this.copiedData).then(this.$router.push("/orders"));
        }
    },

    created(){
      this.fetchItems();
  },
}
</script>

<style scoped>
button{
    font-family: Arial;  
    border: 1px solid;
    width:150px;
    border-radius: 8px;
    font-size: 24px;
    text-align: center;
    background-color: #ffd1c1;
    color: black;
}
</style>