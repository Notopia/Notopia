function GoToDistancesPage() {
    window.location.href = '/Distances/Distances.html'
}
function GoToStepsPage() {
    window.location.href = '/Steps/Steps.html'
}
function GoToHomePage() {
    window.location.href = '/index.html'
}
function GoToContactPage() {
    window.location.href = '/ContactUs/ContactUs.html'
}
let dropdownShowingStatus = false;
function OpenDropdown() {
    if (dropdownShowingStatus == false) {
        document.getElementById("dropdown").classList.add("showDropdown");
        dropdownShowingStatus = !dropdownShowingStatus;
    }
    else {
        document.getElementById("dropdown").classList.remove("showDropdown");
        dropdownShowingStatus = !dropdownShowingStatus;
    }
}
function CloseDropdown() {
    document.getElementById("dropdown").classList.remove("showDropdown");
}