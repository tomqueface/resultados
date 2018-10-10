(function ($) {
  'use strict';
  $(function () {
    if ($('#dashboard-area-chart').length) {
      var lineChartCanvas = $("#dashboard-area-chart").get(0).getContext("2d");
      var data = {
        labels: ["2008", "2009", "2012", "2013", "2017", "2018"],
        datasets: [{
            label: 'Frelimo',
            data: [0, 46, 49, 49, 4, 0],
            backgroundColor: 'rgba(255, 0, 0, 0.4)',
            borderWidth: 1,
            fill: true
          },
          {
            label: 'Renamo',
            data: [0, 0, 0, 0, 1, 0],
            backgroundColor: 'rgba(O, 255, 0, 0.4)',
            borderWidth: 1,
            fill: true
          },
          {
            label: 'MDM',
            data: [0, 1, 1, 3, 2, 0],
            backgroundColor: 'rgba(0, 0, 255, 0.4)',
            borderWidth: 1,
            fill: true
          }
        ]
      };
      var options = {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          yAxes: [{
            display: false
          }],
          xAxes: [{
            display: false,
            ticks: {
              beginAtZero: true
            }
          }]
        },
        legend: {
          display: false
        },
        elements: {
          point: {
            radius: 3
          }
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }
        },
        stepsize: 1
      };
      var lineChart = new Chart(lineChartCanvas, {
        type: 'line',
        data: data,
        options: options
      });
    }
  });
})(jQuery);
