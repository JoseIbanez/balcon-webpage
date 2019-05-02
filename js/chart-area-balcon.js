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
  document.getElementById("charComment").innerHTML = charData.description;

  var label = [];
  var data = [];
  var param = charData.param;

  charData.data.forEach(function(element) {
    console.log(element);
    label.push(element.date);
    data.push(element[param]);
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


function updateChart(probeData) {
  
  //var probeDataString = document.getElementById("probeData").innerHTML;
  //var probeData = JSON.parse(probeDataString);

  requestParam = { "probe": probeData.probe,
                   "param": probeData.param
                 }

  $.ajax({
    dataType: "json",
    url: "v1/getHistogram",
    data: requestParam,
    success: function(data) {
      //document.getElementById("charData").innerHTML = JSON.stringify(data);
      data.title = probeData.title;
      data.description = probeData.description;
      data.param = probeData.param;
      drawChart(data);
    }
  });

};

probeList = {
  "romeroBatt" : {
    "probe": "ESP807D3AF077C8.A9",
    "alias": "romeroBatt",
    "title": "Romero",
    "description": "Lolin D32 - 3.7Volt",
    "param": "batt"
  },
  "kentiaBatt" : {
    "probe": "ESP807D3AF077C8.A9",
    "alias": "kentiaBatt",
    "title": "Kentia",
    "description": "Lolin D32 - 3.7Volt",
    "param": "batt"
  },
  "balconTemp" : {
    "probe": "b827eb.61eb84.c2",
    "alias": "balconTemp",
    "title": "28039 - Outdoor Temp",
    "description": "Oregon Scientific",
    "param": "temp"
  },
  "bedroomTemp" : {
    "probe": "b827eb.61eb84.c3",
    "alias": "bedroomTemp",
    "title": "28039 - Bedroom",
    "description": "Oregon Scientific",
    "param": "temp"
  },
  "siguenzaTemp" : {
    "probe": "b827eb.300520.c3",
    "alias": "siguenzaTemp",
    "title": "19250 - Out Temp",
    "description": "Oregon Scientific",
    "param": "temp"
  }
};

function probeSelector(alias) {
  probeData = probeList[alias]; 
  updateChart(probeData);
};
