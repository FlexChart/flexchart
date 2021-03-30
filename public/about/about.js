const menuPanel = document.getElementById("menu-panel")
var isOpen = false

function backSite() {
    window.location.href = window.location.origin;
}

function toggleMenuPanel() {
    isOpen = !isOpen
    if (isOpen) {
        menuPanel.style.display = "block"
    } else {
        menuPanel.style.display = "none"
    }
}

function hideMenuPanel() {
    if (window.screen.availWidth > 520) {
        menuPanel.style.display = "none"
    }
    isOpen = false
}

window.onresize = hideMenuPanel;
window.onload = hideMenuPanel;
