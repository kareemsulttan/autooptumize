Chart.defaults.global.legend.display = false;

var randomScalingFactor = function() {
  return (Math.random() > 0.5 ? 1.0 : 1.0) * Math.round(Math.random() * 100);
};

var line1 = [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), ];

var line2 = [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), ];

var line3 = [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), ];

var MONTHS = ['7/12', '8/12', '9/12', '10/12', '11/12', '12/12', '13/12', '14/12', '15/12', '16/12'];
var config = {
  type: 'line',
  data: {
    labels: MONTHS,
    datasets: [{
      label: "page1",
      backgroundColor: window.chartColors.blue,
      borderColor: window.chartColors.blue,
      lineTension: 0,
      data: line1,
      fill: false,
    }, {
      label: "page2",
      fill: false,
      backgroundColor: window.chartColors.green,
      borderColor: window.chartColors.green,
      lineTension: 0,
      data: line2,
    }, {
      label: "page3",
      fill: false,
      backgroundColor: window.chartColors.yellow,
      borderColor: window.chartColors.yellow,
      lineTension: 0,
      data: line3,
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

var ctx = document.getElementById("pagesTestChart").getContext("2d");
var myLine = new Chart(ctx, config);