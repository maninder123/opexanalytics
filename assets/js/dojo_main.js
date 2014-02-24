//graph data
function calculate() {
  var data = {};
  data = {
    "1": [
      [30000, 90200, 50811, 45000, 76602],
      [22000, 80200, 70111, 65200, 96620]
    ],
    "2": [
      [88887, 99200, 12222, 12000, 11288],
      [22000, 80200, 56200, 5222, 50009]
    ]};
  return data;
}
function create_chart(Chart, theme, id, title_text, response_file, count) {
//chart object creation
  var chart = new Chart(id, {
    title: title_text,
    titlePos: "top",
    titleGap: 25,
    titleFont: "normal normal normal 15pt Arial",
    titleFontColor: "black"
  }
  );
// Set the theme
  chart.setTheme(theme);
//add Plot
  chart.addPlot("default", {
    type: "ClusteredColumns",
    markers: true,
    gap: 5
  });
  // Add axes
  chart.addAxis("x", {labels: [{value: 1, text: "Scen 1"}, {value: 2, text: "Scen 2"},
      {value: 3, text: "Scen 3"}, {value: 4, text: "Scen 4"},
      {value: 5, text: "Scen 5"}]});
  // append dollar symbol
  var myLabelFunc = function(text, value, precision) {
    return "$ " + text;
  };
//    chart.addAxis("y", {labelFunc: myLabelFunc});
  chart.addAxis("y", {title: 'Lost Profit ($)', vertical: true, fixLower: "major", fixUpper: "major", labelFunc: myLabelFunc});
  //bar data from calculate methods
  //assign ajax data to chats
  bar_one = calculate();
  chart.addSeries("Monthly Sales", bar_one[count][0]);
  chart.addSeries("Monthly Sales - aa", bar_one[count][1]);
  // Render the chart!
  chart.render();
}



var bar_one = new Array();
//require files for dojo charts and others
require([
  // Require the basic chart class
  "dojox/charting/Chart",
  // Require the theme of our choosing
  "dojox/charting/themes/MiamiNice",
  // Charting plugins:

  //  We want to plot Columns

  "dojox/charting/plot2d/ClusteredColumns",
  //  We want to use Markers
  "dojox/charting/plot2d/Markers",
  //  We'll use default x/y axes
  "dojox/charting/axis2d/Default",
  // Wait until the DOM is ready
  "dojo/domReady!", "dojo/dom", "dojox/validate/us"
], function(Chart, theme) {

  // method call for Chart creation,passing parameters
  //  1st parameter = Chart Object
  //  2nd parameter = theme Object
  //  3rd parameter = chart div ID
  //  4th parameter = chart Title
  // 5th parameter = response file name
  // 6th parameter = graph count varaible
  create_chart(Chart, theme, 'chartNode', 'Comparing Work Capital', 'assets/data/get_data_one.json', 1);
  create_chart(Chart, theme, 'chartNode2', 'Comparing Lost Profits from Stock Outs', 'assets/data/get_data_two.json', 2);
});