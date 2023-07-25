let value1 = document.querySelector('.hour1').textContent;
let value2 = document.querySelector('.hour2').textContent;
let value3 = document.querySelector('.hour3').textContent;
let value4 = document.querySelector('.hour4').textContent;
let value5 = document.querySelector('.hour5').textContent;

let temp1 = parseFloat(document.querySelector('.temp1').textContent);
let temp2 = parseFloat(document.querySelector('.temp2').textContent);
let temp3 = parseFloat(document.querySelector('.temp3').textContent);
let temp4 = parseFloat(document.querySelector('.temp4').textContent);
let temp5 = parseFloat(document.querySelector('.temp5').textContent);

const xValues = [value1, value2, value3, value4, value5];
const yValues = [temp1, temp2, temp3, temp4, temp5];

new Chart('forecast-chart', {
    type: 'line',
    data: {
        labels: xValues,
        datasets: [
            {
                data: yValues,
                borderColor: 'black',
                fill: false,
            },
        ],
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: false,
        },
        tooltips: {
            callbacks: {
                label: function (tooltipItem) {
                    return tooltipItem.yLabel;
                },
            },
        },
        plugins: {
            title: {
                display: false, // Hide the chart title
            },
        },
        scales: {
            xAxes: [
                {
                    display: false, // Hide x axis labels and ticks
                    gridLines: {
                        display: false, // Hide x axis grid lines
                    },
                },
            ],
            yAxes: [
                {
                    display: false, // Hide y axis labels and ticks
                    gridLines: {
                        display: false, // Hide y axis grid lines
                    },
                },
            ],
        },
    },
});
