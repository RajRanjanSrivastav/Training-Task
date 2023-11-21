Highcharts.chart("Secchart_Dashboard", {
  chart: {
    type: "spline",
    scrollablePlotArea: {
      minWidth: 600,
      scrollPositionX: 1,
    },
  },
  title: {
    text: null,
    align: "left",
  },
  subtitle: {
    text: null,
    align: "left",
  },
  xAxis: {
    categories: [
      "May 20",
      "Jun 20",
      "Jul 20",
      "Aug 20",
      "Sep 20",
      "Oct 20",
      "Nov 20",
      "Dec 20",
      "Jan 21",
      "Feb 21",
      "Mar 21",
      "Apr 21",
      "May 21",
      "Jun 21",
      "Jul 21",
      "Aug 21",
    ],
    type: "datetime",
    labels: {
      overflow: "justify",
    },
  },
  yAxis: {
    min: 0,
    max: 300,
    tickInterval: 50,
    title: {
      text: "in Lakh",
    },
    minorGridLineWidth: 0,
    gridLineWidth: 0,
    alternateGridColor: null,
  },

  plotOptions: {
    spline: {
      lineWidth: 4,
      states: {
        hover: {
          lineWidth: 5,
        },
      },

      marker: {
        enabled: false,
      },
    },
  },

  title: {
    text: null,
  },
  credits: {
    enabled: false, //for watermark of highchart
  },
  exporting: {
    enabled: false, // Disables exporting feature (hides the menu icon)
  },
  series: [
    {
      name: "Kreate Energy",
      data: [
        145, 158, 192, 205, 230, 215, 165, 188, 192, 165, 140, 195, 214, 210,
        224, 227,
      ],
      color: "crimson",
    },
    {
      name: "Kreate Technologies",
      data: [
        45, 58, 92, 105, 130, 115, 105, 88, 102, 125, 130, 215, 114, 110, 114,
        127,
      ],
      color: "Yellow",
    },
    {
      name: "Solar",
      data: [
        205, 198, 192, 175, 160, 145, 175, 188, 82, 65, 40, 165, 104, 70, 109,
        167,
      ],
      color: "green",
    },
    {
      name: "SmartTech",
      data: [
        105, 158, 192, 145, 130, 115, 105, 158, 182, 125, 130, 215, 114, 90, 74,
        57,
      ],
      color: "Blue",
    },
  ],
  navigation: {
    menuItemStyle: {
      fontSize: "10px",
    },
  },
});

// variable pie chart

// Highcharts.chart("chart2-varpie", {
//   chart: {
//     type: "variablepie",
//   },

//   title: {
//     text: null,
//   },
//   credits: {
//     enabled: false, //for watermark of highchart
//   },
//   exporting: {
//     enabled: false, // Disables exporting feature (hides the menu icon)
//   },
//   tooltip: {
//     headerFormat: "",
//     pointFormat:
//       '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
//       "Area (square km): <b>{point.y}</b><br/>" +
//       "Population density (people per square km): <b>{point.z}</b><br/>",
//   },

//   series: [
//     {
//       showInLegend:true,
//       layout: 'horizontal',
//       minPointSize: 10,
//       innerSize: "20%",
//       zMin: 0,
//       name: "countries",
//       borderRadius: 5,
//       data: [
//         {
//           name: "Kreate Energy",
//           color: "crimson",
//           y: 505992,
//           z: 8,
//         },
//         {
//           name: "Kreate Technologies",
//           color: "Yellow",
//           y: 551695,
//           z: 3,
//         },
//         {
//           name: "Solar",
//           color: "green",
//           y: 312679,
//           z: 4,
//         },
//         {
//           name: "india",
//           y: 312679,
//           z: 5,
//           name: "SmartTech",
//           color: "Blue",
//         },
//       ],
//       colors: [
//         "#4caefe",
//         "#3dc3e8",
//         "#2dd9db",
//         "#1feeaf",
//         "#0ff3a0",
//         "#00e887",
//         "#23e274",
//       ],
//     },
//   ],
// });

Highcharts.chart("chart2-varpie", {
  chart: {
    type: "pie",
    options3d: {
      enabled: true,
      alpha: 45,
      beta: 0,
    },
  },
  credits: {
    enabled: false,
  },
  title: {
    text: null,
  },
  exporting: {
    enabled: false,
  },
 

  plotOptions: {
    pie: {
      innerSize: "40%",
      depth: 90,
      dataLabels: {
        enabled: false,
      },
    },
    legend: {
      enabled: true,
      // align: "right",
      layout: "horizontal",
      // verticalAlign: "middle",
    },
  },
  series: [
    {
      showInLegend: true,
      name: "Percentage",
      data: [
        { name: "Kreate Energy", y: 501.9 },
        { name: "Kreate Technologies", y: 301.9 },
        { name: "SmartTech", y: 201.1 },
        { name: "Solar", y: 165.8 },
      ],
      sliced: true,
      selected: true,
    },
  ],
});
