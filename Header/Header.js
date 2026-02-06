function GoToDistancesPage() {
    window.location.href = '/Notopia/FormDistances/FormDistances.html'
}
function GoToHomePage() {
    window.location.href = '/Notopia/index.html'
}
function GoToContactPage() {
    window.location.href = '/Notopia/FormContactUs/FormContactUs.html'
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
