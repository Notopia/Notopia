function GoToDistancesPage() {
    window.location.href = 'Notopia/FormDistances/FormDistances.html'
}
function GoToHomePage() {
    window.location.href = 'Notopia/index.html'
}
function GoToContactPage() {
    window.location.href = 'Notopia/FormContactUs/FormContactUs.html'
}
const selectedSection = document.getElementById("homePart");
(function () {
    selectedSection.classList.add("selectedDiv");
})();
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const distancesPartTitle = document.getElementById("distancesPartTitle")
const SVGArrow = document.getElementById("ui-gambling-website-lined-icnos-casinoshunter")
function MouseOverHandler() {
    distancesPartTitle.style.color = "rgb(255, 133, 2)"
    SVGArrow.style.fill = "rgb(255, 133, 2)";
}
function MouseLeaveHandler() {
    distancesPartTitle.style.color = "rgba(255, 255, 255, 1)"
    SVGArrow.style.fill = "rgba(255, 255, 255, 1)";
}

