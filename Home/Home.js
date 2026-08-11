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
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const selectedSectionHeader = document.querySelector(".header__sections__home");
const selectedSectionDropdown = document.querySelector("#homePart");
(function () {
    selectedSectionHeader.classList.add("selectedDiv");
    selectedSectionDropdown.classList.add("selectedDiv");
})();