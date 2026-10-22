import { DOMs } from "/get-started/DOMs.js"

let step = 1
const htmlTag = document.getElementById("content")
//*Set primary DOM and listeners
SetDOM()
SetAddEventListeners()
//*Set DOM for each step changing
function SetDOM() {
    htmlTag.innerHTML = DOMs[step - 1]
    SetAddEventListeners()
}
//*Set addEventListeners after step changed
function SetAddEventListeners() {
    const navigationButtons = document.querySelectorAll(".navigation")
    navigationButtons.forEach(button => {
        button.addEventListener("click", () => {
            const [currentStep, nextStep] = button.id.split('-')
            step = Number(nextStep)
            SetDOM()
        })
    })
}