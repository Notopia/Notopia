import { completeResult } from "./AnswerSheet.js"
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
//*Fill DOM with KeyAnswer answer-sheet if userAnswers are available
if (completeResult != null) {
    let DOM = `<div class="w-full bg-white rounded-xl py-8">
                <h2 class="w-full text-center m-0 mb-4">کلید پاسخ</h2>
                <div class="w-full flex items-center justify-center">
                <div class="max-w-58 w-full flex flex-col items-center gap-2 border border-neutral-700 rounded-lg max-[360px]:px-4 px-8 mx-6 py-8">`
    questions.map((question) => {
        DOM += `<div dir="rtl" class="flex items-center justify-between w-full">
                        <span class="font-bold text-xl w-8">${question.id}.</span>
                        <div class="flex items-center justify-center text-center w-full gap-2">`
        let [correctAnswer, userAnswer] = completeResult[question.id - 1].split('-')
        //*Handle each box color
        for (let i = 1; i <= 4; i++) {
            if (correctAnswer != 1 && correctAnswer != 2 && correctAnswer != 3 && correctAnswer != 4) {
                DOM += `<div class="w-full text-center">سوال غیرتستی</div>`
                break
            }
            else if (correctAnswer == userAnswer) {
                if (i == correctAnswer) {
                    DOM += `<div class="w-7 h-4 bg-green-400 border rounded-sm flex items-center justify-center">
                                <svg width="15px" height="15px" class="mt-[0.5px]"
                                    viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                                            stroke="#000000" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round"></path>
                                        <path d="M7.75 12L10.58 14.83L16.25 9.17004" stroke="#000000" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                    </g>
                                </svg>
                            </div>`
                }
                else {
                    DOM += `<div class="w-7 h-4 border rounded-sm"></div>`
                }
            }
            else if (userAnswer == 0) {
                if (i == correctAnswer) {
                    DOM += `<div class="w-7 h-4 bg-green-400 border rounded-sm"></div>`
                }
                else {
                    DOM += `<div class="w-7 h-4 border rounded-sm"></div>`
                }
            }
            else if (correctAnswer != userAnswer) {
                if (i == correctAnswer) {
                    DOM += `<div class="w-7 h-4 bg-green-400 border rounded-sm"></div>`
                }
                else if (i == userAnswer) {
                    DOM += `<div class="w-7 h-4 bg-red-500 border rounded-sm"></div>`
                }
                else {
                    DOM += `<div class="w-7 h-4 border rounded-sm"></div>`
                }
            }
        }
        //*Add div closing tag
        DOM += `</div>
                </div>`
    })
    //*Add closing tags
    DOM += `</div>
            </div>
            </div>`
    //*Fill optional section tag with DOM
    document.getElementById("optional").innerHTML = DOM
}