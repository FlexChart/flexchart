let aboutButton = document.getElementById("about-page");
let menuAboutButton = document.getElementById("about-page-menu");
let projectButton = document.getElementById("projects-page");
let menuProjectButton = document.getElementById("projects-page-menu");
let createMyOwnProjectButton = document.getElementById("create-my-own-project-btn");
let createMyOwnButton = document.getElementById("create-my-own-button");
let loginPageButton = document.getElementById("login-page");


loginPageButton.addEventListener("click", () => {

    document.querySelector("#sign-in-popup").style.display = (document.querySelector("#sign-in-popup").style.display == "none") ? "flex" : "none"
})


createMyOwnButton.addEventListener("click", () => {
    if(isSignedUp) {
        window.location.href = window.location.origin + "//user";
    } else {
            document.querySelector("#sign-in-popup").style.display = (document.querySelector("#sign-in-popup").style.display == "none") ? "flex" : "none"
    }
})


createMyOwnProjectButton.addEventListener("click", () => {
    if(isSignedUp) {
        window.location.href = window.location.origin + "//user";
    } else {
            document.querySelector("#sign-in-popup").style.display = (document.querySelector("#sign-in-popup").style.display == "none") ? "flex" : "none"
    }
})


projectButton.addEventListener("click", () => {
    if(isSignedUp) {
        window.location.href = window.location.origin + "//user";
    } else {
            document.querySelector("#sign-in-popup").style.display = (document.querySelector("#sign-in-popup").style.display == "none") ? "flex" : "none"
    }
})


menuProjectButton.addEventListener("click", () => {
    if(isSignedUp) {
        window.location.href = window.location.origin + "//user";
    } else {
            document.querySelector("#sign-in-popup").style.display = (document.querySelector("#sign-in-popup").style.display == "none") ? "flex" : "none"
    }
})


aboutButton.addEventListener("click", () => {
    window.location.href = window.location.origin + "//about";
})

menuAboutButton.addEventListener("click", () => {
    window.location.href = window.location.origin + "//about";
})
