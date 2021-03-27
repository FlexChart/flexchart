async function covidCharts(graphURL1, graphURL2) {

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    function getLastDates() {
        const dates = []
        const today = new Date()
        const days = 86400000 //number of milliseconds in a day
        for (let i = 1; i <= 5; i++) {
            dayAgo = new Date(today - (i * days))
            dates.push((dayAgo.toISOString()).slice(0, 10))
        }
        return dates
    }

    async function getCovidData() {
        try {
            const result = await fetch(graphURL1, requestOptions)
            data = await result.json()
            return data.data
        } catch (err) {
            console.log("Error:", err)
        }
    }

    async function getCovidDataByCountry() {
        try {
            const result = await fetch(graphURL2, requestOptions)
            data = await result.json()
            return data.data
        } catch (err) {
            console.log("Error:", err)
        }
    }
    const dates = getLastDates()
    const covidTimeline = await getCovidData()
    const covidByCountryRaw = await getCovidDataByCountry()
    const covidByCountryObject = {}

    // Graph1

    var totalInfected = document.getElementById("total-confirmed")
    totalInfected.innerHTML = `Total Cases Confirmed ${new Intl.NumberFormat().format(covidTimeline[0].confirmed)}`
    var chartUpdateAt = document.getElementById("updated-at")
    chartUpdateAt.innerHTML = `Updated At ${covidTimeline[0].date}`
    var ctx = document.getElementById('covid').getContext('2d');

    var covid = await new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Recovered', 'Active', 'Deaths'],
            datasets: [{
                data: [covidTimeline[0].recovered, covidTimeline[0].active, covidTimeline[0].deaths],
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

    // Graph2

    var ctx2 = document.getElementById('covid2').getContext('2d');
    var covid2 = new Chart(ctx2, {
        type: 'horizontalBar',
        data: {
            labels: dates,
            datasets: [{
                data: [covidTimeline[1].active / 1000000,
                covidTimeline[2].active / 1000000,
                covidTimeline[3].active / 1000000,
                covidTimeline[4].active / 1000000,
                covidTimeline[5].active / 1000000],
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
                label: "Active cases in Millions",
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

    //graph3

    const countrySelect = document.getElementById("countries")

    covidByCountryRaw.forEach(country => {
        //transform object
        covidByCountryObject[country.name] = country
        //filling options
        var countryElement = document.createElement("option")
        countryElement.value = country.name;
        countryElement.innerHTML = country.name
        countrySelect.appendChild(countryElement)
    });


    countrySelect.onchange = () => {
        var countryData = covidByCountryObject[countrySelect.value]
        document.getElementById("covidByMarket").remove();
        var container = document.getElementById("covidByMarketContainer")
        var canvas = document.createElement("canvas")
        canvas.setAttribute("id", "covidByMarket")
        canvas.classList.add("chart-box-bymarket")
        container.appendChild(canvas)
        var ctx = document.getElementById("covidByMarket").getContext('2d');
        var covidByMarket = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["confirmed", "Recovered", "Critical", "Deaths"],
                datasets: [{
                    data: [countryData.latest_data.confirmed / 1000,
                    countryData.latest_data.recovered / 1000,
                    countryData.latest_data.critical / 1000,
                    countryData.latest_data.deaths / 1000,
                    ],
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(100, 50, 200, 0.2)',
                    ],
                    borderColor: [
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(100, 50, 200, 1)',
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                title: {
                    display: true,
                    text: "latest Update by market. Numbers in Thousands "
                },
                legend: {
                    display: false,
                    position: "left",
                },
                scales: {
                    xAxes: [{
                        gridLines: {
                            offsetGridLines: true
                        }
                    }]
                }
            }
        });
    }

}

window.addEventListener("load", covidCharts("https://corona-api.com/timeline", "https://corona-api.com/countries"))


