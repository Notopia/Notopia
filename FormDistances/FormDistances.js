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
    else {
        resultImage.src = "";
    }
}
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const selectedSection = document.getElementById("distancesPart");
(function () {
    selectedSection.classList.add("selectedDiv");
})();