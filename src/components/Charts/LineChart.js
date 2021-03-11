import { Line } from 'vue-chartjs'
import axios from 'axios'

export default {
  extends: Line,
  data: function () {
    return {
        datacollection: {
            labels: [],
            datasets: []
        },
        options: {
            legend: { display: true },
            title: {
              display: true,
              text: 'PSI 24Hr Hourly (By Region)'
            },
            responsive: true,
            maintainAspectRatio: false
        },
        color: ['red','blue','green','yellow','black','purple']
    }
  },
  methods: {
    fetchItems: function () {
        axios.get(`https://api.data.gov.sg/v1/environment/psi?date=2021-02-23`).then(    
            response => {
                response.data.region_metadata.forEach(region => {
                    this.datacollection.datasets.push({data:[], label: region.name, fill: false});
                });
                response.data.items.forEach(item => { 
                    this.datacollection.labels.push(item.timestamp)
                    for (let i = 0; i < Object.keys(item.readings.psi_twenty_four_hourly).length; i++) {
                        this.datacollection.datasets[i].data.push(Object.values(item.readings.psi_twenty_four_hourly)[i]);
                        this.datacollection.datasets[i].borderColor = this.color[i];
                    }
                });
                this.renderChart(this.datacollection, this.options)
            })
    }
  },
  created () {
    this.fetchItems()
  }
}