var intro = document.getElementById('pageintro');
var welcome = document.getElementById('welcome');
var intr = document.getElementById('intro');
var line = document.getElementById('line');
var page2 = document.getElementById('page2');
var page3 = document.getElementById('page3');
//show introduction page
function showintro() {
    intro.style.display = "grid";
    line.style.marginLeft = "38%";
    line.style.display = "none"

    page2.style.display = "none";
    welcome.style.display = "none";
    page3.style.display = "none";

}
//none introduction page
function noneintro() {
    welcome.style.display = "block";
    page2.style.display = "none";
    line.style.display = "none"
    intro.style.display = "none";
    page3.style.display = "none";
}
//show skills page
function showskills() {
    line.style.marginLeft = "61.5%";
    line.style.display = "none"

    page2.style.display = "grid";
    welcome.style.display = "none";
    intro.style.display = "none";
    page3.style.display = "none";
}
//none skills page
function noneskills() {
    welcome.style.display = "block";
    page2.style.display = "none";
    line.style.display = "none"
    intro.style.display = "none";
    page3.style.display = "none";
}
//show contact page
function showcontact() {
    line.style.marginLeft = "84%";
    line.style.display = "none"

    page3.style.display = "grid";
    page2.style.display = "none";
    welcome.style.display = "none";
    intro.style.display = "none";

}
//none contact page
function nonecontact() {
    welcome.style.display = "block";
    page2.style.display = "none";
    line.style.display = "none"
    intro.style.display = "none";
    page3.style.display = "none";
}

function showwel() {
    welcome.style.display = "block";
    page2.style.display = "none";
    line.style.display = "none"
    intro.style.display = "none";
    page3.style.display = "none";
}