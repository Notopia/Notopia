//*Preload audios
const audios = {};
for (let i = 1; i <= 12; i++) {
    audios[i] = new Audio(`/Audios/${i}.mp3`);
}
//*Handle click on mains
function MainButtonMousedownHandler(event) {
    const clickedButton = event.currentTarget;
    //*Remove shadow for click on piano button's vibe
    clickedButton.classList.remove("pianoMainButtonShadow");
    //*Play audio when click on piano button
    PlayAudio(clickedButton.id)
    //*Change selected button's color
    SelectButton(event.currentTarget.id)
}
function MainButtonMouseupHandler(event) {
    const clickedButton = event.currentTarget;
    //*Add removed shadow of piano button
    clickedButton.classList.add("pianoMainButtonShadow");
}
//*Handle click on primaries
function PrimaryButtonMousedownHandler(event) {
    const clickedButton = event.currentTarget;
    //*Remove shadow for click on piano button's vibe
    clickedButton.classList.remove("pianoPrimaryButtonShadow");
    //*Play audio when click on piano button
    PlayAudio(clickedButton.id)
    //*Change selected button's color
    SelectButton(event.currentTarget.id)
}
function PrimaryButtonMouseupHandler(event) {
    const clickedButton = event.currentTarget;
    //*Add removed shadow of piano button
    clickedButton.classList.add("pianoPrimaryButtonShadow");
}
//*Play audio function
function PlayAudio(id) {
    audios[id].currentTime = 0;
    audios[id].play()
}
//*Select piano button
function SelectButton(selectedButtonId) {
    //*First remove previous selected button color
    const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    ids.map((id) => {
        const button = document.getElementById(id)
        if (id == 1 || id == 3 || id == 5 || id == 6 || id == 8 || id == 10 || id == 12) {
            button.classList.remove("bg-main", "hover:text-white")
            button.classList.add("bg-white", "hover:text-main")
        }
        else if (id == 2 || id == 4 || id == 7 || id == 9 || id == 11) {
            button.classList.remove("bg-main", "text-gray-950", "hover:text-white")
            button.classList.add("bg-neutral-950", "text-white", "hover:text-main")
        }
    })
    //*Add orange color to selected button
    const selectedButton = document.getElementById(selectedButtonId)
    selectedButton.classList.remove("bg-white", "text-white", "bg-neutral-950", "hover:text-main")
    selectedButton.classList.add("bg-main", "text-gray-950", "hover:text-white")
}