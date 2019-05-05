// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';



myData = [
  {x: "2019-04-30 10:11", y: 176}, 
  {x: "2019-04-30 15:20", y: 175}, 
  {x: "2019-04-30 19:20", y: 170.8}, 
  {x: "2019-05-01 15:20", y: 180.2}
];

var timeFormat = 'YYYY-MM-DD HH:mm';

// Area Chart Example
var ctx = document.getElementById("myAreaChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    datasets: [{
      label: "Demo",
      lineTension: 0.3,
      backgroundColor: "rgba(78, 115, 223, 0.05)",
      borderColor: "rgba(78, 115, 223, 1)",
      pointRadius: 1,
      pointBackgroundColor: "rgba(78, 115, 223, 1)",
      pointBorderColor: "rgba(78, 115, 223, 1)",
      pointHoverRadius: 3,
      pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
      pointHoverBorderColor: "rgba(78, 115, 223, 1)",
      pointHitRadius: 10,
      pointBorderWidth: 2,
      data: myData
    }],
  },
  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 10,
        right: 25,
        top: 25,
        bottom: 0
      }
    },
    scales: {
      xAxes: [{
        type: 'time',
        time: {
          parser: timeFormat,
          tooltipFormat: 'll'
        },
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          maxTicksLimit: 5,
          padding: 10
        },
        gridLines: {
          color: "rgb(234, 236, 244)",
          zeroLineColor: "rgb(234, 236, 244)",
          drawBorder: false,
          borderDash: [2],
          zeroLineBorderDash: [2]
        }
      }],
    },
    legend: {
      display: false
    },
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      titleMarginBottom: 10,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      intersect: false,
      mode: 'index',
      caretPadding: 10
    }
  }
});


////////////////////////

function probeSelector(alias) {

  var probeList = JSON.parse(document.getElementById("probeList").innerHTML);
  probeData = probeList[alias]; 

  document.getElementById("charTitle").innerHTML   = probeData.title;
  document.getElementById("charComment").innerHTML = probeData.description;


  requestParam = { "probe": probeData.probe,
                   "param": probeData.param,
                   "hours": 48
  }

  $.ajax({
    dataType: "json",
    url: "v1/getHistogram",
    data: requestParam,
    success: function(result) {

      myData = [];
      result.data.forEach(function(element) {
        myData.push( {"x":element.date, "y": element[probeData.param]} );
      });
    
      myLineChart.data.datasets[0].label = probeData.param;
      myLineChart.data.datasets[0].data = myData;


      myLineChart.update();
      }
    });

};
