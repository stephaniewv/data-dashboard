google.charts.load('current', {packages: ['corechart']});
google.charts.load('current', {'packages': ['bar']});
google.charts.load('current', {'packages':['table']});
google.charts.setOnLoadCallback(drawChartTwo);
google.charts.setOnLoadCallback(drawChartOne);
google.charts.setOnLoadCallback(drawChartHse);
google.charts.setOnLoadCallback(drawChartTech);
google.charts.setOnLoadCallback(drawPorcentualStudents);
google.charts.setOnLoadCallback(drawTable);


/* Primer Gráfico de incriptas y desercion*/
function drawChartOne() {
  var data = google.visualization.arrayToDataTable([
    ['STUDENTS CURRENTLY ENROLLED', 'Students'],
    ['In process', 11],
    ['DROPOUT', 2],
  ]);

  var options = {
    width: 400,
    height: 240,
    title: 'Toppings I Like On My Pizza',
    colors: ['#2ecc71', '#ff4242', '#ec8f6e', '#f3b49f', '#f6c7b6'],
    title: 'ENROLLMENT',
    pieHole: 0.3,
  };

  var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
  chart.draw(data, options);
}
/* Grafico de Meta*/
function drawChartTwo() {
  var dataMeetTheTarget = google.visualization.arrayToDataTable([
    ['STUDENTS MEET THE TARGET', 'Students'],
    ['Meet the target', 11],
    ['Dont meet the target', 2],
  ]);

  var optionsMeetTheTarget = { 
    width: 400,
    height: 240,
    title: 'Toppings I Like On My Pizza',
    colors: ['#2ecc71', '#ff4242', '#ec8f6e', '#f3b49f', '#f6c7b6'],   
    title: 'TARGET',
    pieHole: 0.3,
  };
  var chart = new google.visualization.PieChart(document.getElementById('donutchartTwo'));
  chart.draw(dataMeetTheTarget, optionsMeetTheTarget);
}

/* HSE*/ 

function drawChartHse() {
  var dataHse = google.visualization.arrayToDataTable([
    ['Promotion', 'Success', 'Detractors'],
    ['2017-2', 110, 30]
  ]);

  var optionsHse = {
    width: 400,
    chart: {
      title: 'HSE',
      subtitle: 'Porcentajes de alumnas que alcanzaron la meta, en proceso de hacerlo o por debajo de la meta',
    },
    bars: 'horizontal' // Required for Material Bar Charts.
  };

  var chart = new google.charts.Bar(document.getElementById('barchart_hse'));

  chart.draw(dataHse, google.charts.Bar.convertOptions(optionsHse));
}

/* TECH*/
function drawChartTech() {
  var dataTech = google.visualization.arrayToDataTable([
    ['Promotion', 'Success', 'Detractors'],
    ['2017-2', 110, 30]
  ]);

  var optionsTech = {
    width: 600,
    chart: {
      title: 'TECH',
      subtitle: 'Porcentajes de alumnas que alcanzaron la meta, en proceso de hacerlo o por debajo de la meta',
    },
    bars: 'horizontal'
  };

  var chart = new google.charts.Bar(document.getElementById('barchart_tech'));

  chart.draw(dataTech, google.charts.Bar.convertOptions(optionsTech));
};

/* HSE Y TECH*/

/* Porcentaje de la cantidad de estudiantes que superan*/

function drawPorcentualStudents() {
  var dataPorcentual = google.visualization.arrayToDataTable([
    ['STUDENTS meet the target', 'dont meet the target'],
    ['meet Target', 11],
    ['donde Meet the Target', 2],
  ]);

  var optionsPorcentual = {
    width: 400,
    height: 240,
    title: 'Toppings I Like On My Pizza',
    colors: ['#2ecc71', '#ff4242', '#ec8f6e', '#f3b49f', '#f6c7b6'],
    title: 'ENROLLMENT',
    pieHole: 0.3,
  };

  var chart = new google.visualization.PieChart(document.getElementById('PorcentualStudents'));
  chart.draw(dataPorcentual, optionsPorcentual);
}

/* puntuación promedio de los jedi masters*/ 

function drawTable() {
  var dataJM = new google.visualization.DataTable();
  dataJM .addColumn('string', 'Name');
  dataJM .addColumn('number', 'points');
  dataJM .addRows([
    ['Ale',  {v: 10000}],
    ['Bea',   {v:8000 }],
    ['Lulu', {v: 12500}],
    ['Franco',   {v: 7000}],
    ['Gabriela ',   {v: 7000}],
    ['Mariana',   {v: 7000}],
    
  ]);

  var table = new google.visualization.Table(document.getElementById('table_div'));

  table.draw(dataJM, {showRowNumber: true, width: '100%', height: '100%'});
}