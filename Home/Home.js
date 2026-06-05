const body = document.body;
const loading = document.querySelector(".loading__container");
body.addEventListener("loading", () => {
    loading.classList.remove("Lflex");
    loading.classList.add("Lhidden");
})
function GoToDistancesPage() {
    setTimeout(() => {
        window.location.href = '/Notopia/Distances/Distances.html'
    }, 1000)
}
function GoToStepsPage() {
    setTimeout(() => {
        window.location.href = '/Notopia/Steps/Steps.html'
    }, 1000)
}
function GoToHomePage() {
    setTimeout(() => {
        window.location.href = '/Notopia/index.html'
    }, 1000)
}
function GoToContactPage() {
    setTimeout(() => {
        window.location.href = '/Notopia/ContactUs/ContactUs.html'
    }, 1000)
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
function ChangePage() {
    loading.classList.remove("Lhidden");
    loading.classList.add("Lflex");
}
