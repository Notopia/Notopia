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
//*Fill DOM with Detailed answer-sheet if userAnswers are available
if (completeResult != null) {
    let DOM = `<h2 class="w-full text-center">پاسخنامه تشریحی</h2>`
    questions.map((question) => {
        DOM += `<article class="border border-gray-600 rounded-lg bg-gray-100 shadow-main shadow-md px-2 py-3">
        <section dir="rtl" class="px-3 sm:px-5 pb-4 border-b border-gray-400">
        <span class="font-bold text-lg md:text-xl xl:text-2xl">سوال ${question.id}:</span>
        <span class="text-base md:text-lg">
        ${question.question}
        </span>
        </section>
        <section dir="rtl" class="px-2 pt-4 pb-4 flex flex-col gap-1">`
        let [correctAnswer, userAnswer] = completeResult[question.id - 1].split('-')
        if (question.type == "test") {
            for (let i = 1; i <= 4; i++) {
                if (correctAnswer == userAnswer) {
                    if (i == correctAnswer) {
                        DOM += `<div
                                class="w-full flex items-center border-2 border-green-500 bg-green-200 py-1 rounded-full mx-auto">
                                <span class="mx-1 h-5">
                                    <svg width="18px" height="18px" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                        <g id="SVGRepo_iconCarrier">
                                            <path
                                                d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z"
                                                fill="#05df72"></path>
                                        </g>
                                    </svg>
                                </span>
                                <span>${i})</span>
                                <span>${question.options[i]}</span>
                            </div>`
                    }
                    else {
                        DOM += `<div class="w-full flex items-center">
                            <span class="mr-1 ml-1 h-5">
                                <svg width="18px" height="18px" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                                            stroke="#000000" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round"></path>
                                    </g>
                                </svg>
                            </span>
                            <span class="ml-0.5">${i})</span>
                            <span>${question.options[i]}</span>
                        </div>`
                    }
                }
                else if (userAnswer == 0) {
                    if (i == correctAnswer) {
                        DOM += `<div
                                class="w-full flex items-center border-2 border-green-500 bg-green-200 py-1 rounded-full mx-auto">
                                <span class="mx-1 h-5">
                                    <svg width="18px" height="18px" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                        <g id="SVGRepo_iconCarrier">
                                            <path
                                                d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                                                stroke="#000000" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round"></path>
                                        </g>
                                    </svg> 
                                </span>
                                <span>${i})</span>
                                <span>${question.options[i]}</span>
                            </div>`
                    }
                    else {
                        DOM += `<div class="w-full flex items-center">
                            <span class="mr-1 ml-1 h-5">
                                <svg width="18px" height="18px" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                                            stroke="#000000" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round"></path>
                                    </g>
                                </svg>
                            </span>
                            <span class="ml-0.5">${i})</span>
                            <span>${question.options[i]}</span>
                        </div>`
                    }
                }
                else if (correctAnswer != userAnswer) {
                    if (i == correctAnswer) {
                        DOM += `<div
                                class="w-full flex items-center border-2 border-green-500 bg-green-200 py-1 rounded-full mx-auto">
                                <span class="mx-1 h-5">
                                    <svg width="18px" height="18px" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                        <g id="SVGRepo_iconCarrier">
                                            <path
                                                d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z"
                                                fill="#05df72"></path>
                                        </g>
                                    </svg>
                                </span>
                                <span>${i})</span>
                                <span>${question.options[i]}</span>
                            </div>`
                    }
                    else if (i == userAnswer) {
                        DOM += `<div class="w-full border-2 border-red-500 bg-red-200 py-1 rounded-full mx-auto flex items-center">
                            <span class="mr-1 h-5">
                                <svg fill="#ff0000" width="20px" height="20px" viewBox="0 0 64 64" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                    xml:space="preserve" xmlns:serif="http://www.serif.com/"
                                    style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
                                    stroke="#ff0000">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <rect id="Icons" x="-704" y="-64" width="1280" height="800" style="fill:none;">
                                        </rect>
                                        <g id="Icons1" serif:id="Icons">
                                            <g id="Strike"> </g>
                                            <g id="H1"> </g>
                                            <g id="H2"> </g>
                                            <g id="H3"> </g>
                                            <g id="list-ul"> </g>
                                            <g id="hamburger-1"> </g>
                                            <g id="hamburger-2"> </g>
                                            <g id="list-ol"> </g>
                                            <g id="list-task"> </g>
                                            <g id="trash"> </g>
                                            <g id="vertical-menu"> </g>
                                            <g id="horizontal-menu"> </g>
                                            <g id="sidebar-2"> </g>
                                            <g id="Pen"> </g>
                                            <g id="Pen1" serif:id="Pen"> </g>
                                            <g id="clock"> </g>
                                            <g id="external-link"> </g>
                                            <g id="hr"> </g>
                                            <g id="info"> </g>
                                            <g id="warning"> </g>
                                            <path id="error-circle"
                                                d="M32.085,56.058c6.165,-0.059 12.268,-2.619 16.657,-6.966c5.213,-5.164 7.897,-12.803 6.961,-20.096c-1.605,-12.499 -11.855,-20.98 -23.772,-20.98c-9.053,0 -17.853,5.677 -21.713,13.909c-2.955,6.302 -2.96,13.911 0,20.225c3.832,8.174 12.488,13.821 21.559,13.908c0.103,0.001 0.205,0.001 0.308,0Zm-0.282,-4.003c-9.208,-0.089 -17.799,-7.227 -19.508,-16.378c-1.204,-6.452 1.07,-13.433 5.805,-18.015c5.53,-5.35 14.22,-7.143 21.445,-4.11c6.466,2.714 11.304,9.014 12.196,15.955c0.764,5.949 -1.366,12.184 -5.551,16.48c-3.672,3.767 -8.82,6.016 -14.131,6.068c-0.085,0 -0.171,0 -0.256,0Zm-12.382,-10.29l9.734,-9.734l-9.744,-9.744l2.804,-2.803l9.744,9.744l10.078,-10.078l2.808,2.807l-10.078,10.079l10.098,10.098l-2.803,2.804l-10.099,-10.099l-9.734,9.734l-2.808,-2.808Z">
                                            </path>
                                            <g id="plus-circle"> </g>
                                            <g id="minus-circle"> </g>
                                            <g id="vue"> </g>
                                            <g id="cog"> </g>
                                            <g id="logo"> </g>
                                            <g id="radio-check"> </g>
                                            <g id="eye-slash"> </g>
                                            <g id="eye"> </g>
                                            <g id="toggle-off"> </g>
                                            <g id="shredder"> </g>
                                            <g id="spinner--loading--dots-" serif:id="spinner [loading, dots]"> </g>
                                            <g id="react"> </g>
                                            <g id="check-selected"> </g>
                                            <g id="turn-off"> </g>
                                            <g id="code-block"> </g>
                                            <g id="user"> </g>
                                            <g id="coffee-bean"> </g>
                                            <g id="coffee-beans">
                                                <g id="coffee-bean1" serif:id="coffee-bean"> </g>
                                            </g>
                                            <g id="coffee-bean-filled"> </g>
                                            <g id="coffee-beans-filled">
                                                <g id="coffee-bean2" serif:id="coffee-bean"> </g>
                                            </g>
                                            <g id="clipboard"> </g>
                                            <g id="clipboard-paste"> </g>
                                            <g id="clipboard-copy"> </g>
                                            <g id="Layer1"> </g>
                                        </g>
                                    </g>
                                </svg>
                            </span>
                            <span class="ml-0.5">${i})</span>
                            <span>${question.options[i]}</span>
                        </div>`
                    }
                    else {
                        DOM += `<div class="w-full flex items-center">
                            <span class="mr-1 ml-1 h-5">
                                <svg width="18px" height="18px" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                                            stroke="#000000" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round"></path>
                                    </g>
                                </svg>
                            </span>
                            <span class="ml-0.5">${i})</span>
                            <span>${question.options[i]}</span>
                        </div>`
                    }
                }
            }
        }
        else if (question.type == "piano") {
            DOM += `<section dir="ltr" class="w-full flex flex-col items-center justify-center mt-3 sm:mt-8 xl:mt-12 pointer-events-none">
                <div
                    class="max-[320px]:w-full max-[360px]:px-1.5 w-fit max-[400px]:px-3 px-4 sm:px-10 bg-[#141414] flex justify-center items-center py-6 border-white border-6 rounded-2xl">
                    <div class="flex gap-1 relative">
                        <div id="${question.id}-1" title="1"
                            class="sm:w-16.5 max-[360px]:w-7.5 w-8.5 h-80 bg-white sm:rounded-b-2xl rounded-b-md rounded-t-xs flex justify-center items-end text-gray-950 hover:text-main pianoMainButtonShadow piano__button"><span
                                class="mb-4 text-sm sm:text-base">C</span>
                        </div>
                        <div id="${question.id}-3" title="3"
                            class="sm:w-16.5 max-[360px]:w-7.5 w-8.5 h-80 bg-white sm:rounded-b-2xl rounded-b-md rounded-t-xs flex justify-center items-end text-gray-950 hover:text-main pianoMainButtonShadow piano__button"><span
                                class="mb-4 text-sm sm:text-base">D</span>
                        </div>
                        <div id="${question.id}-5" title="5"
                            class="sm:w-16.5 max-[360px]:w-7.5 w-8.5 h-80 bg-white sm:rounded-b-2xl rounded-b-md rounded-t-xs flex justify-center items-end text-gray-950 hover:text-main pianoMainButtonShadow piano__button"><span
                                class="mb-4 text-sm sm:text-base">E</span>
                        </div>
                        <div id="${question.id}-6" title="6"
                            class="sm:w-16.5 max-[360px]:w-7.5 w-8.5 h-80 bg-white sm:rounded-b-2xl rounded-b-md rounded-t-xs flex justify-center items-end text-gray-950 hover:text-main pianoMainButtonShadow piano__button"><span
                                class="mb-4 text-sm sm:text-base">F</span>
                        </div>
                        <div id="${question.id}-8" title="8"
                            class="sm:w-16.5 max-[360px]:w-7.5 w-8.5 h-80 bg-white sm:rounded-b-2xl rounded-b-md rounded-t-xs flex justify-center items-end text-gray-950 hover:text-main pianoMainButtonShadow piano__button"><span
                                class="mb-4 text-sm sm:text-base">G</span>
                        </div>
                        <div id="${question.id}-10" title="10"
                            class="sm:w-16.5 max-[360px]:w-7.5 w-8.5 h-80 bg-white sm:rounded-b-2xl rounded-b-md rounded-t-xs flex justify-center items-end text-gray-950 hover:text-main pianoMainButtonShadow piano__button"><span
                                class="mb-4 text-sm sm:text-base">A</span>
                        </div>
                        <div id="${question.id}-12" title="12"
                            class="sm:w-16.5 max-[360px]:w-7.5 w-8.5 h-80 bg-white sm:rounded-b-2xl rounded-b-md rounded-t-xs flex justify-center items-end text-gray-950 hover:text-main pianoMainButtonShadow piano__button"><span
                                class="mb-4 text-sm sm:text-base">B</span>
                        </div>
                        <div id="${question.id}-2" title="2"
                            class="absolute top-0 max-[360px]:ml-4 ml-4.5 sm:ml-11 sm:w-12 w-9 max-[360px]:w-8 h-45 bg-neutral-950 rounded-b-md flex justify-center items-end text-gray-200 hover:text-main rounded-t-xs pianoPrimaryButtonShadow piano__button"><span
                                class="mb-4 text-sm sm:text-base">C#${quizId == 2 || quizId == 4 ? "(Db)" : ""}</span></div>
                        <div id="${question.id}-4" title="4"
                            class="absolute top-0 max-[360px]:ml-12.5 ml-14 sm:ml-29 sm:w-12 w-9 max-[360px]:w-8 h-45 bg-neutral-950 rounded-b-md flex justify-center items-end text-gray-200 hover:text-main rounded-t-xs pianoPrimaryButtonShadow piano__button"><span
                                class="mb-4 text-sm sm:text-base">D#${quizId == 2 || quizId == 4 ? "(Eb)" : ""}</span></div>
                        <div id="${question.id}-7" title="7"
                            class="absolute top-0 max-[360px]:ml-29.5 ml-33 sm:ml-63.5 sm:w-12 w-9 max-[360px]:w-8 h-45 bg-neutral-950 rounded-b-md flex justify-center items-end text-gray-200 hover:text-main rounded-t-xs pianoPrimaryButtonShadow piano__button"><span
                                class="mb-4 text-sm sm:text-base">F#${quizId == 2 || quizId == 4 ? "(Gb)" : ""}</span></div>
                        <div id="${question.id}-9" title="9"
                            class="absolute top-0 max-[360px]:ml-38 ml-42.5 sm:ml-81.5 sm:w-12 w-9 max-[360px]:w-8 h-45 bg-neutral-950 rounded-b-md flex justify-center items-end text-gray-200 hover:text-main rounded-t-xs pianoPrimaryButtonShadow piano__button"><span
                                class="mb-4 text-sm sm:text-base">G#${quizId == 2 || quizId == 4 ? "(Ab)" : ""}</span></div>
                        <div id="${question.id}-11" title="11"
                            class="absolute top-0 max-[360px]:ml-47 ml-52 sm:ml-99 sm:w-12 w-9 max-[360px]:w-8 h-45 bg-neutral-950 rounded-b-md flex justify-center items-end text-gray-200 hover:text-main rounded-t-xs pianoPrimaryButtonShadow piano__button"><span
                                class="mb-4 text-sm sm:text-base">A#${quizId == 2 || quizId == 4 ? "(Bb)" : ""}</span></div>
                    </div>
                </div>
                <div class="w-full text-center mt-3">
                    <button id="removeAnswer" data-question-type="piano" name=${question.id} class="hidden bg-red-500 text-neutral-900 px-3 py-1.5 text-base lg:text-lg font-semibold border-none rounded-2xl cursor-pointer hover:bg-red-600 focus:ring-4 ring-red-700 outline-none transition-all duration-300" title="حذف جواب">حذف جواب </button>
                </div>
            </section>`
        }
        //*Add section closing tag
        DOM += `</section>`
        //*Add complete answer
        if (question.answer.descriptiveAnswer != "" && question.answer.descriptiveAnswer != " ") {
            DOM += `<section dir="rtl" class="px-3 sm:px-5 pt-4 flex flex-col justify-center border-t pb-3 border-gray-400">
                            <h3 class="m-0 p-0">پاسخ تشریحی:</h3>
                            <p class="m-0 leading-6">${question.answer.descriptiveAnswer}</p>
                        </section>`
        }
        //*Add article closing tag
        DOM += `</article>`
    })
    //*Fill detailed section tag with DOM
    document.getElementById("detailed").innerHTML = DOM
    //*Show user answer and correct answer on piano
    questions.map((question) => {
        //*Check question's type
        if (question.type == "piano") {
            //*Get results
            let [correctAnswer, userAnswer] = completeResult[question.id - 1].split('-')
            //*Set key id instead of key text
            correctAnswer = GetPianoKeyId(correctAnswer)
            userAnswer = GetPianoKeyId(userAnswer)
            //*Handle color of piano buttons
            if (correctAnswer == userAnswer || userAnswer == 0) {
                const goalKey = document.getElementById(`${question.id}-${correctAnswer}`)
                goalKey.classList.remove("bg-neutral-950", "bg-white")
                goalKey.classList.add("bg-green-400")
            }
            else if(correctAnswer != userAnswer){
                const wrongKey = document.getElementById(`${question.id}-${userAnswer}`)
                const correctKey = document.getElementById(`${question.id}-${correctAnswer}`)
                wrongKey.classList.remove("bg-neutral-950", "bg-white")
                correctKey.classList.remove("bg-neutral-950", "bg-white")
                wrongKey.classList.add("bg-red-400")
                correctKey.classList.add("bg-green-400")
            }
        }
    })
}
//*Get id of the key of piano
function GetPianoKeyId(keyText) {
    const easyModeText = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"]
    const hardModeText = ["C", "C#(Db)", "D", "D#(Eb)", "E", "F", "F#(Gb)", "G", "G#(Ab)", "A", "A#(Bb)", "B"]
    if (keyText == 0) {
        return 0
    }
    for (let i = 0; i <= 11; i++) {
        if (easyModeText[i] == keyText) {
            return i + 1
        }
    }
    for (let i = 0; i <= 11; i++) {
        if (hardModeText[i] == keyText) {
            return i + 1
        }
    }
}