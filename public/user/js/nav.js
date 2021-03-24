let mainTitle = document.getElementById("main-title");
let contributePageButton = document.getElementById("contribute-page");

contributePageButton.addEventListener("click", () => {
    window.location.href = "https://github.com/FlexChart/flexchart";
})


mainTitle.addEventListener("click", () => {
    window.location.href = window.location.origin;
})