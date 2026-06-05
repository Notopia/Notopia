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
function ChangePage() {
    loading.classList.remove("Lhidden");
    loading.classList.add("Lflex");
}
