let projectSettingPopUp = document.getElementById("project-setting-pop-up");
let settingBtn = document.getElementById("setting-btn");
let darkShadow = document.getElementById("dark-shadow");

settingBtn.addEventListener("click", () => {
    projectSettingPopUp.style.display = "block";
    darkShadow.style.display = "block";
})

document.body.addEventListener("click", (e) => {
    if(e.target == darkShadow) {
        projectSettingPopUp.style.display = "none";
        darkShadow.style.display = "none";
    }
})

