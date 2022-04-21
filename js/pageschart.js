Chart.defaults.global.legend.display = false;
var MONTHS = ['7/12', '8/12', '9/12', '10/12', '11/12', '12/12', '13/12', '14/12', '15/12', '16/12'];
      var config = {
        type: 'line',
        data: {
          labels: ['7/12', '8/12', '9/12', '10/12', '11/12', '12/12', '13/12'],
          datasets: [{
            label: 'First dataset',
            backgroundColor: window.chartColors.black,
            borderColor: window.chartColors.black,
            lineTension: 0,
            data: [
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor()
            ],
            fill: false,
          }, {
            label: 'Second dataset',
            fill: false,
            backgroundColor: window.chartColors.blue,
            borderColor: window.chartColors.blue,
            lineTension: 0,
            data: [
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor()
            ],
          }]
        },
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: 'Chart.js Line Chart'
            },
            tooltip: {
              mode: 'index',
              intersect: false,
            }
          },
          hover: {
            mode: 'nearest',
            intersect: true
          },
          scales: {
            x: {
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Month'
              }
            },
            y: {
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Value'
              }
            }
          }
        }
      };
  
      window.onload = function() {
        $(".pagesChart").each(function(index, element) {
          var ctx = element.getContext('2d');
          window.myLine = new Chart(ctx, config);          
        })

      };
  
      document.getElementById('randomizeData').addEventListener('click', function() {
        config.data.datasets.forEach(function(dataset) {
          dataset.data = dataset.data.map(function() {
            return randomScalingFactor();
          });
  
        });
  
        window.myLine.update();
      });
  
      var colorNames = Object.keys(window.chartColors);
      document.getElementById('addDataset').addEventListener('click', function() {
        var colorName = colorNames[config.data.datasets.length % colorNames.length];
        var newColor = window.chartColors[colorName];
        var newDataset = {
          label: 'Dataset ' + config.data.datasets.length,
          backgroundColor: newColor,
          borderColor: newColor,
          data: [],
          fill: false
        };
  
        for (var index = 0; index < config.data.labels.length; ++index) {
          newDataset.data.push(randomScalingFactor());
        }
  
        config.data.datasets.push(newDataset);
        window.myLine.update();
      });
  
      document.getElementById('addData').addEventListener('click', function() {
        if (config.data.datasets.length > 0) {
          var month = MONTHS[config.data.labels.length % MONTHS.length];
          config.data.labels.push(month);
  
          config.data.datasets.forEach(function(dataset) {
            dataset.data.push(randomScalingFactor());
          });
  
          window.myLine.update();
        }
      });
  
      document.getElementById('removeDataset').addEventListener('click', function() {
        config.data.datasets.splice(0, 1);
        window.myLine.update();
      });
  
      document.getElementById('removeData').addEventListener('click', function() {
        config.data.labels.splice(-1, 1); // remove the label first
  
        config.data.datasets.forEach(function(dataset) {
          dataset.data.pop();
        });
  
        window.myLine.update();
      });