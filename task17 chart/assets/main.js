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

// chart js

const ctx1 = document.getElementById("myChart1");

new Chart(ctx1, {
  type: "bar",
  data: {
    labels: ["2021", "2020", "2019", "2018", "2017"],
    datasets: [
      {
        axis: "y",
        data: [306, 309, 286, 269, 216],
        fill: false,
        backgroundColor: [
          "blue",
          "orange",
          "green",
          "rgba(227, 34, 150)",
          "rgba(3, 3, 158)",
        ],
        borderWidth: 1,
      },
    ],
  },
  // config
  options: {
    plugins: {
      legend: {
        display: false,
      },
    },
    indexAxis: "y",
  },
});

// chart 2.

const config2 = {
  type: "bar",
  data: {
    labels: ["KEPL", "KT", "KL"],
    datasets: [
      {
        label: "FY 20-21",
        data: [130, 45, 28],
        fill: false,
        backgroundColor: ["rgba(227, 34, 150)"],
        order: 1,
      },
      {
        label: "FY 20-21",
        data: [106, 35, 28],
        fill: false,
        backgroundColor: ["blue"],
        order: 1,
        // yAxisID: 'y2',
      },

      {
        label: "Growth",
        data: [-20, 20, -26],
        fill: false,
        backgroundColor: ["green"],
        borderColor: "green",
        type: "line",
        order: 0,
        yAxisID: "y2",
      },
    ],
  },

  // other function is here

  options: {
    maintainAspectRatio: false,
    responsive: false,
    height: 170,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        // ------------
      },
    },
    scales: {
      y: {
        min: 0, // Set minimum value for the y-axis
        max: 150, // Set maximum value for the y-axis
        ticks: {
          stepSize: 50, // Set the interval between ticks if needed
        },
      },
      // y: {},
      y2: {
        grid: {
          display: false, // Hide grid lines for y-axis
        },

        min: -30, // Set minimum value for the y-axis
        max: 30, // Set maximum value for the y-axis
        ticks: {
          stepSize: 10, // Set the interval between ticks if needed
        },
        ticks: {
          callback: function (value, index, values) {
            return value + "%"; // Add '%' sign to each tick value
          },
        },
        position: "right",
      },
    },
  },
};

const ctx2 = document.getElementById("myChart2").getContext("2d");
new Chart(ctx2, config2);

// chart 3

const config3_1 = {
  type: "bar",
  data: {
    labels: ["Energy", "Light", "Technology"],
    datasets: [
      {
        data: [60, 50, 40],
        backgroundColor: ["Green", "Orange", "Grey"],
        borderWidth: 1,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Hide grid lines for y-axis
        },
      },
      y: {
        min: 0, // Set minimum value for the y-axis
        max: 80, // Set maximum value for the y-axis
        ticks: {
          stepSize: 10, // Set the interval between ticks if needed
        },
      },
    },
  },
};
const ctx3_1 = document.getElementById("myChart3_1").getContext("2d");
new Chart(ctx3_1, config3_1);

const config3_2 = {
  type: "bar",
  data: {
    labels: ["18-25", "26-35", "36-45", "46-55", "55+"],
    datasets: [
      {
        data: [70, 230, 40, 30, 20],
        backgroundColor: "blue",
        borderWidth: 1,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Hide grid lines for y-axis
        },
      },
      y: {
        min: 0, // Set minimum value for the y-axis
        max: 250, // Set maximum value for the y-axis
        ticks: {
          stepSize: 50, // Set the interval between ticks if needed
        },
      },
    },
  },
};
const ctx3_2 = document.getElementById("myChart3_2").getContext("2d");
new Chart(ctx3_2, config3_2);

