
function IDEGraph() {
    const ctx = document.getElementById("chart").getContext("2d")
    var chart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: ['youtube.com', 'facebook.com', 'en.wikipedia.org', "twitter.com", "whatsapp.com", "amazon.com", "instagram.com", "live.com"],
            datasets: [{
                data: [5549, 2271, 2291, 1202, 873, 690, 665, 574],
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
                text: "Most visited websites worldwide 2021. In number of visits"
            },
            legend: {
                display: false,
                position: "left",
            },
        }
    });
}

IDEGraph()