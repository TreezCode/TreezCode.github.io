
// Sticky Header on Scroll
// ==========================================================
var header = document.getElementById("header");
var sticky = header.offsetTop;
var upArrow = document.getElementById("up-arrow");

function stickyHeader() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        upArrow.style.display = "block";
    } else {
        header.classList.remove("sticky");
        upArrow.style.display = "none";
    }
}

// Call function on scroll
window.onscroll = function() {
    stickyHeader();
}

// Prevents CSS transitions until the page is fully loaded.
// ==========================================================
var body = document.querySelector("body");

window.onload = function() {
    body.classList.remove("preload");
}