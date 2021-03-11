 <template>
 <div>
    <h1>Dashboard</h1>
     <bar-chart></bar-chart>
     <line-chart></line-chart>
 </div>
</template>

<script>
import BarChart from './Charts/BarChart.vue'
import LineChart from './Charts/LineChart.vue'
export default {
  components: {
    'bar-chart':BarChart,
    'line-chart':LineChart
  }
}

</script>

<style>
div {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>