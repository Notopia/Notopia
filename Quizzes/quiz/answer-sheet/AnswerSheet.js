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
export let quizStatus = true
//*Get user answers
const userAnswers = JSON.parse(sessionStorage.getItem("quizAnswers"))
//*Get quiz id from sessionStorage
const savedQuizId = sessionStorage.getItem("quizId")
//*Show message to user if data in storage has problem
const DOM = document.getElementById("main")
if (!userAnswers || quizId != savedQuizId) {
    quizStatus = false
    DOM.innerHTML = `<lottie-player autoplay mode="normal" src="/Animations/AnswersNotFound.json" class="w-96 sm:w-96 lg:w-100 mt-6 max-w-full">
        </lottie-player>
        <div class="flex flex-col justify-center items-center text-gray-200">
            <h1 dir="rtl" class="text-lg m-0">خطایی در دریافت پاسخ های شما رخ داد!</h1>
        </div>
        <div class="gap-5 w-full mt-8 flex flex-col md:flex-row mb-34">
            <button
                class="text-lg mx-auto w-fit px-4 py-2 border-2 border-gray-400 rounded-xl outline-none cursor-pointer hover:bg-gray-200 hover:scale-105 focus:ring-6 ring-offset-0 focus:border-none ring-main transition-all bg-white"
                onclick="GoToHomePage(), ChangePage()">بازگشت به صفحه کوییزها</button>
            <button
                class="text-lg mx-auto w-fit px-4 py-2 border-2 border-gray-400 rounded-xl outline-none cursor-pointer hover:bg-gray-200 hover:scale-105 focus:ring-6 ring-offset-0 focus:border-none ring-main transition-all bg-white"
                onclick="GoToHomePage(), ChangePage()">بازگشت به صفحه اصلی</button>
        </div>`
}
//!-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//*Get how many of user's answer are correct or mistake or blank
export let shortResult = null
export let completeResult = null
if (quizStatus) {
    shortResult = {
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
    completeResult = []
    questions.forEach(question => {
        completeResult.push(`${question.answer.correctOption}-${userAnswers[question.id - 1]}`)
    });
}
//!-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
document.querySelectorAll(".return").forEach(button => {
    button.addEventListener("click", () => {
        sessionStorage.clear()
    })
})
//!-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const selectedSectionHeader = document.querySelector(".header__sections__quizzes");
const selectedSectionDropdown = document.querySelector("#quizzesPart");
(function () {
    selectedSectionHeader.classList.add("selectedDiv");
    selectedSectionDropdown.classList.add("selectedDiv");
})();