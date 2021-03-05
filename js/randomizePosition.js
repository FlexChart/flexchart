let cssAnimation = "";
let topPostion;
let leftPosition;

for (let i = 1; i < 5; i++) {
    topPosition = Math.ceil(Math.random() * window.screen.height-100);
    leftPosition = Math.ceil(Math.random() * window.screen.width-100);
    cssAnimation +=
        ".graph-string-set div:nth-child(" + i + "){position:absolute;left:" + leftPosition + "px;top:" + topPosition + "px;animation:fadeOut 3s;}"
}

cssAnimation = document.createTextNode(cssAnimation);
document.getElementsByTagName("style")[0].appendChild(cssAnimation);