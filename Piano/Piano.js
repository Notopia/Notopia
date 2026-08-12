//*Preload audios
const audios = {};
for (let i = 1; i <= 12; i++) {
    audios[i] = new Audio(`/Audios/${i}.mp3`);
}
//*Handle click on mains
function MainButtonMousedownHandler(event) {
    const clickedButton = event.currentTarget;
    clickedButton.classList.remove("pianoMainButtonShadow");
    PlayAudio(clickedButton.id)
}
function MainButtonMouseupHandler(event) {
    const clickedButton = event.currentTarget;
    clickedButton.classList.add("pianoMainButtonShadow");
}
//*Handle click on primaries
function PrimaryButtonMousedownHandler(event) {
    const clickedButton = event.currentTarget;
    clickedButton.classList.remove("pianoPrimaryButtonShadow");
    PlayAudio(clickedButton.id)
}
function PrimaryButtonMouseupHandler(event) {
    const clickedButton = event.currentTarget;
    clickedButton.classList.add("pianoPrimaryButtonShadow");
}
//*Play audio
function PlayAudio(id) {
    audios[id].play()
}
//!-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const selectedSectionHeader = document.querySelector(".header__sections__piano");
const selectedSectionDropdown = document.querySelector("#pianoPart");
(function () {
    selectedSectionHeader.classList.add("selectedDiv");
    selectedSectionDropdown.classList.add("selectedDiv");
})();