// chart 4
const congig4 = {
  type: "pie",
  data: {
    labels: ["Female", "Male"],
    datasets: [
      {
        label: "My First Dataset",
        data: [50, 300],
        backgroundColor: ["pink", "blue"],
        hoverOffset: 4,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
    },
    startAngle: -90,
  },
};

const ctx4 = document.getElementById("myChart4").getContext("2d");
new Chart(ctx4, congig4);

// chart 5
// Chart.defaults.global.legend.labels.usePointStyle = true;
const config5 = {
  type: "bar",
  data: {
    labels: ["1", "7", "8", "2", "3", "4", "5", "6", "9", "10", "11", "12"],
    datasets: [
      {
        label: "CL",
        data: [8, 16, 32, 30, 40, 46, 49, 80, 90, 30, 20, 35],
        fill: false,
        backgroundColor: "blue",
        order: 1,
      },
      {
        label: "SL",
        data: [10, 14, 22, 21, 30, 32, 32, 40, 42, 8, 20, 15],
        fill: false,
        backgroundColor: "orange",
        order: 1,
      },
      {
        label: "EL",
        data: [6, 8, 22, 12, 35, 32, 42, 45, 92, 8, 20, 35],
        fill: false,
        backgroundColor: "lightgreen",
        order: 1,
      },

      {
        label: "Average",
        data: [10, 15, 50, 45, 54, 91, 92, 150, 202, 50, 60, 52],
        fill: false,
        backgroundColor: ["white"],
        borderColor: "rgba(227, 34, 150)",
        type: "line",
        order: 0,
      },
    ],
  },

  // other function is here

  // 0-----

  // ----

  options: {
    maintainAspectRatio: false,
    responsive: false,
    height: 170,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          usePointStyle: true,
        },
        // ------------
      },
    },
    scales: {
      y: {
        min: 0, // Set minimum value for the y-axis
        max: 250, // Set maximum value for the y-axis
        ticks: {
          stepSize: 50, // Set the interval between ticks if needed
        },
      },
    },
    tension: 0.3,
  },
};

const ctx5 = document.getElementById("myChart5").getContext("2d");
new Chart(ctx5, config5);

const config6_1 = {
  type: "bar",
  data: {
    labels: [
      "Apr20",
      "May20",
      "Jun20",
      "Jul20",
      "Aug20",
      "Sep20",
      "Oct20",
      "Nov20",
      "Dec20",
      "Jan21",
      "Feb21",
      "Mar21",
      "Apr21",
    ],
    datasets: [
      {
        data: [3, 6, 3, 4.4, 0.8, 1.3, 2.5, 4.5, 3.8, 3, 3.9, 3, 3.5, 3.9],
        backgroundColor: "orange",
        borderWidth: 1,
        order: 1,
      },
      {
        label: "Growth",
        data: [
          1, 2.5, 0.9, 1.8, 0.4, 0.5, 0.6, 0.5, 0.4, 0.6, 0.8, 0.4, 0.8, 0.7,
        ],
        fill: false,
        backgroundColor: ["white"],
        borderColor: "rgba(227, 34, 150)",
        type: "line",
        order: 0,
        type: "line",
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Hide grid lines for y-axis
        },
      },
      y: {
        min: 0, // Set minimum value for the y-axis
        max: 6, // Set maximum value for the y-axis
        ticks: {
          stepSize: 1, // Set the interval between ticks if needed
        },
      },
    },
  },
};
const ctx6_1 = document.getElementById("myChart6_1").getContext("2d");
new Chart(ctx6_1, config6_1);

// second part
const config6_2 = {
  type: "bar",
  data: {
    labels: ["KEPL", "KT", "KL"],
    datasets: [
      {
        label: "Absentism Rate",
        data: [4.3, 0.4, 5.8],
        backgroundColor: "orange",
        borderWidth: 1,
      },
      {
        label: "Lost work days per employee",
        data: [1.3, 0.2, 0.6],
        backgroundColor: "blue",
        borderWidth: 1,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Hide grid lines for y-axis
        },
      },
      y: {
        min: 0, // Set minimum value for the y-axis
        max: 6, // Set maximum value for the y-axis
        ticks: {
          stepSize: 1, // Set the interval between ticks if needed
        },
      },
    },
  },
};
const ctx6_2 = document.getElementById("myChart6_2").getContext("2d");
new Chart(ctx6_2, config6_2);

