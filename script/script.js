const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Admin', 'Stan', 'Piet', 'Klaas', 'Roos', 'Henk'],
        datasets: [{
            label: 'Aantal uur per account (gisteren)',
            data: [7, 5, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132)',
                'rgba(54, 162, 235)',
                'rgba(255, 206, 86)',
                'rgba(75, 192, 192)',
                'rgba(153, 102, 255)',
                'rgba(255, 159, 64)'
            ],
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const labels = [
    'Maandag',
    'Dinsdag',
    'Woensdag',
    'Donderdag',
    'Vrijdag',
    'Zaterdag',
    'Zondag',
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'Aantal active sessies',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [20, 10, 5, 8, 20, 30, 5, 3],
    }]
  };

  const configActiveUsers = {
    type: 'line',
    data: data,
    options: {}
  };

  const activeUsers = new Chart(
    document.getElementById('activeUsers'),
    configActiveUsers
  );


  const data2 = {
    labels: [
      '8:30-12:30',
      '12:30-17:30',
      '17:30-22:30',
      '22:30-3:30',
      '3:30-6:30',
      '6:30-8:30'
    ],
    datasets: [{
      label: 'Meest gebruikte uren',
      data: [60, 75, 20, 35, 60, 20],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(255, 112, 0)',
        'rgb(0, 107, 52)',
        'rgb(0, 62, 109)',
      ],
      hoverOffset: 4
    }]
  };

var xValues = ["entiteit1", "entiteit2", "entiteit3", "entiteit4", "entiteit5"];
var yValues = [55, 49, 44, 24, 15];
var barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145"
];

new Chart("mostUsedEnti", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      label: 'Meest gebruikte entiteiten',
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "Meest gebruikte entiteiten"
    }
  }
});

var landValues = ["Ideal", "Afterpay", "Paypal", "Credit card", "Acceptgiro"];
var barValues = [55, 49, 44, 24, 15];
var barColors = ["red", "green","blue","orange","brown"];

new Chart("testchart5", {
    type: "bar",
    data: {
      labels: landValues,
      datasets: [{
        label: 'Meest gebruikte betaal methode',
        backgroundColor: barColors,
        data: barValues
      }]
    },
    options: {
        legend: {display: true},
        title: {
          display: true,
        }
      }
    });


    var testValues = [100,200,300,400,500,600,700,800,900,1000];

new Chart("testchart6", {
  type: "line",
  data: {
    labels: testValues,
    datasets: [{
      label: 'Niet gelukte imports',
      data: [860,1140,1060,1060,1070,1110,1330,2210,7830,2478],
      borderColor: "red",
      fill: false
    },{
      label: 'Gelukte imports',
      data: [1600,1700,1700,1900,2000,2700,4000,5000,6000,7000],
      borderColor: "green",
      fill: false
    },{
      label: 'Imports waarschuwingen',
      data: [300,700,2000,5000,6000,4000,2000,1000,200,100],
      borderColor: "blue",
      fill: false
    }]
  },
  options: {
    legend: {display: false}
  }
});

var xyValues = [
    {x:50, y:7},
    {x:60, y:8},
    {x:70, y:8},
    {x:80, y:9},
    {x:90, y:9},
    {x:100, y:9},
    {x:110, y:10},
    {x:120, y:11},
    {x:130, y:14},
    {x:140, y:14},
    {x:150, y:15}
  ];
  
  new Chart("testchart7", {
    type: "scatter",
    data: {
      datasets: [{
        label: 'test',
        pointRadius: 4,
        pointBackgroundColor: "rgb(0,0,255)",
        data: xyValues
      }]
    },
    options: {
      legend: {display: false},
      scales: {
        xAxes: [{ticks: {min: 40, max:160}}],
        yAxes: [{ticks: {min: 6, max:16}}],
      }
    }
  });

  var lineValues = [3,6,10,12,15,20,22,23,24,30,32,34,36];
  var linexValues = ["Jan","Feb","Ma","Apr","Mei","Jun","Jul","Aug","Sep","Okt","Nov","Dec"];

new Chart("testchart8", {
  type: "line",
  data: {
    labels: lineValues,
    datasets: [{
      label: 'Aantal gebruikers accounts',
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(0,0,255,1.0)",
      borderColor: "rgba(0,0,255,0.1)",
      data: lineValues
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: 6, max:16}}],
    }
  }
});

  const config2 = {
    type: 'bar',
    data: data2,
  };

  const mostUsedTime = new Chart(
    document.getElementById('mostUsedTime'),
    config2
  );


var checkList = document.getElementById('list1');
checkList.getElementsByClassName('anchor')[0].onclick = function(evt) {
  if (checkList.classList.contains('visible'))
    checkList.classList.remove('visible');
  else
    checkList.classList.add('visible');
}

$(".chart_visibility").change(function(){

 
  if (this.checked){
    $(".container")[0].children[this.value].style.display = "block"; 
  }else{
    $(".container")[0].children[this.value].style.display = "none"; 
  }
});

var modal = document.getElementById("myModal");

// Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
function openModal() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}