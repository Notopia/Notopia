import { DistancesEasy } from "../Questions/DistancesEasy.js"
import { DistancesHard } from "../Questions/DistancesHard.js"
import { StepsEasy } from "../Questions/StepsEasy.js"
import { StepsHard } from "../Questions/StepsHard.js"

//*Get quiz's id
const paramsString = window.location.search
const searchParams = new URLSearchParams(paramsString)
const quizId = searchParams.get("id")
//*Get questions and level of the quiz and
let questions = null
let quizLevel = null
switch (quizId) {
    case "1":
        questions = DistancesEasy.questions
        quizLevel = "easy"
        break;
    case "2":
        questions = DistancesHard.questions
        quizLevel = "hard"
        break;
    case "3":
        questions = StepsEasy.questions
        quizLevel = "easy"
        break;
    case "4":
        questions = StepsHard.questions
        quizLevel = "hard"
        break;
}
//*Create a DOM for include in main tag
let DOM = ""
questions.map((question) => {
    let article = `<article class="w-full bg-white py-4 2xl:w-350 rounded-xl">`
    article += `<section dir="rtl" class="px-3 sm:px-5">
                <span class="font-bold text-lg md:text-xl xl:text-2xl">سوال ${question.id}:</span>
                <span class="text-base md:text-lg">
                    ${question.question}
                </span>
            </section>`
    if (question.type == "test") {
        article += `<section dir="rtl" class="w-full grid grid-cols-1 lg:grid-cols-2 lg:place-content-center space-y-1.5 px-3 text-base xl:text-lg mt-3 sm:mt-5 xl:mt-7">
                <label class="flex gap-0.5 items-center">
                    <input type="radio" title="option1" name="question1" class="w-fit h-fit mb-1">
                    <div>
                        <span>1)</span>
                        <span>${question.options[1]}</span>
                    </div>
                </label>
                <label class="flex gap-0.5 items-center">
                    <input type="radio" title="option1" name="question1" class="w-fit h-fit mb-1">
                    <div>
                        <span>2)</span>
                        <span>${question.options[2]}</span>
                    </div>
                </label>
                <label class="flex gap-0.5 items-center">
                    <input type="radio" title="option1" name="question1" class="w-fit h-fit mb-1">
                    <div>
                        <span>3)</span>
                        <span>${question.options[3]}</span>
                    </div>
                </label>
                <label class="flex gap-0.5 items-center">
                    <input type="radio" title="option1" name="question1" class="w-fit h-fit mb-1">
                    <div>
                        <span>4)</span>
                        <span>${question.options[4]}</span>
                    </div>
                </label>
            </section>`
    }
    else if(question.type == "piano") {
        article += `<section class="w-full flex items-center justify-center mt-3 sm:mt-8 xl:mt-12">
                <div
                    class="max-[360px]:w-full w-fit max-[400px]:px-3 px-8 sm:px-10 bg-[#141414] flex justify-center items-center py-6 border-white border-6 rounded-2xl">
                    <div class="flex gap-1 relative">
                        <div id="1"
                            class="sm:w-18 max-[360px]:w-9 w-10 h-80 bg-white sm:rounded-b-2xl rounded-b-md rounded-t-xs flex justify-center items-end text-gray-950 hover:text-main pianoMainButtonShadow"
                            onmousedown="MainButtonMousedownHandler(event)" onmouseup="MainButtonMouseupHandler(event)"
                            onmouseleave="MainButtonMouseupHandler(event)"
                            onpointerdown="MainButtonMousedownHandler(event)"
                            onpointerup="MainButtonMouseupHandler(event)"
                            onpointerleave="MainButtonMouseupHandler(event)"
                            onpointercancel="MainButtonMouseupHandler(event)"><span
                                class="mb-4 text-sm sm:text-base">C</span>
                        </div>
                        <div id="3"
                            class="sm:w-18 max-[360px]:w-9 w-10 h-80 bg-white sm:rounded-b-2xl rounded-b-md rounded-t-xs flex justify-center items-end text-gray-950 hover:text-main pianoMainButtonShadow"
                            onmousedown="MainButtonMousedownHandler(event)" onmouseup="MainButtonMouseupHandler(event)"
                            onmouseleave="MainButtonMouseupHandler(event)"
                            onpointerdown="MainButtonMousedownHandler(event)"
                            onpointerup="MainButtonMouseupHandler(event)"
                            onpointerleave="MainButtonMouseupHandler(event)"
                            onpointercancel="MainButtonMouseupHandler(event)"><span
                                class="mb-4 text-sm sm:text-base">D</span>
                        </div>
                        <div id="5"
                            class="sm:w-18 max-[360px]:w-9 w-10 h-80 bg-white sm:rounded-b-2xl rounded-b-md rounded-t-xs flex justify-center items-end text-gray-950 hover:text-main pianoMainButtonShadow"
                            onmousedown="MainButtonMousedownHandler(event)" onmouseup="MainButtonMouseupHandler(event)"
                            onmouseleave="MainButtonMouseupHandler(event)"
                            onpointerdown="MainButtonMousedownHandler(event)"
                            onpointerup="MainButtonMouseupHandler(event)"
                            onpointerleave="MainButtonMouseupHandler(event)"
                            onpointercancel="MainButtonMouseupHandler(event)"><span
                                class="mb-4 text-sm sm:text-base">E</span>
                        </div>
                        <div id="6"
                            class="sm:w-18 max-[360px]:w-9 w-10 h-80 bg-white sm:rounded-b-2xl rounded-b-md rounded-t-xs flex justify-center items-end text-gray-950 hover:text-main pianoMainButtonShadow"
                            onmousedown="MainButtonMousedownHandler(event)" onmouseup="MainButtonMouseupHandler(event)"
                            onmouseleave="MainButtonMouseupHandler(event)"
                            onpointerdown="MainButtonMousedownHandler(event)"
                            onpointerup="MainButtonMouseupHandler(event)"
                            onpointerleave="MainButtonMouseupHandler(event)"
                            onpointercancel="MainButtonMouseupHandler(event)"><span
                                class="mb-4 text-sm sm:text-base">F</span>
                        </div>
                        <div id="8"
                            class="sm:w-18 max-[360px]:w-9 w-10 h-80 bg-white sm:rounded-b-2xl rounded-b-md rounded-t-xs flex justify-center items-end text-gray-950 hover:text-main pianoMainButtonShadow"
                            onmousedown="MainButtonMousedownHandler(event)" onmouseup="MainButtonMouseupHandler(event)"
                            onmouseleave="MainButtonMouseupHandler(event)"
                            onpointerdown="MainButtonMousedownHandler(event)"
                            onpointerup="MainButtonMouseupHandler(event)"
                            onpointerleave="MainButtonMouseupHandler(event)"
                            onpointercancel="MainButtonMouseupHandler(event)"><span
                                class="mb-4 text-sm sm:text-base">G</span>
                        </div>
                        <div id="10"
                            class="sm:w-18 max-[360px]:w-9 w-10 h-80 bg-white sm:rounded-b-2xl rounded-b-md rounded-t-xs flex justify-center items-end text-gray-950 hover:text-main pianoMainButtonShadow"
                            onmousedown="MainButtonMousedownHandler(event)" onmouseup="MainButtonMouseupHandler(event)"
                            onmouseleave="MainButtonMouseupHandler(event)"
                            onpointerdown="MainButtonMousedownHandler(event)"
                            onpointerup="MainButtonMouseupHandler(event)"
                            onpointerleave="MainButtonMouseupHandler(event)"
                            onpointercancel="MainButtonMouseupHandler(event)"><span
                                class="mb-4 text-sm sm:text-base">A</span>
                        </div>
                        <div id="12"
                            class="sm:w-18 max-[360px]:w-9 w-10 h-80 bg-white sm:rounded-b-2xl rounded-b-md rounded-t-xs flex justify-center items-end text-gray-950 hover:text-main pianoMainButtonShadow"
                            onmousedown="MainButtonMousedownHandler(event)" onmouseup="MainButtonMouseupHandler(event)"
                            onmouseleave="MainButtonMouseupHandler(event)"
                            onpointerdown="MainButtonMousedownHandler(event)"
                            onpointerup="MainButtonMouseupHandler(event)"
                            onpointerleave="MainButtonMouseupHandler(event)"
                            onpointercancel="MainButtonMouseupHandler(event)"><span
                                class="mb-4 text-sm sm:text-base">B</span>
                        </div>
                        <div id="2"
                            class="absolute top-0 max-[360px]:ml-5 0 ml-6 sm:ml-12.5 sm:w-12 w-9 h-45 bg-neutral-950 rounded-b-md flex justify-center items-end text-gray-200 hover:text-main rounded-t-xs pianoPrimaryButtonShadow"
                            onmousedown="PrimaryButtonMousedownHandler(event)"
                            onmouseup="PrimaryButtonMouseupHandler(event)"
                            onmouseleave="PrimaryButtonMouseupHandler(event)"
                            onpointerdown="PrimaryButtonMousedownHandler(event)"
                            onpointerup="PrimaryButtonMouseupHandler(event)"
                            onpointerleave="PrimaryButtonMouseupHandler(event)"
                            onpointercancel="PrimaryButtonMouseupHandler(event)"><span
                                class="mb-4 text-sm sm:text-base">C#${quizLevel == "hard" ? "(Db)" : ""}</span></div>
                        <div id="4"
                            class="absolute top-0 max-[360px]:ml-15 ml-17 sm:ml-31.5 sm:w-12 w-9 h-45 bg-neutral-950 rounded-b-md flex justify-center items-end text-gray-200 hover:text-main rounded-t-xs pianoPrimaryButtonShadow"
                            onmousedown="PrimaryButtonMousedownHandler(event)"
                            onmouseup="PrimaryButtonMouseupHandler(event)"
                            onmouseleave="PrimaryButtonMouseupHandler(event)"
                            onpointerdown="PrimaryButtonMousedownHandler(event)"
                            onpointerup="PrimaryButtonMouseupHandler(event)"
                            onpointerleave="PrimaryButtonMouseupHandler(event)"
                            onpointercancel="PrimaryButtonMouseupHandler(event)"><span
                                class="mb-4 text-sm sm:text-base">D#${quizLevel == "hard" ? "(Eb)" : ""}</span></div>
                        <div id="7"
                            class="absolute top-0 max-[360px]:ml-35 ml-39 sm:ml-69.5 sm:w-12 w-9 h-45 bg-neutral-950 rounded-b-md flex justify-center items-end text-gray-200 hover:text-main rounded-t-xs pianoPrimaryButtonShadow"
                            onmousedown="PrimaryButtonMousedownHandler(event)"
                            onmouseup="PrimaryButtonMouseupHandler(event)"
                            onmouseleave="PrimaryButtonMouseupHandler(event)"
                            onpointerdown="PrimaryButtonMousedownHandler(event)"
                            onpointerup="PrimaryButtonMouseupHandler(event)"
                            onpointerleave="PrimaryButtonMouseupHandler(event)"
                            onpointercancel="PrimaryButtonMouseupHandler(event)"><span
                                class="mb-4 text-sm sm:text-base">F#${quizLevel == "hard" ? "(Gb)" : ""}</span></div>
                        <div id="9"
                            class="absolute top-0 max-[360px]:ml-45 ml-50 sm:ml-88.5 sm:w-12 w-9 h-45 bg-neutral-950 rounded-b-md flex justify-center items-end text-gray-200 hover:text-main rounded-t-xs pianoPrimaryButtonShadow"
                            onmousedown="PrimaryButtonMousedownHandler(event)"
                            onmouseup="PrimaryButtonMouseupHandler(event)"
                            onmouseleave="PrimaryButtonMouseupHandler(event)"
                            onpointerdown="PrimaryButtonMousedownHandler(event)"
                            onpointerup="PrimaryButtonMouseupHandler(event)"
                            onpointerleave="PrimaryButtonMouseupHandler(event)"
                            onpointercancel="PrimaryButtonMouseupHandler(event)"><span
                                class="mb-4 text-sm sm:text-base">G#${quizLevel == "hard" ? "(Ab)" : ""}</span></div>
                        <div id="11"
                            class="absolute top-0 max-[360px]:ml-55 ml-61 sm:ml-108 sm:w-12 w-9 h-45 bg-neutral-950 rounded-b-md flex justify-center items-end text-gray-200 hover:text-main rounded-t-xs pianoPrimaryButtonShadow"
                            onmousedown="PrimaryButtonMousedownHandler(event)"
                            onmouseup="PrimaryButtonMouseupHandler(event)"
                            onmouseleave="PrimaryButtonMouseupHandler(event)"
                            onpointerdown="PrimaryButtonMousedownHandler(event)"
                            onpointerup="PrimaryButtonMouseupHandler(event)"
                            onpointerleave="PrimaryButtonMouseupHandler(event)"
                            onpointercancel="PrimaryButtonMouseupHandler(event)"><span
                                class="mb-4 text-sm sm:text-base">A#${quizLevel == "hard" ? "(Bb)" : ""}</span></div>
                    </div>
                </div>
            </section>`
    }
    article += `</article>`
    DOM += article
})
//*Add articles to main tag
const main = document.querySelector("main")
main.innerHTML = DOM