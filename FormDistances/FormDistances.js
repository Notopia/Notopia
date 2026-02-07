function changeSelectOptions() {
    let optionBig = document.getElementById("selectKind").options;
    let selectKind = document.getElementById("selectKind");
    let selectCompleteOrBigKind = document.createElement("option");
    let selectLittleKind = document.createElement("option");
    let selectAddedKind = document.createElement("option");
    let selectReducedKind = document.createElement("option");
    let selectDistance = document.getElementById("selectDistance").value;
    selectLittleKind.text = "کوچک"
    selectAddedKind.text = "افزوده"
    selectReducedKind.text = "کاسته"
    if (selectDistance == "first" || selectDistance == "forth" || selectDistance == "fifth" || selectDistance == "eighth") {
        selectKind.innerHTML = '<option value="completeOrBig">درست</option><option value="reduced">کاسته</option><option value="added">افزوده</option>';
    }
    else if (selectDistance == "second" || selectDistance == "third" || selectDistance == "sixth" || selectDistance == "seventh") {
        selectKind.innerHTML = '<option value="little">کوچک</option><option value="completeOrBig">بزرگ</option><option value="reduced">کاسته</option><option value="added">افزوده</option>';
    }
}
let resultImage = document.getElementById("resultImage");
function setThePicture() {
    let selectDistance2 = document.getElementById("selectDistance").value;
    let selectKind = document.getElementById("selectKind").value;
    if (selectDistance2 == "first" && selectKind == "reduced") {
        resultImage.src = "../images/ReducedFirst.jpeg";
    }
    else if (selectDistance2 == "first" && selectKind == "added") {
        resultImage.src = "../images/AddedFirst.jpeg";
    }
    else if (selectDistance2 == "first" && selectKind == "completeOrBig") {
        resultImage.src = "../images/CompleteFirst.jpeg";
    }
    else if (selectDistance2 == "second" && selectKind == "little") {
        resultImage.src = "../images/LittleSecond.png";
    }
    else if (selectDistance2 == "second" && selectKind == "completeOrBig") {
        resultImage.src = "../images/BigSecond.png";
    }
    else if (selectDistance2 == "second" && selectKind == "added") {
        resultImage.src = "../images/AddedSecond.png";
    }
    else if (selectDistance2 == "second" && selectKind == "reduced") {
        resultImage.src = "../images/ReducedSecond.jpeg";
    }
    else if (selectDistance2 == "third" && selectKind == "completeOrBig") {
        resultImage.src = "../images/BigThird.png";
    }
    else if (selectDistance2 == "third" && selectKind == "added") {
        resultImage.src = "../images/AddedThird.png";
    }
    else if (selectDistance2 == "third" && selectKind == "little") {
        resultImage.src = "../images/LittleThird.jpeg";
    }
    else if (selectDistance2 == "third" && selectKind == "reduced") {
        resultImage.src = "../images/ReducedThird.jpeg";
    }
    else if (selectDistance2 == "forth" && selectKind == "added") {
        resultImage.src = "../images/AddedForth.jpg";
    }
    else if (selectDistance2 == "forth" && selectKind == "completeOrBig") {
        resultImage.src = "../images/CompleteForth.jpg";
    }
    else if (selectDistance2 == "forth" && selectKind == "reduced") {
        resultImage.src = "../images/ReducedForth.jpeg";
    }
    else if (selectDistance2 == "fifth" && selectKind == "completeOrBig") {
        resultImage.src = "../images/CompleteFifth.jpeg";
    }
    else if (selectDistance2 == "fifth" && selectKind == "added") {
        resultImage.src = "../images/AddedFifth.jpeg";
    }
    else if (selectDistance2 == "fifth" && selectKind == "reduced") {
        resultImage.src = "../images/ReducedFifth.jpeg";
    }
    else if (selectDistance2 == "sixth" && selectKind == "little") {
        resultImage.src = "../images/LittleSixth.jpeg";
    }
    else if (selectDistance2 == "sixth" && selectKind == "completeOrBig") {
        resultImage.src = "../images/BigSixth.jpeg";
    }
    else if (selectDistance2 == "sixth" && selectKind == "reduced") {
        resultImage.src = "../images/ReducedSixth.jpeg";
    }
    else if (selectDistance2 == "sixth" && selectKind == "added") {
        resultImage.src = "../images/AddedSixth.jpeg";
    }
    else if (selectDistance2 == "seventh" && selectKind == "little") {
        resultImage.src = "../images/LittleSeventh.jpeg";
    }
    else if (selectDistance2 == "seventh" && selectKind == "completeOrBig") {
        resultImage.src = "../images/BigSeventh.jpeg";
    }
    else if (selectDistance2 == "seventh" && selectKind == "reduced") {
        resultImage.src = "../images/ReducedSeventh.jpeg";
    }
    else if (selectDistance2 == "seventh" && selectKind == "added") {
        resultImage.src = "../images/AddedSeventh.jpeg";
    }
    else if (selectDistance2 == "eighth" && selectKind == "completeOrBig") {
        resultImage.src = "../images/CompleteEighth.jpeg";
    }
    else if (selectDistance2 == "eighth" && selectKind == "added") {
        resultImage.src = "../images/AddedEighth.jpeg";
    }
    else if (selectDistance2 == "eighth" && selectKind == "reduced") {
        resultImage.src = "../images/ReducedEighth.jpeg";
    }
    else {
        resultImage.src = "";
    }
}
function AlwaysCheck() {
    //Always Check
    let selectDistance2 = document.getElementById("selectDistance").value;
    let selectKind = document.getElementById("selectKind").value;
    if (selectDistance2 == "first" && selectKind == "reduced") {
        resultImage.src = "../images/ReducedFirst.jpeg";
    }
    else if (selectDistance2 == "first" && selectKind == "added") {
        resultImage.src = "../images/AddedFirst.jpeg";
    }
    else if (selectDistance2 == "first" && selectKind == "completeOrBig") {
        resultImage.src = "../images/CompleteFirst.jpeg";
    }
    else if (selectDistance2 == "second" && selectKind == "little") {
        resultImage.src = "../images/LittleSecond.png";
    }
    else if (selectDistance2 == "second" && selectKind == "completeOrBig") {
        resultImage.src = "../images/BigSecond.png";
    }
    else if (selectDistance2 == "second" && selectKind == "added") {
        resultImage.src = "../images/AddedSecond.png";
    }
    else if (selectDistance2 == "second" && selectKind == "reduced") {
        resultImage.src = "../images/ReducedSecond.jpeg";
    }
    else if (selectDistance2 == "third" && selectKind == "completeOrBig") {
        resultImage.src = "../images/BigThird.png";
    }
    else if (selectDistance2 == "third" && selectKind == "added") {
        resultImage.src = "../images/AddedThird.png";
    }
    else if (selectDistance2 == "third" && selectKind == "little") {
        resultImage.src = "../images/LittleThird.jpeg";
    }
    else if (selectDistance2 == "third" && selectKind == "reduced") {
        resultImage.src = "../images/ReducedThird.jpeg";
    }
    else if (selectDistance2 == "forth" && selectKind == "added") {
        resultImage.src = "../images/AddedForth.jpg";
    }
    else if (selectDistance2 == "forth" && selectKind == "completeOrBig") {
        resultImage.src = "../images/CompleteForth.jpg";
    }
    else if (selectDistance2 == "forth" && selectKind == "reduced") {
        resultImage.src = "../images/ReducedForth.jpeg";
    }
    else if (selectDistance2 == "fifth" && selectKind == "completeOrBig") {
        resultImage.src = "../images/CompleteFifth.jpeg";
    }
    else if (selectDistance2 == "fifth" && selectKind == "added") {
        resultImage.src = "../images/AddedFifth.jpeg";
    }
    else if (selectDistance2 == "fifth" && selectKind == "reduced") {
        resultImage.src = "../images/ReducedFifth.jpeg";
    }
    else if (selectDistance2 == "sixth" && selectKind == "little") {
        resultImage.src = "../images/LittleSixth.jpeg";
    }
    else if (selectDistance2 == "sixth" && selectKind == "completeOrBig") {
        resultImage.src = "../images/BigSixth.jpeg";
    }
    else if (selectDistance2 == "sixth" && selectKind == "reduced") {
        resultImage.src = "../images/ReducedSixth.jpeg";
    }
    else if (selectDistance2 == "sixth" && selectKind == "added") {
        resultImage.src = "../images/AddedSixth.jpeg";
    }
    else if (selectDistance2 == "seventh" && selectKind == "little") {
        resultImage.src = "../images/LittleSeventh.jpeg";
    }
    else if (selectDistance2 == "seventh" && selectKind == "completeOrBig") {
        resultImage.src = "../images/BigSeventh.jpeg";
    }
    else if (selectDistance2 == "seventh" && selectKind == "reduced") {
        resultImage.src = "../images/ReducedSeventh.jpeg";
    }
    else if (selectDistance2 == "seventh" && selectKind == "added") {
        resultImage.src = "../images/AddedSeventh.jpeg";
    }
    else if (selectDistance2 == "eighth" && selectKind == "completeOrBig") {
        resultImage.src = "../images/CompleteEighth.jpeg";
    }
    else if (selectDistance2 == "eighth" && selectKind == "added") {
        resultImage.src = "../images/AddedEighth.jpeg";
    }
    else if (selectDistance2 == "eighth" && selectKind == "reduced") {
        resultImage.src = "../images/ReducedEighth.jpeg";
    }
    else {
        resultImage.src = "";
    }
}
//Hover on about button
const aboutButton = document.getElementById("aboutButton");
const svgFiller = document.getElementById("about-white");
aboutButton.onmouseover = function () {
    svgFiller.classList.add("aboutButtonHover");
}
aboutButton.onmouseout = function () {
    svgFiller.classList.remove("aboutButtonHover");
}
//Click on about button
const header = document.getElementById("header");
const aboutBox = document.getElementById("aboutBox");
const root = document.getElementById("root");
let aboutBoxShowingStatus = false;
aboutButton.onclick = function () {
    aboutBox.classList.remove("main__about__hide");
    aboutBox.classList.add("main__about__show");
    root.classList.add("hidlessRoot");
    header.classList.add("hidlessRoot")
    footer.classList.add("hidlessRoot");
    aboutBoxShowingStatus = true;
}
// Cancel showing about box
const footer = document.getElementById("footer");
function CnacelShowingAboutBox() {
    if (aboutBoxShowingStatus == true) {
        aboutBox.classList.add("main__about__hide");
        aboutBox.classList.remove("main__about__show");
        root.classList.remove("hidlessRoot");
        header.classList.remove("hidlessRoot");
        footer.classList.remove("hidlessRoot");
    }
}
root.addEventListener("click", () => {
    aboutBox.classList.add("main__about__hide");
    aboutBox.classList.remove("main__about__show");
    root.classList.remove("hidlessRoot");
    header.classList.remove("hidlessRoot");
    footer.classList.remove("hidlessRoot");
});
aboutButton.addEventListener("click", (event) => {
    event.stopPropagation();
    aboutBox.classList.remove("main__about__hide");
    aboutBox.classList.add("main__about__show");
    root.classList.add("hidlessRoot");
    header.classList.add("hidlessRoot");
    footer.classList.add("hidlessRoot");
});
function ShowFullscreenNote() {
    const mainImage = document.getElementById("resultImage");
    const fullscreen = document.getElementById("fullscreenNote");
    const header = document.getElementById("header");
    const dropdown = document.getElementById("dropdown");
    const root = document.getElementById("root");
    const aboutBox = document.getElementById("aboutBox");
    const footer = document.getElementById("footer");
    header.style.display = "none";
    dropdown.style.display = "none";
    root.style.display = "none";
    aboutBox.style.display = "none";
    footer.style.display = "none";
    fullscreen.style.display = "flex";
    fullscreen.appendChild(mainImage.cloneNode(true));
    const imgTag = fullscreen.querySelector("img");
    imgTag.id = "";
    imgTag.classList.remove("main__result__image");
}
function CancelShowingFullscreenNoteButton() {
    window.location.href = "./FormDistances.html"
}
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const selectedSection = document.getElementById("distancesPart");
(function () {
    selectedSection.classList.add("selectedDiv");
})();