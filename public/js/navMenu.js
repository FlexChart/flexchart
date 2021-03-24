let menuButton = document.getElementById("menu-button");
let navbarSize = document.getElementById("main-navbar");
let menuPanel = document.querySelector(".menu-panel");
let menuIsOpened = false;


window.onload = showMenuPanel;
window.onresize = showMenuPanel;


function showMenuPanel() {
    if (navbarSize.clientWidth <= 1160) {
        menuPanel.style.display = "none";
        menuPanel.style.display = "none";
        menuButton.innerHTML = displayName ? displayName : "menu";
        menuButton.style.backgroundColor = "#FDD17A";
        menuIsOpened = false;
    }
}

menuButton.addEventListener("click", () => {
    if (!menuIsOpened) {
        menuIsOpened = true;
        menuPanel.style.display = "block";
        menuButton.innerHTML = "close";
        menuButton.style.backgroundColor = "#ff6666";
    } else {
        menuIsOpened = false;
        menuPanel.style.display = "none";
        menuButton.innerHTML = displayName ? displayName : "menu";
        menuButton.style.backgroundColor = "#FDD17A";
    };
})


