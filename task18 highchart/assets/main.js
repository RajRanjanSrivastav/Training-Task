let iconTrg = document.getElementById("horiNavIcon");
let mainContainer = document.getElementById("main-container");
let navbar = document.getElementById("navbar");
// for screen
window.addEventListener("resize", () => {
  if (window.innerWidth < 769) {
    if (navbar.style.display == "block") {
      console.log("hj");
      mainContainer.style.display = "none";
    }
  }
  if (window.innerWidth > 769) {
    mainContainer.style.display = "block";
  }
});
const hideNav = (id) => {
  let eleTrg = document.getElementById(id);
  eleTrg.style.display = "none";
  mainContainer.style.display = "block";
  mainContainer.classList.add("col");
  mainContainer.classList.remove("col-10")
  console.log('hogya');
  iconTrg.style.display = "block";
};
const showNav = (id) => {
  let eleTrg = document.getElementById(id);
  mainContainer.classList.add("col-10");
  mainContainer.classList.remove("col")
  eleTrg.style.display = "block";
  if (window.innerWidth < 764) {
    mainContainer.style.display = "none";
  }
  iconTrg.style.display = "none";
};

// chart 1 interview
Highcharts.chart("container1", {
  credits: {
    enabled: false, //for watermark of highchart
  },
  // legend: {
  //   enabled: true,
  // },
  title: {
    text: null, // Hides the chart title
  },
  exporting: {
    enabled: false, // Disables exporting feature (hides the menu icon)
  },
  chart: {
    type: "pie",
    options3d: {
      enabled: true,
      alpha: 45,
      beta: 0,
    },
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: "pointer",
      depth: 35,
      dataLabels: {
        enabled: false, //for data labels arrow
        format: "{point.name}",
      },
      colors: [
        // Define your colors here
        "#034d91",
        "#56a8f5",
      ],
    },
  },
  tooltip: {
    enabled: false, // Disable tooltips
  },

  series: [
    {
      type: "pie",
      name: "Share",
      data: [
        { name: "not accepted", y: 90 },
        { name: "accepted", y: 10 },
      ],
    },
  ],
});

// open vs closed
Highcharts.chart("container2", {
  credits: {
    enabled: false, //for watermark of highchart
  },
  // legend: {
  //   enabled: true,
  // },
  title: {
    text: null, // Hides the chart title
  },
  exporting: {
    enabled: false, // Disables exporting feature (hides the menu icon)
  },
  chart: {
    type: "pie",
    options3d: {
      enabled: true,
      alpha: 45,
      beta: 0,
    },
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: "pointer",
      depth: 35,
      dataLabels: {
        enabled: false, //for data labels arrow
        format: "{point.name}",
      },
      colors: [
        // Define your colors here
        "#0f6302",
        "#3ead2d",
      ],
    },
  },
  tooltip: {
    enabled: false, // Disable tooltips
  },

  series: [
    {
      type: "pie",
      name: "Share",
      data: [
        { name: "not accepted", y: 70 },
        { name: "accepted", y: 22 },
      ],
    },
  ],
});

// chrt 2 area line
Highcharts.chart("chart2", {
  credits: {
    enabled: false, //for watermark of highchart
  },
  chart: {
    type: "areaspline",
  },
  title: {
    text: null, // Hides the chart title
  },
  exporting: {
    enabled: false, // Disables exporting feature (hides the menu icon)
  },
  // legend: {
  //   layout: "vertical",
  //   align: "right",
  //   verticalAlign: "middle",
  // },
  legend: false,

  series: [
    {
      name: "Installation & Developers",
      data: [0, 0, 5.6, 1.7, 1, 1.7, 0, 0.9, 1.5, 3, 1.5, 1.3],
      color: "blue",
    },
  ],
  yAxis: {
    min: 0, // Set the minimum value for the y-axis
    max: 6, // Set the maximum value for the y-axis
  },
  xAxis: {
    categories: [
      "Apr 20",
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
    ],
  },
});

// chart 3 collumn

Highcharts.chart("chart3", {
  credits: {
    enabled: false, //for watermark of highchart
  },
  chart: {
    type: "column",
  },
  title: {
    text: null, // Hides the chart title
  },
  exporting: {
    enabled: false, // Disables exporting feature (hides the menu icon)
  },
  legend: {
    layout: "vertical",
    align: "right",
    verticalAlign: "middle",
  },

  series: [
    {
      name: "Avg. of TAT ",
      data: [30, 45, 60],
      color: "#910161",
    },
    {
      name: "Avf. of Actual TAT",
      data: [25, 65, 5],
      color: "#f76ad4",
    },
  ],
  yAxis: {
    min: 0, // Set the minimum value for the y-axis
    max: 100, // Set the maximum value for the y-axis
    tickInterval: 10,
  },
  xAxis: {
    categories: ["Entry", "Middle", "Top"],
  },
});

