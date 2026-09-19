import { DistancesEasy } from "../Questions/DistancesEasy.js"
import { DistancesHard } from "../Questions/DistancesHard.js"
import { StepsEasy } from "../Questions/StepsEasy.js"
import { StepsHard } from "../Questions/StepsHard.js"

//*Set event listener for piano buttons and test options
document.querySelectorAll("label").forEach((label => {
    label.addEventListener('click', SetAnswers)
}))
document.querySelectorAll(".piano__button").forEach((button => {
    button.addEventListener('click', SetAnswers)
}))
//!-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//*Get quiz's id
const paramsString = window.location.search
const searchParams = new URLSearchParams(paramsString)
const quizId = searchParams.get("id")
//*Get questions and level of the quiz and
let numberOfQuestions = null
switch (quizId) {
    case "1":
        numberOfQuestions = DistancesEasy.questions.length
        break;
    case "2":
        numberOfQuestions = DistancesHard.questions.length
        break;
    case "3":
        numberOfQuestions = StepsEasy.questions.length
        break;
    case "4":
        numberOfQuestions = StepsHard.questions.length
        break;
    default:
        window.location.href = "/404.html"
}
//*Fill answers array with 0
const answers = []
for (let i = 0; i < numberOfQuestions; i++) {
    answers.push(0)
}
//!-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//*Set the answer of a question
function SetAnswers(event) {
    const clickedTag = event.currentTarget
    //*Set answer of a test question when user clicked on an option
    if (clickedTag.tagName == "LABEL") {
        const [questionId, optionNumber] = clickedTag.title.split('-')
        answers[questionId - 1] = optionNumber
        //*Show remove answer button
        SetRemoveAnswerButtonStatus(questionId, true)
    }
    //*Set answer of a piano question when user clicked on an piano button
    else if (clickedTag.tagName == "DIV") {
        const questionId = clickedTag.id.split('-')[0]
        answers[questionId - 1] = clickedTag.children[0].innerText
        //*Show remove answer button
        SetRemoveAnswerButtonStatus(questionId, true)
    }
    sessionStorage.setItem("quizAnswers", answers)
}
//!-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//*Handle click on remove answer
document.querySelectorAll("#removeAnswer").forEach(button => {
    button.addEventListener('click', (event) => {
        const questionId = event.currentTarget.name
        //*Remove answer for test question
        if (button.dataset.questionType == "test") {
            document.getElementsByName(`question${questionId}`).forEach(option => {
                option.checked = false
            });
        }
        //*Remove answer of piano question
        else if (button.dataset.questionType == "piano") {
            UnSelectButtons(questionId)
        }
        answers[questionId - 1] = 0
        sessionStorage.setItem("quizAnswers", answers)
        SetRemoveAnswerButtonStatus(questionId, false)
    })
});
function UnSelectButtons(questionId) {
    //*Change color and etc of piano buttons
    const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    ids.map((id) => {
        const button = document.getElementById(`${questionId}-${id}`)
        if (id == 1 || id == 3 || id == 5 || id == 6 || id == 8 || id == 10 || id == 12) {
            button.classList.remove("bg-main", "hover:text-white")
            button.classList.add("bg-white", "hover:text-main")
        }
        else if (id == 2 || id == 4 || id == 7 || id == 9 || id == 11) {
            button.classList.remove("bg-main", "text-gray-950", "hover:text-white")
            button.classList.add("bg-neutral-950", "text-white", "hover:text-main")
        }
    })
    SetRemoveAnswerButtonStatus(questionId, false)
}
//!-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//*toggle remove answer button
function SetRemoveAnswerButtonStatus(questionId, newStatus) {
    const button = document.getElementsByName(questionId)[0]
    if (newStatus === true) {
        button.classList.remove("hidden")
    }
    else if (newStatus === false) {
        button.classList.add("hidden")
    }
}
//!-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//*Handle click on register answers button
document.getElementById("submit").addEventListener("click", (event) => {
    const userDecide = confirm("آیا می‌خواهید پاسخ‌های خود را ثبت نمایید؟")
    if (userDecide) {
        sessionStorage.setItem("quizAnswers", JSON.stringify(answers))
        window.location.replace(`/Quizzes/quiz/answer-sheet?id=${quizId}`)
    }
})