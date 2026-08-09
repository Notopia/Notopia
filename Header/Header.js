const body = document.querySelector("body");
const loading = document.querySelector(".loading__container");
//Hide loading when window onload
function HideLoading() {
    loading.classList.remove("Lflex");
    loading.classList.add("Lhidden");
    window.addEventListener('pageshow', function (event) {
        if (event.persisted) {
            loading.classList.remove("Lflex");
            loading.classList.add("Lhidden");
        }
    });
}
function GoToDistancesPage() {
    setTimeout(() => {
        window.location.href = '/Distances/'
    }, 1000)
    CloseDropdown()
}
function GoToStepsPage() {
    setTimeout(() => {
        window.location.href = '/Steps/'
    }, 1000)
    CloseDropdown()
}
function GoToHomePage() {
    setTimeout(() => {
        window.location.href = '/'
    }, 1000)
    CloseDropdown()
}
function GoToContactPage() {
    setTimeout(() => {
        window.location.href = '/ContactUs/'
    }, 1000)
    CloseDropdown()
}
let dropdownShowingStatus = false;
function OpenDropdown() {
    if (!dropdownShowingStatus) {
        document.getElementById("dropdown").classList.add("showDropdown");
    }
    else if (dropdownShowingStatus) {
        document.getElementById("dropdown").classList.remove("showDropdown");
    }
    dropdownShowingStatus = !dropdownShowingStatus;
}
function CloseDropdown() {
    if (dropdownShowingStatus) {
        document.getElementById("dropdown").classList.remove("showDropdown");
        dropdownShowingStatus = !dropdownShowingStatus;
    }
}
function ChangePage() {
    loading.classList.remove("Lhidden");
    loading.classList.add("Lflex");
    loading.load('/Animations/Loading.json');
}