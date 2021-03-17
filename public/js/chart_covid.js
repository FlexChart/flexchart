function lastSevenDays() {
    var dates = []
    today = new Date()
    days = 86400000 //number of milliseconds in a day
    for (let i = 1; i <= 5; i++) {
        dayAgo = new Date(today - (i * days))
        dates.push((dayAgo.toISOString()).slice(0, 10))
    }
    return dates
}
lastSevenDays()

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

var data = "";

const globalCountChart = async (url) => {
    var ctx = document.getElementById('covid').getContext('2d');
    try {
        const result = await fetch(url, requestOptions)
        data = await result.json()
        console.log(data.result)
        var totalInfected = document.getElementById("total-confirmed")
        totalInfected.innerHTML = `Total Cases Confirmed ${new Intl.NumberFormat().format(data.result.confirmed)}`
        var chartUpdateAt = document.getElementById("updated-at")
        chartUpdateAt.innerHTML = `Updated At ${data.date}`

        var covid = await new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['Recovered', 'In Recovery', 'Deaths'],
                datasets: [{
                    data: [data.result.recovered, data.result.confirmed - data.result.recovered - data.result.deaths, data.result.deaths],
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                    ],
                    borderColor: [
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(255, 99, 132, 1)',
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                title: {
                    display: true,
                    text: "Covid Global View"
                },
                legend: {
                    display: true,
                    position: "left",
                }
            }
        });
    } catch (error) {
        console.log("error", error)
    }


}

const lastSevenGlobal = async (url) => {
    var ctx2 = document.getElementById('covid2').getContext('2d');
    var dates = []
    today = new Date()
    days = 86400000 //number of milliseconds in a day
    for (let i = 1; i <= 5; i++) {
        dayAgo = new Date(today - (i * days))
        dates.push((dayAgo.toISOString()).slice(0, 10))
    }
    try {

        const result = await fetch(url + dates[0] + "/" + dates[4], requestOptions)
        rawData = await result.json()
        data = [rawData.result]
        console.log(data)
        var covid2 = new Chart(ctx2, {
            type: 'horizontalBar',
            data: {
                labels: dates,
                datasets: [{
                    data: [50, 55, 60, 65, 70],
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(54, 162, 235, 0.2)',

                    ],
                    borderColor: [
                        'rgba(54, 162, 235, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(54, 162, 235, 1)',

                    ],
                    label: "Cases confirmed in Millions",
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    xAxes: [{
                        gridLines: {
                            offsetGridLines: true
                        }
                    }]
                }
            }
        });
    } catch (error) {
        console.log("error", error)
    }
}

// globalCountChart("https://covidapi.info/api/v1/global")
lastSevenGlobal("https://covidapi.info/api/v1/global/")
