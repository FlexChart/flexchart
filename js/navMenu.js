let menuButton = document.getElementById("menu-button");
let menuPanel = document.querySelector(".menu-panel");
let menuIsOpened = false;


window.onload = showMenuPanel;
window.onresize = showMenuPanel;


function showMenuPanel() {
    if (menuPanel.clientWidth == 1160) {
        menuPanel.style.display = "none";
        menuPanel.style.display = "none";
        menuButton.innerHTML = "menu";
        menuButton.style.backgroundColor = "#FDD17A";
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
        menuButton.innerHTML = "menu";
        menuButton.style.backgroundColor = "#FDD17A";
    };
})