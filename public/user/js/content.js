let firestore = firebase.firestore();

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


function updateProjectsList(querySnapshot){
    let items = querySnapshot.docs.map((doc)=>{
        return(`
            <div class="trend-project">
                <div class="trend-img-title-container">
                    <h3 class="project-box-title">${doc.data().name}</h3>
                </div>
                <div class="flex-spacer"></div>
                <button class="view-btn">view</button>
            </div>
            `)
    })
    document.querySelector("#project-container").innerHTML = items.join('  ')
}
