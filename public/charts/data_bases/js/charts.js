
function IDEGraph() {
    const ctx = document.getElementById("chart").getContext("2d")
    var chart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: ['Oracle', 'MYSQL', 'SQL Server', "Microsoft Access", "PostgreSQL", "Firebase", "MongoDB", "Splunk"],
            datasets: [{
                data: [30, 17, 13, 9, 5, 4, 4, 3],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(204, 102, 255, 0.2)',
                    'rgba(153, 255, 102, 0.2)',
                    'rgba(204, 102, 0, 0.2)',
                    'rgba(0, 0, 102, 0.2)',
                    'rgb(0, 0, 0,0.2)'
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(204, 102, 255, 1)',
                    'rgba(153, 255, 102, 1)',
                    'rgba(204, 102, 0, 1)',
                    'rgba(0, 0, 102, 1)',
                    'rgb(0, 0, 0, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            title: {
                display: true,
                text: "Market paricipation in %. Programming Language most searched as of March 2021, compared with last year."
            },
            legend: {
                display: false,
                position: "left",
            },
            scales: {
                xAxes: [{
                    ticks: {
                        min: 0,
                        max: 35,
                    }
                }]
            }
        }
    });
}

IDEGraph()