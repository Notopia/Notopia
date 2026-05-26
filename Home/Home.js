function GoToDistancesPage() {
    window.location.href = '/Distances/Distances.html'
}
function GoToHomePage() {
    window.location.href = '/index.html'
}
function GoToContactPage() {
    window.location.href = '/ContactUs/ContactUs.html'
}
const selectedSection = document.getElementById("homePart");
(function () {
    selectedSection.classList.add("selectedDiv");
})();
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const distancesPartTitle = document.getElementById("distancesPartTitle")
const SVGArrow = document.getElementById("ui-gambling-website-lined-icnos-casinoshunter")
function MouseOverHandler() {
    distancesPartTitle.style.color = "#f9a515"
    SVGArrow.style.fill = "#f9a515";
}
function MouseLeaveHandler() {
    distancesPartTitle.style.color = "rgba(255, 255, 255, 1)"
    SVGArrow.style.fill = "rgba(255, 255, 255, 1)";
}
const stepsPartTitle = document.getElementById("stepsPartTitle")
const SVGArrow2 = document.getElementById("ui-gambling-website-lined-icnos-casinoshunter2")
function MouseOverHandler2() {
    stepsPartTitle.style.color = "#f9a515"
    SVGArrow2.style.fill = "#f9a515";
}
function MouseLeaveHandler2() {
    stepsPartTitle.style.color = "rgba(255, 255, 255, 1)"
    SVGArrow2.style.fill = "rgba(255, 255, 255, 1)";
}
