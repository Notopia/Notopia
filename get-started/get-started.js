import { DOMs } from "/get-started/DOMs.js"

let step = 1
const htmlTag = document.getElementById("content")
//*Handle click on go to next or previous step
document.getElementById("1to2").addEventListener("click", () => {
    step = 2
    SetDOM()
})
//*Set DOM for each step changing
function SetDOM() {
    htmlTag.innerHTML = DOMs[step - 1]
}