// chart 4 bar k
Highcharts.chart("chart5", {
  chart: {
    type: "column",
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

  xAxis: {
    categories: [
      "Apr 21 3",
      "Mar 21 0",
      "Feb 21 5",
      "Jan 21 5",
      "Dev 20 1",
      "Nov 20 2",
      "Oct 20 2",
      "Sep 20 0",
      "Aug 20 5",
      "Jul 20 6",
      "Jun 20 6",
      "May 20 4",
      "Apr 20 8",
    ],
    crosshair: true,
    accessibility: {
      description: "Countries",
    },
  },
  yAxis: {
    min: 0,
    title: {
      text: "thousands",
    },
  },
  tooltip: {
    valueSuffix: " (1000 MT)",
  },
  //    // plotOptions: {
  //        column: {
  //            pointPadding: 0.2,
  //            borderWidth: 0
  //        }
  // },
  legend: {
    enabled: false,
  },
  series: [
    {
      name: "Corn",
      data: [30, 0, 44, 44, 221, 54, 0, 54, 54, 18, 28, 28, 28],
      color: "blue",
    },
  ],
});

Highcharts.chart("chart6", {
  chart: {
    type: "column",
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

  xAxis: {
    categories: [
      "Apr 20",
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
    ],
    crosshair: true,
    accessibility: {
      description: "Countries",
    },
  },
  yAxis: {
    min: 0,
    max: 15,
    tickInterval: 5,
    title: {
      text: "thousands",
    },
  },
  tooltip: {
    valueSuffix: " (1000 MT)",
  },

  // plotOptions: {
  //   series: {
  //     pointWidth: 10 // Increase the width of each bar
  //   }
  // },
  series: [
    {
      name: "Entery",
      data: [4.8, 5, 5, 1, 2, 3, 4.9, 7, 9, 2, 1, 3],
      color: "blue",
    },
    {
      name: "Middle",
      data: [0.1, 0, 0, 0, 1, 0, 2, 3, 4, 0, 0, 0],
      color: "orange",
    },
    {
      name: "Top",
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
      color: "green",
    },
  ],
});

// managements dashboard
// Data retrieved from https://www.vikjavev.no/ver/#2020-04-15,2020-04-16

// Highcharts.chart("Secchart_Dashboard", {
//   chart: {
//     type: "spline",
//     scrollablePlotArea: {
//       minWidth: 600,
//       scrollPositionX: 1,
//     },
//   },
//   title: {
//     text: null,
//     align: "left",
//   },
//   subtitle: {
//     text: null,
//     align: "left",
//   },
//   xAxis: {
//     type: "datetime",
//     labels: {
//       overflow: "justify",
//     },
//   },
//   yAxis: {
//     title: {
//       text: "in Lakh",
//     },
//     minorGridLineWidth: 0,
//     gridLineWidth: 0,
//     alternateGridColor: null,
//     plotBands: [
//       {
//         // Light air
//         from: 0.3,
//         to: 1.5,
//         color: "rgba(68, 170, 213, 0.1)",
//         label: {
//           style: {
//             color: "#606060",
//           },
//         },
//       },
//       {
//         // Light breeze
//         from: 1.5,
//         to: 3.3,
//         color: "rgba(0, 0, 0, 0)",
//         label: {
//           style: {
//             color: "#606060",
//           },
//         },
//       },
//       {
//         // Gentle breeze
//         from: 3.3,
//         to: 5.5,
//         color: "rgba(68, 170, 213, 0.1)",
//         label: {
//           style: {
//             color: "#606060",
//           },
//         },
//       },
//       {
//         // Moderate breeze
//         from: 5.5,
//         to: 8,
//         color: "rgba(0, 0, 0, 0)",
//         label: {
//           style: {
//             color: "#606060",
//           },
//         },
//       },
//       {
//         // Fresh breeze
//         from: 8,
//         to: 11,
//         color: "rgba(68, 170, 213, 0.1)",
//         label: {
//           style: {
//             color: "#606060",
//           },
//         },
//       },
//       {
//         // Strong breeze
//         from: 11,
//         to: 14,
//         color: "rgba(0, 0, 0, 0)",
//         label: {
//           style: {
//             color: "#606060",
//           },
//         },
//       },
//       {
//         // Near Gale
//         from: 14,
//         to: 17,
//         color: "rgba(68, 170, 213, 0.1)",
//         label: {
//           style: {
//             color: "#606060",
//           },
//         },
//       },
//       {
//         // Fresh Gale
//         from: 17,
//         to: 20.5,
//         color: "rgba(0, 0, 0, 0)",
//         label: {
//           style: {
//             color: "#606060",
//           },
//         },
//       },
//       {
//         // Strong Gale
//         from: 20.5,
//         to: 24,
//         color: "rgba(68, 170, 213, 0.1)",
//         label: {
//           style: {
//             color: "#606060",
//           },
//         },
//       },
//     ],
//   },
//   tooltip: {
//     valueSuffix: " m/s",
//   },
//   plotOptions: {
//     spline: {
//       lineWidth: 4,
//       states: {
//         hover: {
//           lineWidth: 5,
//         },
//       },
//       marker: {
//         enabled: false,
//       },
//       pointInterval: 3600000, // one hour
//       pointStart: Date.UTC(2020, 3, 15, 0, 0, 0),
//     },
//   },
//   series: [
//     {
//       name: "Hestavollane",
//       data: [
//         5.4, 5.2, 5.7, 6.3, 5.2, 5.6, 6.1, 5.6, 5.9, 7.1, 8.6, 7.8, 8.6, 8.0,
//         9.7, 11.2, 12.5, 13.1, 10.6, 10.9, 8.9, 9.5, 7.5, 3.5, 4.2,
//       ],
//     },
//     {
//       name: "Vik",
//       data: [
//         0.2, 0.1, 0.1, 0.5, 0.3, 0.2, 0.1, 0.1, 0.1, 0.1, 0.2, 1.1, 1.3, 2.0,
//         1.5, 1.5, 1.5, 1.4, 1.7, 2.0, 2.9, 2.1, 2.1, 3.5, 2.9,
//       ],
//     },
//   ],
//   navigation: {
//     menuItemStyle: {
//       fontSize: "10px",
//     },
//   },
// });
