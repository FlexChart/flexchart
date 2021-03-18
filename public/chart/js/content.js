window.chartId = window.location.pathname.split('/')[2];
console.log(chartId)

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
