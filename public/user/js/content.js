let firestore = firebase.firestore();
var chartNames;
var chartDatas = {};
var chartNamesDatas = {}


window.addEventListener("load", () => {
    document.querySelector(".new-btn").addEventListener("click", () => {
        let name = prompt("Enter name of project:", "new project").trim();
        if (name) {
            firestore.collection("charts").add({
                owner: uid,
                name: name
            });
        }
    });
});


function getRandomString() {
    let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = ""
    for(let i = 0; i<11; i++) {
        result += letters[Math.floor(Math.random() * letters.length)]
    }

    return result
}


let deleteData = function (){
    let darkShadow2 = document.getElementById("dark-shadow-2");
    let deleteButtonId = this.id;
    let deleteButton = document.getElementById(deleteButtonId)

    // deleteButton.addEventListener("click", () => {
    darkShadow2.style.display = "block";
    // })

    let confirmDeleteButton = document.getElementById("delete-button");
    let confirmCancelButton = document.getElementById("cancel-button");

    confirmCancelButton.addEventListener("click", () => {
        darkShadow2.style.display = "none";
    }) 

    confirmDeleteButton.addEventListener("click", () => {
        firestore.collection("charts").doc(chartDatas[deleteButtonId]).delete()
        darkShadow2.style.display = "none";
    })


}


let editDataName = function () {
    let dataId = this.id;
    let darkShadow3 = document.getElementById("dark-shadow-3");
    darkShadow3.style.display = "block";

    let confirmNameCancelButton = document.getElementById("cancel-name-button")
    let confirmNameButton = document.getElementById("confirm-name-button")
    let nameInput = document.getElementById("new-project-name-input");

    confirmNameCancelButton.addEventListener("click", () => {
        darkShadow3.style.display = "none";
    })

    confirmNameButton.addEventListener("click", () => {
        let nameInputValue = nameInput.value;
        if(nameInputValue.trim()) {
            firestore.collection("charts").doc(chartNamesDatas[dataId]).update({
                name: nameInputValue
            })
            darkShadow3.style.display = "none";
        }  
        
    })
}


window.addEventListener("load", () => {

    let darkShadow3 = document.getElementById("dark-shadow-3");
    document.body.addEventListener("click", (e) => {
        if(e.target == darkShadow3 || 
           e.target == document.getElementById("dark-shadow-1") ||
           e.target == document.getElementById("dark-shadow-2"))
           {
                darkShadow3.style.display = "none";
           }
    })
})


window.addEventListener("load", () => {

    let darkShadow2 = document.getElementById("dark-shadow-2");
    document.body.addEventListener("click", (e) => {
        if(e.target == document.getElementById("dark-shadow-2") || e.target == document.getElementById("dark-shadow-1")){
            darkShadow2.style.display = "none";       
        }
    })
})



function updateProjectsList(querySnapshot){
    let items = querySnapshot.docs.map((doc)=>{
        return(`
            <div class="trend-project">
                <div class="trend-img-title-container">
                    <h3 class="project-box-title">${doc.data().name}</h3>
                </div>
                <div class="flex-spacer"></div>
                <button class="view-btn" onclick="window.location.href = '/chart/${doc.id}'">view</button>
            </div>
            `)
    })
    document.querySelector("#project-container").innerHTML = items.join('  ')

    chartDatas = {};
    chartNames = querySnapshot.docs.map(chart=>chart.data().name)
    chartIds = querySnapshot.docs.map(chart=>chart.id)

    let projectsSettingsContainers = document.getElementById("projects-settings-containers");
    projectsSettingsContainers.innerHTML = "";

    let counter = 0
    for(let chartName of chartNames) {
        // create div
        let chartNamesContainer = document.createElement("div");
        chartNamesContainer.classList.add("chart-names-container");
        projectsSettingsContainers.appendChild(chartNamesContainer);

        // create button and append to div
        let chartNameButton = document.createElement("button");
        chartNameButton.classList.add("chart-name-button");
        chartNameButton.innerHTML = chartName;
        chartNameButton.id = chartName;
        chartNamesContainer.appendChild(chartNameButton);

        // create delete button and append to div
        let deleteButton = document.createElement("img");
        deleteButton.src = "../../img/deleteButton.svg"
        deleteButton.classList.add("delete-button");
        let deleteButtonId = getRandomString();
        while (deleteButtonId in chartDatas) {
            deleteButtonId = getRandomString();
        }
        deleteButton.id = deleteButtonId;
        chartNamesContainer.appendChild(deleteButton);

        // append them to chartDatas
        chartDatas[deleteButton.id] = chartIds[counter];
        chartNamesDatas[chartName] = chartIds[counter];
        counter++;


    }
    if (chartNames.length == 0) {
        noProjectsMessage = document.createElement("p");
        noProjectsMessage.innerHTML = "No Projects Yet..";
        noProjectsMessage.id = "no-project-message";
        projectsSettingsContainers.appendChild(noProjectsMessage);
    } 
    // detect Button clicked
    let chartDatasArray = Object.keys(chartDatas);

    for (let chartData of chartDatasArray) {
        document.getElementById(chartData).onclick = deleteData;
    }

    for (let eachChart of chartNames) {
        document.getElementById(eachChart).onclick = editDataName;
    }
}
