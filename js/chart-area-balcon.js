// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Area Chart Example



var timeFormat = 'YYYY-MM-DD HH:mm';
var color = Chart.helpers.color;

function newDate(days) {
  return moment().add(days, 'd').toDate();
}

function newDateString(days) {
  return moment().add(days, 'd').format(timeFormat);
}


function drawChart(charData) {

  document.getElementById("charTitle").innerHTML = charData.title;
  document.getElementById("charComment").innerHTML = charData.comment;

  var label = [];
  var data = [];
  charData.data.forEach(function(element) {
    console.log(element);
    label.push(element.date);
    data.push(element.temp);
  });

  var config = {
    type: 'line',
    data: {
      labels: label,
      datasets: [{
        label: charData.title,
        backgroundColor: color(window.chartColors.red).alpha(0.5).rgbString(),
        borderColor: window.chartColors.red,
        fill: false,
        data: data,
      }],
    },
    options: {
      title: {
        text: charData.title
      },
      scales: {
        xAxes: [{
          type: 'time',
          time: {
            parser: timeFormat,
            // round: 'day'
            tooltipFormat: 'll HH:mm'
          },
          scaleLabel: {
            display: true,
            labelString: 'Date'
          }
        }],
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'value'
          }
        }]
      },
    }
  };

  var ctx = document.getElementById("myAreaChart");
  var myLineChart = new Chart(ctx, config); 
};


//var charDataString = document.getElementById("charData").innerHTML;
//var charData = JSON.parse(charDataString);

$.ajax({
  dataType: "json",
  url: "v1/getHistogram",
  data: null,
  success: function(data) {
    //document.getElementById("charData").innerHTML = JSON.stringify(data);
    data.title = "remote";
    data.description = "some comment";
    drawChart(data);
  }
});
