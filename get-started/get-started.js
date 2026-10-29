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
//!-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//*Set addEventListeners after step changed
function SetAddEventListeners() {
    const navigationButtons = document.querySelectorAll(".navigation")
    navigationButtons.forEach(button => {
        button.addEventListener("click", () => {
            let isUserSelect = false
            const [currentStep, nextStep] = button.id.split('-')
            const requireLabel = document.getElementById("requireLabel")
            //*Check user select an option
            if (step > 2 && nextStep > currentStep) {
                const inputs = document.querySelectorAll("input")
                inputs.forEach(input => {
                    if (input.checked) {
                        isUserSelect = true
                    }
                });
            }
            else {
                isUserSelect = true
            }
            //*Navigate user to new step if user selected an option 
            if (isUserSelect) {
                //*Set answer if user clicked on next step button
                if (nextStep > currentStep)
                    SetAnswers()
                //*Set step
                step = Number(nextStep)
                //*Set DOM for new step
                SetDOM()
            }
            //*Show require text to user if user didn't selected an option
            else {
                requireLabel.classList.remove("hidden")
            }
        })
    })
}
//!-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//*Save data in an array
const answers = ["", "", "", "", ""]
function SetAnswers() {
    if (step == 2) {
        const userName = document.getElementById("nameInput").value
        answers[0] = userName
    }
    else if (step == 6) {
        const options = document.querySelectorAll("input")
        let selectedOptions = ""
        for (let i = 0; i < 6; i++) {
            if (options[i].checked) {
                selectedOptions += (i + 1).toString()
            }
        }
        answers[4] = selectedOptions
        //*Save data in localStorage
        SaveInLocalstoarge()
    }
    else if (step > 2) {
        const options = document.querySelectorAll("input")
        for (let i = 0; i < 4; i++) {
            if (options[i].checked) {
                answers[step - 2] = (i + 1).toString()
            }
        }
    }
}
//*Save user answers in localStorage
function SaveInLocalstoarge() {
    const userName = answers[0]
    const userLevel = answers.slice(1, 5)
    localStorage.setItem("userName", userName)
    localStorage.setItem("userLevel", userLevel)
}