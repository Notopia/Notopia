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
            let isUserSelect = false
            const [currentStep, nextStep] = button.id.split('-')
            const requireLabel = document.getElementById("requireLabel")
            if (step > 2 && nextStep > currentStep) {
                const inputs = document.querySelectorAll("input")
                inputs.forEach(input => {
                    console.log(input.checked)
                    if (input.checked) {
                        isUserSelect = true
                    }
                });
            }
            else {
                isUserSelect = true
            }
            if (isUserSelect) {
                step = Number(nextStep)
                SetDOM()
            }
            else {
                requireLabel.classList.remove("hidden")
            }
        })
    })
}