<template>
  <div>
      <button v-on:click="decrement"> - </button> {{value}} <button v-on:click="increment"> + </button>
  </div>
</template>

<script>
export default {
  props: ["item"],
  data() {
    return {
      value: 0
    }
  },
  methods: {
    decrement:function() {
      if (this.value > 0) {
        this.value -= 1;
      }
      this.$emit('counter', this.item, this.value)
    },
    increment:function() {
      if (this.value < 10) {
        this.value += 1;
      } else {
        alert("You cannot buy more than 10 items")
      }
      this.$emit('counter', this.item, this.value)
    }
  }
}
</script>

<style>
  div {
    font-size : 24px;
  }
  button{
    font-family: Arial;  
    border: 1px solid;
    width:40px;
    border-radius: 8px;
    font-size: 24px;
    text-align: center;
    background-color: #ffd1c1;
    color: black;
  }
</style>