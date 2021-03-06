let menuButton = document.getElementById("menu-button");
let aboutPageButton = document.getElementById("about-page");
let projectsPageButton = document.getElementById("projects-page");
let loginPageButton = document.getElementById("login-page");
let menuIsOpened = false;

menuButton.addEventListener("click", () => {
    if (!menuIsOpened) {
        menuIsOpened = true;
        aboutPageButton.style.display = "block";
        projectsPageButton.style.display = "block";
        loginPageButton.style.display = "block";
        menuButton.innerHTML = "close";
        menuButton.style.backgroundColor = "#ff6666";
    } else {
        menuIsOpened = false;
        aboutPageButton.style.display = "none";
        projectsPageButton.style.display = "none";
        loginPageButton.style.display = "none";
        menuButton.innerHTML = "menu";
        menuButton.style.backgroundColor = "#FDD17A";

    };


})