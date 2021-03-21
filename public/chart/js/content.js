window.chartId = window.location.pathname.split('/')[2];
console.log(chartId)
let chartName = ""

function updateSidebarList(querySnapshot){
    let items = querySnapshot.docs.map((doc)=>{
        return(`
            <a href="/chart/${doc.id}">
                <li class="sidebar-list-item" id="${doc.id == chartId ? "sidebar-selected" : ""}">
                    ${doc.data().name}
                </li>
            </a>
            `)
    })
    document.querySelector("#sidebar-list").innerHTML = items.join('  ')
}

firestore.collection("charts").doc(chartId).onSnapshot((doc)=>{
    chartName = doc.data().name
    document.querySelector("#chart-title").innerHTML = doc.data().name;
},()=>{
    document.querySelector("#chart-title").innerHTML = "Not Found"
})


function addChart(){
    let name=prompt("Enter name of chart:", "New Chart").trim();
    if(name){
        firestore.collection("charts").add({
            name: name,
            owner: uid
        })
    }
}


window.addEventListener("load", ()=>{
    document.body.addEventListener("click", (e)=>{
        let element = document.querySelector("#chart-info-popup");
        if(element.style.opacity != 0 && e.target.closest("#chart-info-popup") != element && e.target.closest("#setting-page") != document.querySelector("#setting-page")){
            element.style.opacity = 0;
            element.style.pointerEvents = "none"
        }
    })
})

function togglePopup(){
    let element = document.querySelector("#chart-info-popup");
    if(element.style.opacity != 1){
        element.style.opacity = 1;
        element.style.pointerEvents = "auto"
    }else{
        element.style.opacity = 0;
        element.style.pointerEvents = "none"
    }
}

function deleteChart(){
    if(confirm(`Delete ${chartName}?`)){
        firestore.collection("charts").doc(chartId).delete();
        togglePopup();
    }
}

function editChartName(){
    let name = prompt("Enter new name for chart: ", chartName).trim();
    if(name){
        firestore.collection("charts").doc(chartId).update({
            name: name
        })
    }
}



//chart.js

function* getRandomColor(){
    let i = 0;
    let backgroundColors = ["#89AE6B40","#FDD17A40","#EF696940"]
    let borderColors = ["#89AE6B","#E2C17E","#CD625B"]
    let hoverBackgroundColors = ["#89AE6B80","#FDD17A80","#EF696980"]
    while(true){
        yield backgroundColors[i]
        yield borderColors[i]
        yield hoverBackgroundColors[i]
        i = (i>=backgroundColors.lenght) ? 0 : i+1; 
    }
}

var randomColor = getRandomColor();

window.addEventListener("load", ()=>{

    var ctx = document.querySelector("#chart-canvas").getContext("2d")
    var chart = new Chart(ctx,{
        type: 'line',
        data: {
            labels: [1, 2, 3, 4, 5, 6],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor:randomColor.next().value,
                borderColor:randomColor.next().value,
                hoverBackgroundColor:randomColor.next().value,
                borderWidth: 1
            },{
                label: '# of Votes',
                data: [15, 12, 4, 2, 5, 2],
                backgroundColor: randomColor.next().value,
                borderColor:randomColor.next().value,
                hoverBackgroundColor:randomColor.next().value,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    })
})



