Chart.defaults.global.legend.display = false;

var randomScalingFactor = function() {
  return (Math.random() > 0.5 ? 1.0 : 1.0) * Math.round(Math.random() * 100);
};

var line1 = [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), ];

var line2 = [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), ];

var MONTHS = ['7/12', '8/12', '9/12', '10/12', '11/12', '12/12', '13/12', '14/12', '15/12', '16/12'];
var config = {
  type: 'line',
  data: {
    labels: MONTHS,
    datasets: [{
      label: "Experiment",
      backgroundColor: window.chartColors.blue,
      borderColor: window.chartColors.blue,
      lineTension: 0,
      data: line1,
      fill: false,
    }, {
      label: "Control",
      fill: false,
      backgroundColor: window.chartColors.gray,
      borderColor: window.chartColors.gray,
      lineTension: 0,
      data: line2,
    }]
  },
  options: {
    responsive: true,
    title:{
      display:false,
    },
    tooltips: {
      mode: 'index',
      intersect: false,
    },
   hover: {
      mode: 'nearest',
      intersect: true
    },
    scales: {
      xAxes: [{
        display: true,
        scaleLabel: {
          display: false,
          labelString: 'Month'
        },
        ticks:{
          fontColor:'gray',
          fontSize: 10,
         }
      }],
      yAxes: [{
        display: true,
        scaleLabel: {
          display: true,
        },
      }]
    }
  }
};

var ctx = document.getElementById("toolsChart").getContext("2d");
var myLine = new Chart(ctx, config);