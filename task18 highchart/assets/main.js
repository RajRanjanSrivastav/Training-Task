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
  iconTrg.style.display = "block";
};
const showNav = (id) => {
  let eleTrg = document.getElementById(id);
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
    type: "area",
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
    max:15,
    tickInterval:5,
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
      color:"blue",
    },
    {
      name: "Middle",
      data: [0.1, 0, 0, 0, 1, 0, 2, 3, 4, 0, 0, 0],
      color:"orange",
    },
    {
      name: "Top",
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
      color:"green",
    },
  ],
});
