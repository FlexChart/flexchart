
function IDEGraph() {
    const ctx = document.getElementById("chart").getContext("2d")
    var chart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: ['Attack on Titan', 'Dr. Stone', 'The Promised Neverland', "Re:Zero", "Beastars", "Jujutsu Kaisen", "One Piece"],
            datasets: [{
                data: [405, 366, 254, 223, 184, 182, 151],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(204, 102, 255, 0.2)',
                    'rgba(153, 255, 102, 0.2)',
                    'rgba(204, 102, 0, 0.2)',
                    'rgba(0, 0, 102, 0.2)',
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(204, 102, 255, 1)',
                    'rgba(153, 255, 102, 1)',
                    'rgba(204, 102, 0, 1)',
                    'rgba(0, 0, 102, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            title: {
                display: true,
                text: "Most Popular Anime in 2021"
            },
            legend: {
                display: false,
                position: "left",
            },

        }
    });
}

IDEGraph()