google.charts.load('current', {packages: ['corechart']});
google.charts.load('current', {'packages': ['bar']});
google.charts.load('current', {'packages':['table']});
google.charts.setOnLoadCallback(drawTable);
google.charts.setOnLoadCallback(drawChartTwo);
google.charts.setOnLoadCallback(drawChartOne);
google.charts.setOnLoadCallback(drawChartHse);
google.charts.setOnLoadCallback(drawChartTech);
google.charts.setOnLoadCallback(drawPorcentualStudents);


/* Primer Gráfico de incriptas y desercion*/
function drawChartOne() {
  var data = google.visualization.arrayToDataTable([
    ['STUDENTS CURRENTLY ENROLLED LIM 2017', 'Students'],
    ['In process', 6],
    ['DROPOUT', 8],
  ]);

  var options = {
    width: 400,
    height: 200,
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
    ['Students meet the target', 'Students'],
    ['Meet the target', 6]
    ['Dont meet the target', 8],
  ]);

  var optionsMeetTheTarget = { 
    width: 400,
    height: 200,
    title: 'Students meet the target',
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
    height: 200,
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
    width: 400,
    height: 200,
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
    height: 200,
    title: 'Toppings I Like On My Pizza',
    colors: ['#2ecc71', '#ff4242', '#ec8f6e', '#f3b49f', '#f6c7b6'],
    title: 'ENROLLMENT',
    pieHole: 0.3,
  };

  var chart = new google.visualization.PieChart(document.getElementById('PorcentualStudents'));
  chart.draw(dataPorcentual, optionsPorcentual);
}

  function drawTable() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Name');
    data.addColumn('number', 'Salary');
    data.addColumn('boolean', 'Full Time Employee');
    data.addRows([
      ['Mike',  {v: 10000, f: '$10,000'}, true],
      ['Jim',   {v:8000,   f: '$8,000'},  false],
      ['Alice', {v: 12500, f: '$12,500'}, true],
      ['Bob',   {v: 7000,  f: '$7,000'},  true]
    ]);

    var table = new google.visualization.Table(document.getElementById('jedi'))}

    