let mainTitle = document.getElementById("main-title");
let contributePageButton = document.getElementById("contribute-page");
let settingPage = document.getElementById("setting-page");
let settingMenu = document.getElementById("setting-menu");
let menuIsOpened = false;


settingPage.addEventListener("click", () => {
    if(menuIsOpened){
        settingMenu.style.display = "none";
        menuIsOpened = false;
    } else {
        settingMenu.style.display = "inline";
        menuIsOpened = true;
    }
})


contributePageButton.addEventListener("click", () => {
    window.location.href = "https://github.com/FlexChart/flexchart";
})


mainTitle.addEventListener("click", () => {
    window.location.href = window.location.origin;
})

