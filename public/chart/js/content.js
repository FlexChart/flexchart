window.chartId = window.location.pathname.split('/')[2];
console.log(chartId)
let chartName = ""
let firebaseTableData;
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




function* getRandomColor(){
    let i = 0;
    let backgroundColors = ["#89AE6B40","#FDD17A40","#EF696940"]
    let borderColors = ["#89AE6B","#E2C17E","#CD625B"]
    let hoverBackgroundColors = ["#89AE6B80","#FDD17A80","#EF696980"]
    while(true){
        yield backgroundColors[i]
        yield borderColors[i]
        yield hoverBackgroundColors[i]
        i = (i>=backgroundColors.length -1) ? 0 : i+1; 
    }
}
var randomColor = getRandomColor();
var chart;
function createChart(data,type){
    randomColor = getRandomColor();
    var ctx = document.querySelector("#chart-canvas").getContext("2d")
    chart?.destroy();
    chart = new Chart(ctx,{
        type: type,
        data:formatChartData(data),
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            animation:{
                duration:0
            }
        }
    })    
}


//data table object into 2d array
function convertDataToArray(data){
    let columns = []
    for(let i of Object.entries(data)){
        let rows = [];
        for(let j of Object.entries(i[1])){
            rows[parseInt(j[0])] = isNaN(Number(j[1])) ? j[1] : Number(j[1])    
        }
        columns[parseInt(i[0])] = rows
    }
    return columns;
}

function formatChartData(data){
    return {
        labels:data[0].splice(1,data[0].length-1),
        datasets:data.splice(1,data.length-1).map(datasets => {
            return {
                label: datasets[0],
                data: datasets.splice(1,datasets.length-1),
                backgroundColor:randomColor.next().value,
                borderColor:randomColor.next().value,
                hoverBackgroundColor:randomColor.next().value,
                borderWidth: 1
                
            }
        })
            
    }
}

firestore.collection("charts").doc(chartId).onSnapshot((doc)=>{
    chartName = doc.data().name
    firebaseTableData = doc.data().data ?? {};
    generateTable(doc.data().data ?? {});
    createChart(convertDataToArray(doc.data().data),["line","bar","pie","radar"][parseInt(doc.data().chartType ?? "0")-1])
    document.querySelector("#chart-type-selection").value = doc.data().chartType ?? 0;
},()=>{
    document.querySelector("#chart-title").innerHTML = "Not Found"
})

function updateChartType(type){
    firestore.collection("charts").doc(chartId).update({
        chartType:type
    })
}



//table thing
var previousFocusId;
function generateTable(data){

    let rows = 0;
    let columns = 0;
    for(let i of Object.entries(data)){
        if(parseInt(i[0])+1>columns){
            columns = parseInt(i[0])+1
        }
        for(let j of Object.entries(i[1])){
            if(parseInt(j[0])+1>rows){
                rows = parseInt(j[0])+1 
            }
        }
    }
    let generateRows = 
                (i)=>{
                    let cells = "";
                    for(let j = 0; j<columns + 2; j++){
                        cells += "<td id='tablecell"+j+"-"+i+"'contenteditable='true' onfocus='previousFocusId = \"tablecell"+j+"-"+i+"\"' onblur='updateTableData("+i+", "+j+", this.innerText)'>" + ((data[j]?.[i]) ?? "") + "</td>"
                    }
                    return cells;
                }

    let table = ()=>{
        let tableString = ""
        for(let i = 0; i<rows+4; i++){
            tableString += `<tr>${
                generateRows(i)
            }</tr>`
        }
        return `<table id="data-table">${tableString}</table>`
    }
    document.querySelector("#table-container").innerHTML = table();
    document.querySelector(`#${previousFocusId}`)?.focus();
}

function updateTableData(y,x,data){
    let tableData = firebaseTableData;
    if(data != tableData[x]?.[y]){
        if(!tableData[x]){
            tableData[x] = {}
        }
        tableData[x][y] = data;
        if(tableData[x][y].trim() == ""){
            delete tableData[x][y]
        }
        if(Object.entries(tableData[x]).length == 0){
            delete tableData[x]
        }
        firestore.collection("charts").doc(chartId).update({
            data:tableData
        })
    }
}

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

