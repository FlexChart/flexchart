let aboutButton = document.getElementById("about-page");
let menuAboutButton = document.getElementById("about-page-menu");
let projectButton = document.getElementById("projects-page");
let menuProjectButton = document.getElementById("projects-page");

projectButton.addEventListener("click", () => {
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