// chart 7
const config7_1 = {
  type: "doughnut",
  data: {
    labels: [
      "Not Disclosed",
      "Compensation & Benefits",
      "Termination",
      "Higher studies",
      "Not interested anymore",
      "illness",
    ],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 40, 10, 10, 10, 10],
        backgroundColor: [
          "darkblue",
          "rgba(242, 247, 178)",
          "rgba(208, 247, 245)",
          "rgba(207, 195, 37)",
          "rgba(245, 179, 237)",
          "rgba(37, 139, 207)",
        ],
        hoverOffset: 4,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          boxWidth: 13,
        },
      },
    },
  },
};
const ctx7_1 = document.getElementById("myChart7_1").getContext("2d");
new Chart(ctx7_1, config7_1);

const config7_2 = {
  type: "doughnut",
  data: {
    labels: ["0-1", "2-4", "4-6", "6-10"],
    datasets: [
      {
        label: "My First Dataset",
        data: [260, 80, 10, 20],
        backgroundColor: [
          "darkblue",
          "rgba(87, 98, 222)",
          "rgb(110, 119, 224)",
          "rgba(161, 167, 240)",
        ],
        hoverOffset: 4,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          boxWidth: 13,
        },
      },
    },
  },
};
const ctx7_2 = document.getElementById("myChart7_2").getContext("2d");
new Chart(ctx7_2, config7_2);

// from high chart
Highcharts.chart("container", {
  chart: {
    type: "lollipop",
  },

  legend: {
    enabled: false,
  },

  title: {
    text: null, // Hides the chart title
  },

  exporting: {
    enabled: false, // Disables exporting feature (hides the menu icon)
  },

  xAxis: {
    type: "category",
    labels: {
      rotation: -90,
    },
  },

  yAxis: {
    title: {
      text: null, // Hides the y-axis title
    },
    labels: {
      enabled: false, // Hides the y-axis labels
    },
  },

  series: [
    {
      name: "Population",
      data: [
        {
          name: "Business Development",
          y: 25,
          color: "rgba(227, 34, 150)",
        },
        {
          name: "Information Technology",
          y: 22,
          color: "rgba(227, 34, 150)",
        },
        {
          name: "Solar Projects",
          y: 8,
          color: "rgba(227, 34, 150)",
        },
        {
          name: "Operations",
          y: 5,
          color: "rgba(227, 34, 150)",
        },
        {
          name: "R&D",
          y: 4,
          color: "rgba(227, 34, 150)",
        },
        {
          name: "Sales",
          y: 6,
          color: "rgba(227, 34, 150)",
        },
        {
          name: "Human Resources",
          y: 4,
          color: "rgba(227, 34, 150)",
        },
        {
          name: "Administration",
          y: 12,
          color: "rgba(227, 34, 150)",
        },
        {
          name: "Finance & Accounts",
          y: 15,
          color: "rgba(227, 34, 150)",
        },
        {
          name: "Production & Maintainance",
          y: 12,
          color: "rgba(227, 34, 150)",
        },
        {
          name: "Purchase",
          y: 4,
          color: "rgba(227, 34, 150)",
        },
        {
          name: "Data Science",
          y: 4,
          color: "rgba(227, 34, 150)",
        },
        {
          name: "Quality",
          y: 4,
          color: "rgba(227, 34, 150)",
        },
        {
          name: "IOS",
          y: 4,
          color: "rgba(227, 34, 150)",
        },
        {
          name: "Energy Adviseer",
          y: 4,
          color: "rgba(227, 34, 150)",
        },
        {
          name: "Test Engineer",
          y: 4,
          color: "rgba(227, 34, 150)",
        },
        {
          name: "Advisory & Renewable",
          y: 4,
          color: "rgba(227, 34, 150)",
        },
        {
          name: "Marketing & Com",
          y: 4,
          color: "rgba(227, 34, 150)",
        },
      ],
    },
  ],
});


// chart 8
var root = am5.Root.new("chartdiv");


// Set themes
// https://www.amcharts.com/docs/v5/concepts/themes/
root.setThemes([
  am5themes_Animated.new(root)
]);


