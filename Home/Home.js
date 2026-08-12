const distancesPartTitle = document.getElementById("distancesPartTitle")
const SVGArrowDistances = document.getElementById("ui-gambling-website-lined-icnos-casinoshunter")
function MouseOverDistancesHandler() {
    distancesPartTitle.style.color = "#f9a515"
    SVGArrowDistances.style.fill = "#f9a515";
}
function MouseLeaveDistancesHandler() {
    distancesPartTitle.style.color = "rgba(255, 255, 255, 1)"
    SVGArrowDistances.style.fill = "rgba(255, 255, 255, 1)";
}
//!-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const stepsPartTitle = document.getElementById("stepsPartTitle")
const SVGArrowSteps = document.getElementById("ui-gambling-website-lined-icnos-casinoshunter2")
function MouseOverStepsHandler() {  
    stepsPartTitle.style.color = "#f9a515"
    SVGArrowSteps.style.fill = "#f9a515";
}
function MouseLeaveStepsHandler() {
    stepsPartTitle.style.color = "rgba(255, 255, 255, 1)"
    SVGArrowSteps.style.fill = "rgba(255, 255, 255, 1)";
}
//!-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const pianoPartTitle = document.getElementById("pianoPartTitle")
const SVGArrowPiano = document.getElementById("ui-gambling-website-lined-icnos-casinoshunter3")
function MouseOverPianoHandler() {
    pianoPartTitle.style.color = "#f9a515"
    SVGArrowPiano.style.fill = "#f9a515";
}
function MouseLeavePianoHandler() {
    pianoPartTitle.style.color = "rgba(255, 255, 255, 1)"
    SVGArrowPiano.style.fill = "rgba(255, 255, 255, 1)";
}
//!-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
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