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
}
//*Fill answers array with 0
const answers = []
for (let i = 0; i < numberOfQuestions; i++) {
    answers.push(0)
}
//*Set the answer of a question
function SetAnswers(event) {
    const clickedTag = event.currentTarget
    //*Set answer of a test question when user clicked on an option
    if (clickedTag.tagName == "LABEL") {
        const [questionId, optionNumber] = clickedTag.title.split('-')
        answers[questionId - 1] = optionNumber
    }
    //*Set answer of a piano question when user clicked on an piano button
    else if (clickedTag.tagName == "DIV") {
        const questionId = clickedTag.id.split('-')[0]
        answers[questionId - 1] = clickedTag.children[0].innerText
    }
}
//*Handle click on register answers button
document.getElementById("submit").addEventListener("click", () => {
    sessionStorage.setItem("quizAnswers", answers)
    window.location.href = `/Quizzes/quiz/answer-sheet?id=${quizId}`
})