// Create wrapper container
var container = root.container.children.push(am5.Container.new(root, {
  width: am5.percent(100),
  height: am5.percent(90),
  layout: root.verticalLayout
}));


// Create series
// https://www.amcharts.com/docs/v5/charts/hierarchy/#Adding
var series = container.children.push(am5hierarchy.Tree.new(root, {
  singleBranchOnly: false,
  downDepth: 1,
  initialDepth: 10,
  valueField: "value",
  categoryField: "name",
  childDataField: "children"
}));


// Generate and set data
// https://www.amcharts.com/docs/v5/charts/hierarchy/#Setting_data
var maxLevels = 0;
var maxNodes = 1;
var maxValue = 1;

var data = {
  name: "14",
  children: []
}
generateLevel(data, "", 1);

series.data.setAll([data]);
series.set("selectedDataItem", series.dataItems[0]);

function generateLevel(data, name, level) {
  for (var i = 0; i < Math.ceil(maxNodes * Math.random()) + 1; i++) {
    var nodeName = name + "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[i];
    var child;
    if (level < maxLevels) {
      child = {
        name: nodeName + level
      }

      if (level > 0 && Math.random() < 0.5) {
        child.value = Math.round(Math.random() * maxValue);
      }
      else {
        child.children = [];
        generateLevel(child, nodeName + i, level + 1)
      }
    }
    else {
      child = {
        name: "3",
        value: Math.round(Math.random() * maxValue)
      }
    }
    data.children.push(child);
  }

  level++;
  return data;
}


// Make stuff animate on load
series.appear(1000, 10);

// chart 9

const config9_1 = {
  type: 'bar',
  data:  {
    labels: [
      "Apr20",
      "May20",
      "Jun20",
      "Jul20",
      "Aug20",
      "Sep20",
      "Oct20",
      "Nov20",
      "Dec20",
      "Jan21",
      "Feb21",
    ],
    datasets: [
      {
        label: "Joiner",
        data: [5, 5, 1,3,3,1,3,5,7,10],
        backgroundColor: "blue",
        borderWidth: 1,
      },
      {
        label: "Leaver",
        data: [-2,-4,-5,-2,-6,-3,-6,-6,-4,-7],
        backgroundColor: "red",
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
        },
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart'
      }
    }
  },
};

const ctx9_1 = document.getElementById("myChart9_1").getContext("2d");
new Chart(ctx9_1, config9_1);
const config9_2 = {
  type: "doughnut",
  data: {
    labels: ["18-24", "25-30", "31-35", "36-40","41-45","45-50"],
    datasets: [
      {
        label: "My First Dataset",
        data: [120, 280, 10, 20,20,60],
        backgroundColor: [
          
          "rgba(237, 84, 28)",
          "blue",
          "rgb(196, 14, 105)",
          "rgba(128, 4, 53)",
          "rgba(175, 184, 6)",
          "rgba(5, 105, 32)",
          
          
        ],
        hoverOffset: 4,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          boxWidth: 13,
        },
      },
    },
  },
};
const ctx9_2 = document.getElementById("myChart9_2").getContext("2d");
new Chart(ctx9_2, config9_2);



// chart 10
const config10 = {
  type: "bar",
  data: {
    labels: [
      "Apr20",
      "May20",
      "Jun20",
      "Jul20",
      "Aug20",
      "Sep20",
      "Oct20",
      "Nov20",
      "Dec20",
      "Jan21",
      "Feb21",
      "Mar21",
    ],
    datasets: [
      {
        data: [1.6, 1.3, 1.3, 0, 1.2, 1.3, 1.4, 1.2, 1.8, 1.8, 1.6, 1.7, 1.5,],
        backgroundColor: "rgba(173, 7, 93)",
        borderWidth: 1,
        order: 1,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Hide grid lines for y-axis
        },
      },
      y: {
        min: 0, // Set minimum value for the y-axis
        max: 4, // Set maximum value for the y-axis
        ticks: {
          stepSize: 2, // Set the interval between ticks if needed
        },
      },
    },
  },
};
const ctx10 = document.getElementById("myChart10").getContext("2d");
new Chart(ctx10, config10);