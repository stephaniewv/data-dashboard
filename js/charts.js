google.charts.load("current", {packages:["corechart"]});
google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawChartTwo);
google.charts.setOnLoadCallback(drawChartOne);
google.charts.setOnLoadCallback(drawChartHse);

/*Primer Gráfico de incriptas y desercion*/

function drawChartOne() {
  var data = google.visualization.arrayToDataTable([
    ['STUDENTS CURRENTLY ENROLLED', 'Students'],
    ['In process', 11],
    ['DROPOUT',  2],
  ]);

  var options = {
    title: 'ENROLLMENT',
    pieHole: 0.4,
  };

  var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
  chart.draw(data, options);
}

function drawChartTwo() {
  var dataMeetTheTarget = google.visualization.arrayToDataTable([
    ['STUDENTS MEET THE TARGET', 'Students'],
    ['Meet the target', 11],
    ['Dont meet the target',  2],
  ]);

  var optionsMeetTheTarget = {
    title: 'TARGET',
    pieHole: 0.5,
  };
  var chart = new google.visualization.PieChart(document.getElementById('donutchartTwo'));
  chart.draw(dataMeetTheTarget, optionsMeetTheTarget);
}

/*HSE*/ 

function drawChartHse() {
  var dataHse = google.visualization.arrayToDataTable([
    ['Promotion', 'Success', 'Intermedium', 'Detractors'],
    ['2017-2', 110, 30, 11]
]);

  var optionsHse = {
    chart: {
      title: 'HSE',
      subtitle: 'Porcentajes de alumnas que alcanzaron la meta, en proceso de hacerlo o por debajo de la meta',
    },
    bars: 'horizontal' // Required for Material Bar Charts.
  };

  var chart = new google.charts.Bar(document.getElementById('barchart_material'));

  chart.draw(dataHse, google.charts.Bar.convertOptions(optionsHse));
}

/*TECH*/ 
function drawChartTech() {
  var dataTech = google.visualization.arrayToDataTable([
    ['Promotion', 'Success', 'Intermedium', 'Detractors'],
    ['2017-2', 110, 30, 11]
]);

  var optionsTech = {
    chart: {
      title: 'HSE',
      subtitle: 'Porcentajes de alumnas que alcanzaron la meta, en proceso de hacerlo o por debajo de la meta',
    },
    bars: 'horizontal' // Required for Material Bar Charts.
  };

  var chart = new google.charts.Bar(document.getElementById('barchart_material'));

  chart.draw(dataTech, google.charts.Bar.convertOptions(optionsTech));
}