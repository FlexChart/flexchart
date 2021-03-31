let menuButton = document.getElementById("menu-button");
let navbarSize = document.getElementById("main-navbar");
let menuPanel = document.querySelector(".menu-panel");
let menuPanelItems = document.querySelectorAll(".menu-panel-items");

console.log(menuPanelItems[0])
console.log(menuPanelItems[1])

let menuIsOpened = false;

let contributePageBtn = document.getElementById("contribute-page");
let mainTitle = document.getElementById("main-title");
let projectPageButton = document.getElementById("projects-page")

projectPageButton.addEventListener("click", () => {
    window.location.href = window.location.origin + "//user";
})

menuPanelItems[0].addEventListener("click", () => {
    window.location.href = window.location.origin + "//user";
})

contributePageBtn.addEventListener("click", () => {
    window.open("https://github.com/FlexChart/flexchart", "_blank");
});

menuPanelItems[1].addEventListener("click", () => {
    window.open("https://github.com/FlexChart/flexchart", "_blank");
    showMenuPanel()
})

mainTitle.addEventListener("click", () => {
    window.location.href = window.location.origin;
})


window.onload = showMenuPanel;
window.onresize = showMenuPanel;

function showMenuPanel() {
    if (navbarSize.clientWidth == 1160) {
        menuButton.style.display = "none";
        menuPanel.style.display = "none"
    } else {
        menuPanel.style.display = "none"
        menuButton.style.display = "block";
        menuButton.innerHTML = "menu";
        menuIsOpened = false;
        menuButton.style.backgroundColor = "#FDD17A";
    }
}

menuButton.addEventListener("click", () => {
    if (!menuIsOpened) {
        console.log(menuIsOpened)
        menuIsOpened = true;
        menuPanel.style.display = "flex";
        menuButton.innerHTML = "close";
        menuButton.style.backgroundColor = "#ff6666";
    } else {
        menuIsOpened = false;
        menuPanel.style.display = "none";
        menuButton.innerHTML = "menu";
        menuButton.style.backgroundColor = "#FDD17A";
    };
})


