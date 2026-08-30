//*Get quiz's id
const paramsString = window.location.search
const searchParams = new URLSearchParams(paramsString)
const quizId = searchParams.get("id")
//*Set page title
const title = document.getElementById("pageTitle")
if(quizId == 1){
    title.innerHTML = "Notopia - کوییز سطح آسان فواصل موسیقیایی"
}
else if(quizId == 2){
    title.innerHTML = "Notopia - کوییز سطح دشوار فواصل موسیقیایی"
}
else if(quizId == 3){
    title.innerHTML = "Notopia - کوییز سطح آسان گام‌های موسیقیایی"
}
else if(quizId == 4){
    title.innerHTML = "Notopia - کوییز سطح دشوار گام‌های موسیقیایی"
}