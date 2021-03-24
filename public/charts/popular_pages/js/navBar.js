let menuButton = document.getElementById("menu-button");
let navbarSize = document.getElementById("main-navbar");
let menuPanel = document.querySelector(".menu-panel");
let menuIsOpened = false;


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


