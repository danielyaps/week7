import { Bar } from 'vue-chartjs'
import database from '../../firebase.js'

export default {
  extends: Bar,
  data: function () {
    return {
        datacollection: {
            labels: [],
            datasets: [{
                label: "Quantity Ordered",
                backgroundColor: ['blue', 'purple', 'green', 'brown', 'red', 'yellow'],
                data: []
              }]
        },
        options: {
            legend: { display: false },
            title: {
              display: true,
              text: 'Total Order'
            },
            responsive: true,
            maintainAspectRatio: false
        },
        orders: [],
        processed: []
    }
  },
  methods: {
    process: function (){
        for (let i = 0; i < this.orders.length; i++) {
            var order = this.orders[i];
            for (let j = 0; j <  Object.keys(order).length; j++){
                var name = order[j][0];
                var qty = order[j][1];
                console.log(j);
                if (this.processed.length == 0) {
                  this.processed.push([name,qty]);
                } else {
                  for (let k = 0; k < this.processed.length; k++) {
                    if (this.processed[k][0] == name) {
                      this.processed[k][1] += qty;
                      break;
                    } else if (k == this.processed.length-1 && this.processed[k][0] != name) {
                      this.processed.push([name, qty]);
                    }
                  }
                }

            }
        }
        for (let i = 0; i < this.processed.length; i++) {
          this.datacollection.labels.push(this.processed[i][0]);
          this.datacollection.datasets[0].data.push(this.processed[i][1]);
        }
    },
    fetchItems: function () {
      database.collection('orders').get().then(querySnapShot => {
        querySnapShot.forEach(doc => { 
            if (doc.id != "null") {
                this.orders.push(doc.data());
            }
        })
        this.process();
        this.renderChart(this.datacollection, this.options)
      })
    }
  },
  created () {
    this.fetchItems()
  }
}