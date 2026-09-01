import { DistancesEasy } from "../Questions/DistancesEasy.js"
import { DistancesHard } from "../Questions/DistancesHard.js"
import { StepsEasy } from "../Questions/StepsEasy.js"
import { StepsHard } from "../Questions/StepsHard.js"

//*Select timer DOM
const min = document.getElementById("min")
const sec = document.getElementById("sec")
//*Get quiz's id
const paramsString = window.location.search
const searchParams = new URLSearchParams(paramsString)
const quizId = searchParams.get("id")
//*Get time of the quiz
let quizTime = null
switch (quizId) {
    case "1":
        quizTime = DistancesEasy.time
        break;
    case "2":
        quizTime = DistancesHard.time
        break;
    case "3":
        quizTime = StepsEasy.time
        break;
    case "4":
        quizTime = StepsHard.time
        break;
}
//*Handle timer
//*Primary set for DOM
let m = quizTime / 60
let s = quizTime % 60
min.innerHTML = m.toString().padStart(2, "0")
sec.innerHTML = s.toString().padStart(2, "0")
function TimerTick() {
    s -= 1
    if (s == 0 && m == 0) {
        alert("زمان شما به پایان رسید.")
        window.location.href = "/Quizzes/quiz/answer-sheet/"
    }
    else if (s == -1) {
        m -= 1
        s = 59
    }
    //*Sync time with DOM
    min.innerHTML = m.toString().padStart(2, "0")
    sec.innerHTML = s.toString().padStart(2, "0")
}
TimerTick()
setInterval(TimerTick, 1);