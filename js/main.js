/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    this.resetNavMenu();
    var currentScrollPos = window.pageYOffset;
    // Check for scroll pos <= 0 because iOS lets you scroll up past 0
    // And that was triggering issues with the 
    if (prevScrollpos > currentScrollPos || currentScrollPos <= 0) {
        document.getElementById("navHeader").style.top = "0";
    } else {
        document.getElementById("navHeader").style.top = "-52px";
    }
    prevScrollpos = currentScrollPos;
} 

function navMenuClick(e) {
    var navMenu = document.getElementById("navMenu");
    var navToggle = document.getElementById("nav-toggle");
    if (!navMenu.classList.contains("active")) {
        navMenu.classList.add("active");
        navToggle.classList.add("active");
    } else {
        resetNavMenu();
    }
}

function resetNavMenu() {
    var navMenu = document.getElementById("navMenu");
    var navToggle = document.getElementById("nav-toggle");
    navMenu.classList.remove("active");
    navToggle.classList.remove("active");
}