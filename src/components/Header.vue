<template>
   <div>
    <header>
        <h1>{{msg}}</h1>
    </header>
    <ul>
        <li><router-link to="/" exact>Home</router-link></li> 
        <li><router-link to="/orders" exact> Orders </router-link></li>
        <li><router-link to="/dashboard" exact> Dashboard </router-link></li>
    </ul>
    </div>
</template>

<script>
export default {
  data(){
    return{
        msg: "Daniel's Zi Char",
    }
  }
}
</script>

<style scoped>
header {
    background-color: skyblue;
    height: 125px;
    border: 1px solid #222;
    text-align: center;
    font-size: 32px;
    color: blue;
}
ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
li {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 10px;
  border: 1px solid #222;
  margin: 10px;
}
</style>