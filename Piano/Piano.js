function MainButtonMousedownHandler(event) {
    const clickedButton = event.currentTarget;
    clickedButton.classList.remove("pianoMainButtonShadow");
    const audio = new Audio(`/Audio/${event.currentTarget.id}`)
    audio.play();
}
function MainButtonMouseupHandler(event) {
    const clickedButton = event.currentTarget;
    clickedButton.classList.add("pianoMainButtonShadow");
}
function PrimaryButtonMousedownHandler(event) {
    const clickedButton = event.currentTarget;
    clickedButton.classList.remove("pianoPrimaryButtonShadow");
    const audio = new Audio(`/Audio/${event.currentTarget.id}`)
    audio.play();
}
function PrimaryButtonMouseupHandler(event) {
    const clickedButton = event.currentTarget;
    clickedButton.classList.add("pianoPrimaryButtonShadow");
}
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const selectedSectionHeader = document.querySelector(".header__sections__piano");
const selectedSectionDropdown = document.querySelector("#pianoPart");
(function () {
    selectedSectionHeader.classList.add("selectedDiv");
    selectedSectionDropdown.classList.add("selectedDiv");
})();