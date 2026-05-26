const select3 = document.getElementById("select3");
const select4 = document.getElementById("select4").options;
function changeMajorAndMinor() {
    if (event.target.value == "Minor") {
        select4[8].innerHTML = "ر دیز";
        select4[10].innerHTML = "سل دیز";
        select4[11].innerHTML = "لا دیز";
    }
    else if (event.target.value == "Major") {
        select4[8].innerHTML = "می بمل";
        select4[10].innerHTML = "لا بمل";
        select4[11].innerHTML = "سی بمل";
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
    window.location.href = "./Steps.html"
}
//Change step when select changed
function changeSelectHandler() {
    const step = document.getElementById("step");
    const select1 = document.getElementById("select1");
    const select2 = document.getElementById("select2");
    const select3 = document.getElementById("select3");
    const select4 = document.getElementById("select4");
    if (select1.value == "Koromatic" && select2.value == "Tabi'i" && select3.value == "Major" && select4.value == "Do") {
        step.src = "/images/Steps/KTMaDo.jpg";
    }
    else if (select1.value == "Koromatic" && select2.value == "Tabi'i" && select3.value == "Major" && select4.value == "Re") {
        step.src = "/images/Steps/KTMaRe.jpg";
    }
    else if (select1.value == "Koromatic" && select2.value == "Tabi'i" && select3.value == "Major" && select4.value == "Mi") {
        step.src = "/images/Steps/KTMaMi.jpg";
    }
    else if (select1.value == "Koromatic" && select2.value == "Tabi'i" && select3.value == "Major" && select4.value == "Fa") {
        step.src = "/images/Steps/KTMaFa.jpg";
    }
    else if (select1.value == "Koromatic" && select2.value == "Tabi'i" && select3.value == "Major" && select4.value == "Sol") {
        step.src = "/images/Steps/KTMaSol.jpg";
    }
    else if (select1.value == "Koromatic" && select2.value == "Tabi'i" && select3.value == "Major" && select4.value == "La") {
        step.src = "/images/Steps/KTMaLa.jpg";
    }
    else if (select1.value == "Koromatic" && select2.value == "Tabi'i" && select3.value == "Major" && select4.value == "Si") {
        step.src = "/images/Steps/KTMaSi.jpg";
    }
    else if (select1.value == "Koromatic" && select2.value == "Tabi'i" && select3.value == "Major" && select4.value == "DoDies") {
        step.src = "/images/Steps/KTMaDoDies.jpg";
    }
    else if (select1.value == "Koromatic" && select2.value == "Tabi'i" && select3.value == "Major" && select4.value == "MiBemalOrReDies") {
        step.src = "/images/Steps/KTMaMiBemal.jpeg";
    }
    else if (select1.value == "Koromatic" && select2.value == "Tabi'i" && select3.value == "Major" && select4.value == "FaDies") {
        step.src = "/images/Steps/KTMaFaDies.jpg";
    }
    else if (select1.value == "Koromatic" && select2.value == "Tabi'i" && select3.value == "Major" && select4.value == "LaBemalOrSolDies") {
        step.src = "/images/Steps/KTMaLaBemal.jpeg";
    }
    else if (select1.value == "Koromatic" && select2.value == "Tabi'i" && select3.value == "Major" && select4.value == "SiBemalOrLaDies") {
        step.src = "/images/Steps/KTMaSiBemal.jpg";
    }
    else if (select1.value == "Koromatic" && select2.value == "Tabi'i" && select3.value == "Minor" && select4.value == "Do") {
        step.src = "/images/Steps/KTMiDo.png";
    }
    else if (select1.value == "Koromatic" && select2.value == "Tabi'i" && select3.value == "Minor" && select4.value == "Re") {
        step.src = "/images/Steps/KTMiRe.png";
    }
    else if (select1.value == "Koromatic" && select2.value == "Tabi'i" && select3.value == "Minor" && select4.value == "Mi") {
        step.src = "/images/Steps/KTMiMi.png";
    }
    else if (select1.value == "Koromatic" && select2.value == "Tabi'i" && select3.value == "Minor" && select4.value == "Fa") {
        step.src = "/images/Steps/KTMiFa.png";
    }
    else if (select1.value == "Koromatic" && select2.value == "Tabi'i" && select3.value == "Minor" && select4.value == "Sol") {
        step.src = "/images/Steps/KTMiSol.png";
    }
    else if (select1.value == "Koromatic" && select2.value == "Tabi'i" && select3.value == "Minor" && select4.value == "La") {
        step.src = "/images/Steps/KTMiLa.png";
    }
    else if (select1.value == "Koromatic" && select2.value == "Tabi'i" && select3.value == "Minor" && select4.value == "Si") {
        step.src = "/images/Steps/KTMiSi.png";
    }
    else if (select1.value == "Koromatic" && select2.value == "Tabi'i" && select3.value == "Minor" && select4.value == "DoDies") {
        step.src = "/images/Steps/KTMiDoDies.png";
    }
    else if (select1.value == "Koromatic" && select2.value == "Tabi'i" && select3.value == "Minor" && select4.value == "MiBemalOrReDies") {
        step.src = "/images/Steps/KTMiReDies.png";
    }
    else if (select1.value == "Koromatic" && select2.value == "Tabi'i" && select3.value == "Minor" && select4.value == "FaDies") {
        step.src = "/images/Steps/KTMiFaDies.png";
    }
    else if (select1.value == "Koromatic" && select2.value == "Tabi'i" && select3.value == "Minor" && select4.value == "LaBemalOrSolDies") {
        step.src = "/images/Steps/KTMiSolDies.png";
    }
    else if (select1.value == "Koromatic" && select2.value == "Tabi'i" && select3.value == "Minor" && select4.value == "SiBemalOrLaDies") {
        step.src = "/images/Steps/KTMiLaDies.png";
    }
    else {
        step.src = "";
    }
}
//Change step when page reloaded
function AlwaysCheck() {
    const step = document.getElementById("step");
    const select1 = document.getElementById("select1");
    const select2 = document.getElementById("select2");
    const select3 = document.getElementById("select3");
    const select4 = document.getElementById("select4");
    if (select1.value == "Koromatic" && select2.value == "Tabi'i" && select3.value == "Major" && select4.value == "Do") {
        step.src = "/images/Steps/KTMaDo.jpg";
    }
    else if (select1.value == "Koromatic" && select2.value == "Tabi'i" && select3.value == "Major" && select4.value == "Re") {
        step.src = "/images/Steps/KTMaRe.jpg";
    }
    else if (select1.value == "Koromatic" && select2.value == "Tabi'i" && select3.value == "Major" && select4.value == "Mi") {
        step.src = "/images/Steps/KTMaMi.jpg";
    }
    else if (select1.value == "Koromatic" && select2.value == "Tabi'i" && select3.value == "Major" && select4.value == "Fa") {
        step.src = "/images/Steps/KTMaFa.jpg";
    }
    else if (select1.value == "Koromatic" && select2.value == "Tabi'i" && select3.value == "Major" && select4.value == "Sol") {
        step.src = "/images/Steps/KTMaSol.jpg";
    }
    else if (select1.value == "Koromatic" && select2.value == "Tabi'i" && select3.value == "Major" && select4.value == "La") {
        step.src = "/images/Steps/KTMaLa.jpg";
    }
    else if (select1.value == "Koromatic" && select2.value == "Tabi'i" && select3.value == "Major" && select4.value == "Si") {
        step.src = "/images/Steps/KTMaSi.jpg";
    }
    else if (select1.value == "Koromatic" && select2.value == "Tabi'i" && select3.value == "Major" && select4.value == "DoDies") {
        step.src = "/images/Steps/KTMaDoDies.jpg";
    }
    else if (select1.value == "Koromatic" && select2.value == "Tabi'i" && select3.value == "Major" && select4.value == "MiBemalOrReDies") {
        step.src = "/images/Steps/KTMaMiBemal.jpeg";
    }
    else if (select1.value == "Koromatic" && select2.value == "Tabi'i" && select3.value == "Major" && select4.value == "FaDies") {
        step.src = "/images/Steps/KTMaFaDies.jpg";
    }
    else if (select1.value == "Koromatic" && select2.value == "Tabi'i" && select3.value == "Major" && select4.value == "LaBemalOrSolDies") {
        step.src = "/images/Steps/KTMaLaBemal.jpeg";
    }
    else if (select1.value == "Koromatic" && select2.value == "Tabi'i" && select3.value == "Major" && select4.value == "SiBemalOrLaDies") {
        step.src = "/images/Steps/KTMaSiBemal.jpg";
    }
    else if (select1.value == "Koromatic" && select2.value == "Tabi'i" && select3.value == "Minor" && select4.value == "Do") {
        step.src = "/images/Steps/KTMiDo.png";
    }
    else if (select1.value == "Koromatic" && select2.value == "Tabi'i" && select3.value == "Minor" && select4.value == "Re") {
        step.src = "/images/Steps/KTMiRe.png";
    }
    else if (select1.value == "Koromatic" && select2.value == "Tabi'i" && select3.value == "Minor" && select4.value == "Mi") {
        step.src = "/images/Steps/KTMiMi.png";
    }
    else if (select1.value == "Koromatic" && select2.value == "Tabi'i" && select3.value == "Minor" && select4.value == "Fa") {
        step.src = "/images/Steps/KTMiFa.png";
    }
    else if (select1.value == "Koromatic" && select2.value == "Tabi'i" && select3.value == "Minor" && select4.value == "Sol") {
        step.src = "/images/Steps/KTMiSol.png";
    }
    else if (select1.value == "Koromatic" && select2.value == "Tabi'i" && select3.value == "Minor" && select4.value == "La") {
        step.src = "/images/Steps/KTMiLa.png";
    }
    else if (select1.value == "Koromatic" && select2.value == "Tabi'i" && select3.value == "Minor" && select4.value == "Si") {
        step.src = "/images/Steps/KTMiSi.png";
    }
    else if (select1.value == "Koromatic" && select2.value == "Tabi'i" && select3.value == "Minor" && select4.value == "DoDies") {
        step.src = "/images/Steps/KTMiDoDies.png";
    }
    else if (select1.value == "Koromatic" && select2.value == "Tabi'i" && select3.value == "Minor" && select4.value == "MiBemalOrReDies") {
        step.src = "/images/Steps/KTMiReDies.png";
    }
    else if (select1.value == "Koromatic" && select2.value == "Tabi'i" && select3.value == "Minor" && select4.value == "FaDies") {
        step.src = "/images/Steps/KTMiFaDies.png";
    }
    else if (select1.value == "Koromatic" && select2.value == "Tabi'i" && select3.value == "Minor" && select4.value == "LaBemalOrSolDies") {
        step.src = "/images/Steps/KTMiSolDies.png";
    }
    else if (select1.value == "Koromatic" && select2.value == "Tabi'i" && select3.value == "Minor" && select4.value == "SiBemalOrLaDies") {
        step.src = "/images/Steps/KTMiLaDies.png";
    }
    else {
        step.src = "";
    }
}
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const selectedSection = document.getElementById("stepsPart");
(function () {
    selectedSection.classList.add("selectedDiv");
})();