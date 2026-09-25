function GoToQuizPage(id) {
    window.location.href = `/Quizzes/quiz?id=${id}`
}
//!-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const selectedSectionHeader = document.querySelector(".header__sections__quizzes");
const selectedSectionDropdown = document.querySelector("#quizzesPart");
(function () {
    selectedSectionHeader.classList.add("selectedDiv");
    selectedSectionDropdown.classList.add("selectedDiv");
})();