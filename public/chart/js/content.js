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
