function GoToDistancesPage() {
    window.location.href = 'FormDistances/FormDistances.html'
}
function GoToHomePage() {
    window.location.href = 'index.html'
}
function GoToEducationPage() {
    window.location.href = '../FormEducation/FormEducation.html'
}
function GoToContactPage() {
    window.location.href = '../FormContactUs/FormContactUs.html'
}
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const selectedSection = document.getElementById("homePart");
(function () {
    selectedSection.classList.add("selectedDiv");
})();