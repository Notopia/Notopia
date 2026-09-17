import { DistancesEasy } from "/Quizzes/Questions/DistancesEasy.js"
import { DistancesHard } from "/Quizzes/Questions/DistancesHard.js"
import { StepsEasy } from "/Quizzes/Questions/StepsEasy.js"
import { StepsHard } from "/Quizzes/Questions/StepsHard.js"

//*Get quiz's id
const paramsString = window.location.search
const searchParams = new URLSearchParams(paramsString)
const quizId = searchParams.get("id")
//*Get questions and level of the quiz and
let questions = null
switch (quizId) {
    case "1":
        questions = DistancesEasy.questions
        break;
    case "2":
        questions = DistancesHard.questions
        break;
    case "3":
        questions = StepsEasy.questions
        break;
    case "4":
        questions = StepsHard.questions
        break;
    default:
        window.location.href = "/404.html"
}
//*Get user answers
const userAnswers = JSON.parse(sessionStorage.getItem("quizAnswers"))
//!-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//*Get how many of user's answer are correct or mistake or blank
export const shortResult = {
    correct: 0,
    mistake: 0,
    blank: 0
}
questions.forEach(question => {
    if (question.answer.correctOption == userAnswers[question.id - 1]) {
        shortResult.correct += 1
    }
    else if (userAnswers[question.id - 1] == 0) {
        shortResult.blank += 1
    }
    else {
        shortResult.mistake += 1
    }
});
//!-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//*Get the correct answer and user answer for use in Detailed and Key-answer sheet
export const completeResult = []
questions.forEach(question => {
    completeResult.push(`${question.answer.correctOption}-${userAnswers[question.id - 1]}`)
});
//!-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const selectedSectionHeader = document.querySelector(".header__sections__quizzes");
const selectedSectionDropdown = document.querySelector("#quizzesPart");
(function () {
    selectedSectionHeader.classList.add("selectedDiv");
    selectedSectionDropdown.classList.add("selectedDiv");
})();