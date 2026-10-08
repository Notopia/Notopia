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
    audios[id].currentTime = 0;
    audios[id].play()
}
//!-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//*Handle keydown in piano page
function KeyDownHandler(event) {
    const keyId = ["a|1", "w|2", "s|3", "e|4", "d|5", "f|6", "t|7", "g|8", "y|9", "h|10", "u|11", "j|12"]
    for (let i = 0; i <= 11; i++) {
        const [key, id] = keyId[i].split('|')
        if (event.key == key || event.key.toLowerCase() == key) {
            PlayAudio(id)
        }
    }
}
//!-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const selectedSectionHeader = document.querySelector(".header__sections__piano");
const selectedSectionDropdown = document.querySelector("#pianoPart");
(function () {
    selectedSectionHeader.classList.add("selectedDiv");
    selectedSectionDropdown.classList.add("selectedDiv");
})();