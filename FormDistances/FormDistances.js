let optionBig = document.getElementById("selectKind").options;
function changeSelectOptions() {
    let selectDistance = document.getElementById("selectDistance").value;
    if (selectDistance == "first" || selectDistance == "forth" || selectDistance == "fifth" || selectDistance == "eighth") {
        optionBig[1].text = "درست";
    }
    else if (selectDistance == "second" || selectDistance == "third" || selectDistance == "sixth" || selectDistance == "seventh") {
        optionBig[1].text = "بزرگ";
    }
}
let resultImage = document.getElementById("resultImage");
function setThePicture() {
    let selectDistance2 = document.getElementById("selectDistance").value;
    let selectKind = document.getElementById("selectKind").value;
    if (selectDistance2 == "second" && selectKind == "little") {
        resultImage.src = "../images/LittleSecond.png";
    }
    else if (selectDistance2 == "second" && selectKind == "completeOrBig") {
        resultImage.src = "../images/BigSecond.png";
    }
    else if (selectDistance2 == "second" && selectKind == "added") {
        resultImage.src = "../images/AddedSecond.png";
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
    else {
        resultImage.src = "";
    }
}
window.onload = function AlwaysCheck() {
    //Always Check
    let selectDistance = document.getElementById("selectDistance").value;
    if (selectDistance == "first" || selectDistance == "forth" || selectDistance == "fifth" || selectDistance == "eighth") {
        optionBig[1].text = "درست";
    }
    else if (selectDistance == "second" || selectDistance == "third" || selectDistance == "sixth" || selectDistance == "seventh") {
        optionBig[1].text = "بزرگ";
    }
    let selectDistance2 = document.getElementById("selectDistance").value;
    let selectKind = document.getElementById("selectKind").value;
    if (selectDistance2 == "second" && selectKind == "little") {
        resultImage.src = "../images/LittleSecond.png";
    }
    else if (selectDistance2 == "second" && selectKind == "completeOrBig") {
        resultImage.src = "../images/BigSecond.png";
    }
    else if (selectDistance2 == "second" && selectKind == "added") {
        resultImage.src = "../images/AddedSecond.png";
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
const aboutBox = document.getElementById("aboutBox");
const root = document.getElementById("root");
aboutButton.onclick = function () {
    aboutBox.classList.remove("main__about__hide");
    aboutBox.classList.add("main__about__show");
    root.classList.add("hidlessRoot");
    header.classList.add("hidlessRoot");
    footer.classList.add("hidlessRoot");
}
// Cancel showing about box
const header = document.getElementById("header");
const footer = document.getElementById("footer");
function CnacelShowingAboutBox() {
    aboutBox.classList.add("main__about__hide");
    aboutBox.classList.remove("main__about__show");
    root.classList.remove("hidlessRoot");
    header.classList.remove("hidlessRoot");
    footer.classList.remove("hidlessRoot");
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
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const selectedSection = document.getElementById("distancesPart");
(function () {
    selectedSection.classList.add("selectedDiv");
})();