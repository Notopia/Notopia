const select3 = document.getElementById("select3");
const select4 = document.getElementById("select4").options;
function changeMajorAndMinor() {
    if (select3.value == "Minor") {
        select4[8].innerHTML = "ر دیز";
        select4[10].innerHTML = "سل دیز";
        select4[11].innerHTML = "لا دیز";
    }
    else if (select3.value == "Major") {
        select4[8].innerHTML = "می بمل";
        select4[10].innerHTML = "لا بمل";
        select4[11].innerHTML = "سی بمل";
    }
}
//*Toggle showing select 2,3,4 for Diatonics
function ChangeKoromaticAndDiatonic() {
    const step = document.getElementById("step");
    const select1 = document.getElementById("select1");
    const select2 = document.getElementById("select2");
    const select3 = document.getElementById("select3");
    const select4 = document.getElementById("select4");
    if (select1.value == "Koromatic") {
        select2.classList.remove("invisible");
        select3.classList.remove("invisible");
        select4.classList.remove("invisible");
        step.classList.remove("Lhidden");
    }
    else if (select1.value == "Diatonic") {
        select2.classList.add("invisible");
        select3.classList.add("invisible");
        select4.classList.add("invisible");
        step.classList.add("Lhidden");
    }
}
//*Toggle showing table for select 1 , 2
function ChangeSelect1And2Handler() {
    const table = document.querySelector("#table");
    const select1 = document.getElementById("select1");
    const select2 = document.getElementById("select2");
    if (select2.value == "Melodic" || select1.value == "Diatonic") {
        table.classList.add("Lhidden");
        table.classList.remove("Lflex");
    }
    else {
        table.classList.remove("Lhidden");
        table.classList.add("Lflex");
    }
}
//*Hover on about button
const aboutButton = document.getElementById("aboutButton");
const svgFiller = document.getElementById("about-white");
aboutButton.onmouseover = function () {
    svgFiller.classList.add("aboutButtonHover");
}
aboutButton.onmouseout = function () {
    svgFiller.classList.remove("aboutButtonHover");
}
//*Click on about button
const header = document.getElementById("header");
const aboutBox = document.getElementById("aboutBox");
const root = document.getElementById("root");
let diatonicAboutBoxShowingStatus = false;
let aboutBoxShowingStatus = false;
aboutButton.onclick = function () {
    aboutBox.classList.remove("main__about__hide");
    aboutBox.classList.add("main__about__show");
    root.classList.add("hidlessRoot");
    header.classList.add("hidlessRoot")
    footer.classList.add("hidlessRoot");
    aboutBoxShowingStatus = true;
    diatonicAboutButton.disabled = true;
}
//*Cancel showing about box
const footer = document.getElementById("footer");
function CnacelShowingAboutBox() {
    if (aboutBoxShowingStatus == true) {
        aboutBox.classList.add("main__about__hide");
        aboutBox.classList.remove("main__about__show");
        root.classList.remove("hidlessRoot");
        header.classList.remove("hidlessRoot");
        footer.classList.remove("hidlessRoot");
        aboutBoxShowingStatus = false;
        diatonicAboutButton.disabled = false;
    }
}
root.addEventListener("click", () => {
    aboutBox.classList.add("main__about__hide");
    aboutBox.classList.remove("main__about__show");
    root.classList.remove("hidlessRoot");
    header.classList.remove("hidlessRoot");
    footer.classList.remove("hidlessRoot");
    aboutBoxShowingStatus = false;
    diatonicAboutButton.disabled = false;
});
aboutButton.addEventListener("click", (event) => {
    event.stopPropagation();
    aboutBox.classList.remove("main__about__hide");
    aboutBox.classList.add("main__about__show");
    root.classList.add("hidlessRoot");
    header.classList.add("hidlessRoot");
    footer.classList.add("hidlessRoot");
    diatonicAboutButton.disabled = true;
});
//*Click on Diatonic about button
const diatonicAboutButton = document.getElementById("aboutDiatonicButton");
const diatonicAboutBox = document.getElementById("diatonicAboutBox");
diatonicAboutButton.onclick = function () {
    diatonicAboutBox.classList.remove("main__about__hide");
    diatonicAboutBox.classList.add("main__about__show");
    root.classList.add("hidlessRoot");
    header.classList.add("hidlessRoot")
    footer.classList.add("hidlessRoot");
    diatonicAboutBoxShowingStatus = true;
    aboutButton.disabled = true;
}
//*Cancel showing Diatonic about box
function CanacelShowingDiatonicAboutBox() {
    if (diatonicAboutBoxShowingStatus == true) {
        diatonicAboutBox.classList.add("main__about__hide");
        diatonicAboutBox.classList.remove("main__about__show");
        root.classList.remove("hidlessRoot");
        header.classList.remove("hidlessRoot");
        footer.classList.remove("hidlessRoot");
        diatonicAboutBoxShowingStatus = false;
        aboutButton.disabled = false;
    }
}
root.addEventListener("click", () => {
    diatonicAboutBox.classList.add("main__about__hide");
    diatonicAboutBox.classList.remove("main__about__show");
    root.classList.remove("hidlessRoot");
    header.classList.remove("hidlessRoot");
    footer.classList.remove("hidlessRoot");
    diatonicAboutBoxShowingStatus = false;
    aboutButton.disabled = false;
});
diatonicAboutButton.addEventListener("click", (event) => {
    event.stopPropagation();
    diatonicAboutBox.classList.remove("main__about__hide");
    diatonicAboutBox.classList.add("main__about__show");
    root.classList.add("hidlessRoot");
    header.classList.add("hidlessRoot");
    footer.classList.add("hidlessRoot");
    aboutButton.disabled = true;
});
//*Handle click on full screen button
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
//*Change step when select changed
function changeSelectHandler() {
    const step = document.getElementById("step");
    const select1 = document.getElementById("select1");
    const select2 = document.getElementById("select2");
    const select3 = document.getElementById("select3");
    const select4 = document.getElementById("select4");
    const text1 = document.getElementById("text1");
    const aboutDiatonic = document.getElementById("aboutDiatonicButton");
    const EGImage = document.getElementById("KoromaticEGImage");
    const text2 = document.getElementById("text2");
    const text3 = document.getElementById("text3");
    const c3r3 = document.getElementById("c3r3");
    const c3r6 = document.getElementById("c3r6");
    const c3r7 = document.getElementById("c3r7");
    const n1 = document.getElementById("c4r1");
    const n2 = document.getElementById("c4r2");
    const n3 = document.getElementById("c4r3");
    const n4 = document.getElementById("c4r4");
    const n5 = document.getElementById("c4r5");
    const n6 = document.getElementById("c4r6");
    const n7 = document.getElementById("c4r7");
    const n8 = document.getElementById("c4r8");
    //*Set pictue of the step and column 4 of table
    if (select1.value == "Koromatic" && select2.value == "Tabi'i" && select3.value == "Major" && select4.value == "Do") {
        step.src = "/images/Steps/KTMaDo.webp";
        n1.innerText = "دو/C";
        n2.innerText = "ر/D";
        n3.innerText = "می/E";
        n4.innerText = "فا/F";
        n5.innerText = "سل/G";
        n6.innerText = "لا/A";
        n7.innerText = "سی/B";
        n8.innerText = "دو/C";
    }
    else if (select1.value == "Koromatic" && select2.value == "Tabi'i" && select3.value == "Major" && select4.value == "Re") {
        step.src = "/images/Steps/KTMaRe.webp";
        n1.innerText = "ر/D";
        n2.innerText = "می/E";
        n3.innerText = "فا دیز/F#";
        n4.innerText = "سل/G";
        n5.innerText = "لا/A";
        n6.innerText = "سی/B";
        n7.innerText = "دو دیز/C#";
        n8.innerText = "ر/D";
    }
    else if (select1.value == "Koromatic" && select2.value == "Tabi'i" && select3.value == "Major" && select4.value == "Mi") {
        step.src = "/images/Steps/KTMaMi.webp";
        n1.innerText = "می/E";
        n2.innerText = "فا دیز/F#";
        n3.innerText = "سل دیز/G#";
        n4.innerText = "لا/A";
        n5.innerText = "سی/B";
        n6.innerText = "دو دیز/C#";
        n7.innerText = "ر دیز/D#";
        n8.innerText = "می/E";
    }
    else if (select1.value == "Koromatic" && select2.value == "Tabi'i" && select3.value == "Major" && select4.value == "Fa") {
        step.src = "/images/Steps/KTMaFa.webp";
        n1.innerText = "فا/F";
        n2.innerText = "سل/G";
        n3.innerText = "لا/A";
        n4.innerText = "سل بمل/Bb";
        n5.innerText = "دو/C";
        n6.innerText = "ر/D";
        n7.innerText = "می/E";
        n8.innerText = "فا/F";
    }
    else if (select1.value == "Koromatic" && select2.value == "Tabi'i" && select3.value == "Major" && select4.value == "Sol") {
        step.src = "/images/Steps/KTMaSol.webp";
        n1.innerText = "سل/G";
        n2.innerText = "لا/A";
        n3.innerText = "سی/B";
        n4.innerText = "دو/C";
        n5.innerText = "ر/D";
        n6.innerText = "می/E";
        n7.innerText = "فا دیز/F#";
        n8.innerText = "سل/G";
    }
    else if (select1.value == "Koromatic" && select2.value == "Tabi'i" && select3.value == "Major" && select4.value == "La") {
        step.src = "/images/Steps/KTMaLa.webp";
        n1.innerText = "لا/A";
        n2.innerText = "سی/B";
        n3.innerText = "دو دیز/C#";
        n4.innerText = "ر/D";
        n5.innerText = "می/E";
        n6.innerText = "فا دیز/F#";
        n7.innerText = "سل دیز/G#";
        n8.innerText = "لا/A";
    }
    else if (select1.value == "Koromatic" && select2.value == "Tabi'i" && select3.value == "Major" && select4.value == "Si") {
        step.src = "/images/Steps/KTMaSi.webp";
        n1.innerText = "سی/B";
        n2.innerText = "دو دیز/C#";
        n3.innerText = "ر دیز/D#";
        n4.innerText = "می دیز/E";
        n5.innerText = "فا دیز/F#";
        n6.innerText = "سل دیز/G#";
        n7.innerText = "لا دیز/A#";
        n8.innerText = "سی دیز/B";
    }
    else if (select1.value == "Koromatic" && select2.value == "Tabi'i" && select3.value == "Major" && select4.value == "DoDies") {
        step.src = "/images/Steps/KTMaDoDies.webp";
        n1.innerText = "دو دیز/G#";
        n2.innerText = "ر دیز/D#";
        n3.innerText = "می دیز/E#";
        n4.innerText = "فا دیز/F#";
        n5.innerText = "سی دیز/G#";
        n6.innerText = "لا دیز/A#";
        n7.innerText = "سی دیز/B#";
        n8.innerText = "دو دیز/C#";
    }
    else if (select1.value == "Koromatic" && select2.value == "Tabi'i" && select3.value == "Major" && select4.value == "MiBemalOrReDies") {
        step.src = "/images/Steps/KTMaMiBemal.webp";
        n1.innerText = "می بمل/Eb";
        n2.innerText = "فا/F";
        n3.innerText = "سل/G";
        n4.innerText = "لا بمل/Ab";
        n5.innerText = "سی بمل/Bb";
        n6.innerText = "دو/C";
        n7.innerText = "ر/D";
        n8.innerText = "می بمل/Eb";
    }
    else if (select1.value == "Koromatic" && select2.value == "Tabi'i" && select3.value == "Major" && select4.value == "FaDies") {
        step.src = "/images/Steps/KTMaFaDies.webp";
        n1.innerText = "فا دیز/F#";
        n2.innerText = "سل دیز/G#";
        n3.innerText = "لا دیز/A#";
        n4.innerText = "سی دیز/B";
        n5.innerText = "دو دیز/C#";
        n6.innerText = "ر دیز/D#";
        n7.innerText = "می دیز/E#";
        n8.innerText = "فا دیز/F#";
    }
    else if (select1.value == "Koromatic" && select2.value == "Tabi'i" && select3.value == "Major" && select4.value == "LaBemalOrSolDies") {
        step.src = "/images/Steps/KTMaLaBemal.webp";
        n1.innerText = "لا بمل/Ab";
        n2.innerText = "سی بمل/Bb";
        n3.innerText = "دو/C";
        n4.innerText = "ر بمل/Db";
        n5.innerText = "می بمل/Eb";
        n6.innerText = "فا/F";
        n7.innerText = "سل/G";
        n8.innerText = "لا بمل/Ab";
    }
    else if (select1.value == "Koromatic" && select2.value == "Tabi'i" && select3.value == "Major" && select4.value == "SiBemalOrLaDies") {
        step.src = "/images/Steps/KTMaSiBemal.webp";
        n1.innerText = "سی بمل/Bb";
        n2.innerText = "دو/C";
        n3.innerText = "ر/D";
        n4.innerText = "می بمل/Eb";
        n5.innerText = "فا/F";
        n6.innerText = "سل/G";
        n7.innerText = "لا/A";
        n8.innerText = "سی بمل/Bb";
    }
    else if (select1.value == "Koromatic" && select2.value == "Tabi'i" && select3.value == "Minor" && select4.value == "Do") {
        step.src = "/images/Steps/KTMiDo.webp";
        n1.innerText = "دو/C";
        n2.innerText = "ر/D";
        n3.innerText = "می بمل/Eb";
        n4.innerText = "فا/F";
        n5.innerText = "سل/G";
        n6.innerText = "لا بمل/Ab";
        n7.innerText = "سی بمل/Bb";
        n8.innerText = "دو/C";
    }
    else if (select1.value == "Koromatic" && select2.value == "Tabi'i" && select3.value == "Minor" && select4.value == "Re") {
        step.src = "/images/Steps/KTMiRe.webp";
        n1.innerText = "ر/D";
        n2.innerText = "می/E";
        n3.innerText = "فا/F";
        n4.innerText = "سل/G";
        n5.innerText = "لا/A";
        n6.innerText = "سی بمل/Bb";
        n7.innerText = "دو/C";
        n8.innerText = "ر/D";
    }
    else if (select1.value == "Koromatic" && select2.value == "Tabi'i" && select3.value == "Minor" && select4.value == "Mi") {
        step.src = "/images/Steps/KTMiMi.webp";
        n1.innerText = "می/E";
        n2.innerText = " فا دیز/F#";
        n3.innerText = "سل/G";
        n4.innerText = "لا/A";
        n5.innerText = "سی/B";
        n6.innerText = "دو/C";
        n7.innerText = "ر/D";
        n8.innerText = "می/E";
    }
    else if (select1.value == "Koromatic" && select2.value == "Tabi'i" && select3.value == "Minor" && select4.value == "Fa") {
        step.src = "/images/Steps/KTMiFa.webp";
        n1.innerText = "فا/F";
        n2.innerText = "سل/G";
        n3.innerText = "لا بمل/Ab";
        n4.innerText = "سی بمل/Bb";
        n5.innerText = "دو/C";
        n6.innerText = "ر/ بمل/Db";
        n7.innerText = "می بمل/Eb";
        n8.innerText = "فا/F";
    }
    else if (select1.value == "Koromatic" && select2.value == "Tabi'i" && select3.value == "Minor" && select4.value == "Sol") {
        step.src = "/images/Steps/KTMiSol.webp";
        n1.innerText = "سل/G";
        n2.innerText = "لا/A";
        n3.innerText = "سی بمل/Bb";
        n4.innerText = "دو/C";
        n5.innerText = "ر/D";
        n6.innerText = "می بمل/Eb";
        n7.innerText = "فا/F";
        n8.innerText = "سل/G";
    }
    else if (select1.value == "Koromatic" && select2.value == "Tabi'i" && select3.value == "Minor" && select4.value == "La") {
        step.src = "/images/Steps/KTMiLa.webp";
        n1.innerText = "لا/A";
        n2.innerText = "سی/B";
        n3.innerText = "دو/C";
        n4.innerText = "ر/D";
        n5.innerText = "می/E";
        n6.innerText = "فا/F";
        n7.innerText = "سل/G";
        n8.innerText = "لا/A";
    }
    else if (select1.value == "Koromatic" && select2.value == "Tabi'i" && select3.value == "Minor" && select4.value == "Si") {
        step.src = "/images/Steps/KTMiSi.webp";
        n1.innerText = "سی/B";
        n2.innerText = "دو دیز/C#";
        n3.innerText = "ر/D";
        n4.innerText = "می/E";
        n5.innerText = "فا دیز/F#";
        n6.innerText = "سل/G";
        n7.innerText = "لا/A";
        n8.innerText = "سی/B";
    }
    else if (select1.value == "Koromatic" && select2.value == "Tabi'i" && select3.value == "Minor" && select4.value == "DoDies") {
        step.src = "/images/Steps/KTMiDoDies.webp";
        n1.innerText = "دو دیز/C#";
        n2.innerText = "ر دیز/D#";
        n3.innerText = "می/E";
        n4.innerText = "فا دیز/F#";
        n5.innerText = "سل دیز/G#";
        n6.innerText = "لا/A";
        n7.innerText = "سی/B";
        n8.innerText = "دو دیز/C#";
    }
    else if (select1.value == "Koromatic" && select2.value == "Tabi'i" && select3.value == "Minor" && select4.value == "MiBemalOrReDies") {
        step.src = "/images/Steps/KTMiReDies.webp";
        n1.innerText = "ر دیز/D#";
        n2.innerText = "می دیز/E#";
        n3.innerText = "فا دیز/F#";
        n4.innerText = "سل دیز/G#";
        n5.innerText = "لا دیز/A#";
        n6.innerText = "سی/B";
        n7.innerText = "دو دیز/C#";
        n8.innerText = "ر دیز/D#";
    }
    else if (select1.value == "Koromatic" && select2.value == "Tabi'i" && select3.value == "Minor" && select4.value == "FaDies") {
        step.src = "/images/Steps/KTMiFaDies.webp";
        n1.innerText = "فا دیز/F#";
        n2.innerText = "سل دیز/G#";
        n3.innerText = "لا دیز/A#";
        n4.innerText = "سی/B";
        n5.innerText = "دو/C";
        n6.innerText = "ر/D";
        n7.innerText = "می/E";
        n8.innerText = "فا دیز/F#";
    }
    else if (select1.value == "Koromatic" && select2.value == "Tabi'i" && select3.value == "Minor" && select4.value == "LaBemalOrSolDies") {
        step.src = "/images/Steps/KTMiSolDies.webp";
        n1.innerText = "سسل دیز/G#";
        n2.innerText = "لا دیز/A#";
        n3.innerText = "سی/B";
        n4.innerText = "دو دیز/C#";
        n5.innerText = "ر دیز/D#";
        n6.innerText = "می/E";
        n7.innerText = "فا دیز/F#";
        n8.innerText = "سل دیز/G#";
    }
    else if (select1.value == "Koromatic" && select2.value == "Tabi'i" && select3.value == "Minor" && select4.value == "SiBemalOrLaDies") {
        step.src = "/images/Steps/KTMiLaDies.webp";
        n1.innerText = "لا دیز/A#";
        n2.innerText = "سی دیز/B#";
        n3.innerText = "دو دیز/C#";
        n4.innerText = "ر دیز/D#";
        n5.innerText = "می دیز/E#";
        n6.innerText = "فا دیز/F#";
        n7.innerText = "سل دیز/G#";
        n8.innerText = "لا دیز/A#";
    }
    else if (select1.value == "Koromatic" && select2.value == "Harmonic" && select3.value == "Major" && select4.value == "Do") {
        step.src = "/images/Steps/KHMaDo.webp";
        n1.innerText = "دو/C";
        n2.innerText = "ر/D";
        n3.innerText = "می/E";
        n4.innerText = "فا/F";
        n5.innerText = "سل/G";
        n6.innerText = "لا دیز/A#";
        n7.innerText = "سی/B";
        n8.innerText = "دو/C";
    }
    else if (select1.value == "Koromatic" && select2.value == "Harmonic" && select3.value == "Major" && select4.value == "Re") {
        step.src = "/images/Steps/KHMaRe.webp";
        n1.innerText = "ر/D";
        n2.innerText = "می/E";
        n3.innerText = "فا دیز/F#";
        n4.innerText = "سل/G";
        n5.innerText = "لا/A";
        n6.innerText = "سی دیز/B#";
        n7.innerText = "دو دیز/C#";
        n8.innerText = "ر/D";
    }
    else if (select1.value == "Koromatic" && select2.value == "Harmonic" && select3.value == "Major" && select4.value == "Mi") {
        step.src = "/images/Steps/KHMaMi.webp";
        n1.innerText = "می/E";
        n2.innerText = "فا دیز/F#";
        n3.innerText = "سل دیز/G#";
        n4.innerText = "لا/A";
        n5.innerText = "سی/B";
        n6.innerText = "دو دوبل دیز/C##";
        n7.innerText = "ر دیز/D#";
        n8.innerText = "می/E";
    }
    else if (select1.value == "Koromatic" && select2.value == "Harmonic" && select3.value == "Major" && select4.value == "Fa") {
        step.src = "/images/Steps/KHMaFa.webp";
        n1.innerText = "فا/F";
        n2.innerText = "سل/G";
        n3.innerText = "لا/A";
        n4.innerText = "سل بمل/Bb";
        n5.innerText = "دو/C";
        n6.innerText = "ر دیز/D#";
        n7.innerText = "می/E";
        n8.innerText = "فا/F";
    }
    else if (select1.value == "Koromatic" && select2.value == "Harmonic" && select3.value == "Major" && select4.value == "Sol") {
        step.src = "/images/Steps/KHMaSol.webp";
        n1.innerText = "سل/G";
        n2.innerText = "لا/A";
        n3.innerText = "سی/B";
        n4.innerText = "دو/C";
        n5.innerText = "ر/D";
        n6.innerText = "می دیز/E#";
        n7.innerText = "فا دیز/F#";
        n8.innerText = "سل/G";
    }
    else if (select1.value == "Koromatic" && select2.value == "Harmonic" && select3.value == "Major" && select4.value == "La") {
        step.src = "/images/Steps/KHMaLa.webp";
        n1.innerText = "لا/A";
        n2.innerText = "سی/B";
        n3.innerText = "دو دیز/C#";
        n4.innerText = "ر/D";
        n5.innerText = "می/E";
        n6.innerText = "فا دوبل دیز/F##";
        n7.innerText = "سل دیز/G#";
        n8.innerText = "لا/A";
    }
    else if (select1.value == "Koromatic" && select2.value == "Harmonic" && select3.value == "Major" && select4.value == "Si") {
        step.src = "/images/Steps/KHMaSi.webp";
        n1.innerText = "سی/B";
        n2.innerText = "دو دیز/C#";
        n3.innerText = "ر دیز/D#";
        n4.innerText = "می دیز/E";
        n5.innerText = "فا دیز/F#";
        n6.innerText = "سل دوبل دیز/G##";
        n7.innerText = "لا دیز/A#";
        n8.innerText = "سی دیز/B";
    }
    else if (select1.value == "Koromatic" && select2.value == "Harmonic" && select3.value == "Major" && select4.value == "DoDies") {
        step.src = "/images/Steps/KHMaDoDies.webp";
        n1.innerText = "دو دیز/C#";
        n2.innerText = "ر دیز/D#";
        n3.innerText = "می دیز/E#";
        n4.innerText = "فا دیز/F#";
        n5.innerText = "سل دیز/G#";
        n6.innerText = "لا دوبل دیز/A##";
        n7.innerText = "سی دیز/B#";
        n8.innerText = "دو دیز/C#";
    }
    else if (select1.value == "Koromatic" && select2.value == "Harmonic" && select3.value == "Major" && select4.value == "MiBemalOrReDies") {
        step.src = "/images/Steps/KHMaMiBemal.webp";
        n1.innerText = "می بمل/Eb";
        n2.innerText = "فا/F";
        n3.innerText = "سل/G";
        n4.innerText = "لا بمل/Ab";
        n5.innerText = "سی بمل/Bb";
        n6.innerText = "دو دیز/C#";
        n7.innerText = "ر/D";
        n8.innerText = "می بمل/Eb";
    }
    else if (select1.value == "Koromatic" && select2.value == "Harmonic" && select3.value == "Major" && select4.value == "FaDies") {
        step.src = "/images/Steps/KHMaFaDies.webp";
        n1.innerText = "فا دیز/F#";
        n2.innerText = "سل دیز/G#";
        n3.innerText = "لا دیز/A#";
        n4.innerText = "سی دیز/B";
        n5.innerText = "دو دیز/C#";
        n6.innerText = "ر دوبل دیز/D##";
        n7.innerText = "می دیز/E#";
        n8.innerText = "فا دیز/F#";
    }
    else if (select1.value == "Koromatic" && select2.value == "Harmonic" && select3.value == "Major" && select4.value == "LaBemalOrSolDies") {
        step.src = "/images/Steps/KHMaLaBemal.webp";
        n1.innerText = "لا بمل/Ab";
        n2.innerText = "سی بمل/Bb";
        n3.innerText = "دو/C";
        n4.innerText = "ر بمل/Db";
        n5.innerText = "می بمل/Eb";
        n6.innerText = "فا دیز/F#";
        n7.innerText = "سل/G";
        n8.innerText = "لا بمل/Ab";
    }
    else if (select1.value == "Koromatic" && select2.value == "Harmonic" && select3.value == "Major" && select4.value == "SiBemalOrLaDies") {
        step.src = "/images/Steps/KHMaSiBemal.webp";
        n1.innerText = "سی بمل/Bb";
        n2.innerText = "دو/C";
        n3.innerText = "ر/D";
        n4.innerText = "می بمل/Eb";
        n5.innerText = "فا/F";
        n6.innerText = "سل دیز/G#";
        n7.innerText = "لا/A";
        n8.innerText = "سی بمل/Bb";
    }
    else if (select1.value == "Koromatic" && select2.value == "Harmonic" && select3.value == "Minor" && select4.value == "Do") {
        step.src = "/images/Steps/KHMiDo.webp";
        n1.innerText = "دو/C";
        n2.innerText = "ر/D";
        n3.innerText = "می بمل/Eb";
        n4.innerText = "فا/F";
        n5.innerText = "سل/G";
        n6.innerText = "لا بمل/Ab";
        n7.innerText = "سی دوبل بمل/Bbb";
        n8.innerText = "دو/C";
    }
    else if (select1.value == "Koromatic" && select2.value == "Harmonic" && select3.value == "Minor" && select4.value == "Re") {
        step.src = "/images/Steps/KHMiRe.webp";
        n1.innerText = "ر/D";
        n2.innerText = "می/E";
        n3.innerText = "فا/F";
        n4.innerText = "سل/G";
        n5.innerText = "لا/A";
        n6.innerText = "سی بمل/Bb";
        n7.innerText = "دو بمل/Cb";
        n8.innerText = "ر/D";
    }
    else if (select1.value == "Koromatic" && select2.value == "Harmonic" && select3.value == "Minor" && select4.value == "Mi") {
        step.src = "/images/Steps/KHMiMi.webp";
        n1.innerText = "می/E";
        n2.innerText = "فا دیز/F#";
        n3.innerText = "سل/G";
        n4.innerText = "لا/A";
        n5.innerText = "سی/B";
        n6.innerText = "دو/C";
        n7.innerText = "ر بمل/Db";
        n8.innerText = "می/E";
    }
    else if (select1.value == "Koromatic" && select2.value == "Harmonic" && select3.value == "Minor" && select4.value == "Fa") {
        step.src = "/images/Steps/KHMiFa.webp";
        n1.innerText = "فا/F";
        n2.innerText = "سل/G";
        n3.innerText = "لا بمل/Ab";
        n4.innerText = "سی بمل/Bb";
        n5.innerText = "دو/C";
        n6.innerText = "ر بمل/Db";
        n7.innerText = "می دوبل بمل/Ebb";
        n8.innerText = "فا/F";
    }
    else if (select1.value == "Koromatic" && select2.value == "Harmonic" && select3.value == "Minor" && select4.value == "Sol") {
        step.src = "/images/Steps/KHMiSol.webp";
        n1.innerText = "سل/G";
        n2.innerText = "لا/A";
        n3.innerText = "سی بمل/Bb";
        n4.innerText = "دو/C";
        n5.innerText = "ر/D";
        n6.innerText = "می بمل/Eb";
        n7.innerText = "فا بمل/Fb";
        n8.innerText = "سل/G";
    }
    else if (select1.value == "Koromatic" && select2.value == "Harmonic" && select3.value == "Minor" && select4.value == "La") {
        step.src = "/images/Steps/KHMiLa.webp";
        n1.innerText = "لا/A";
        n2.innerText = "سی/B";
        n3.innerText = "دو/C";
        n4.innerText = "ر/D";
        n5.innerText = "می/E";
        n6.innerText = "فا/F";
        n7.innerText = "سل بمل/Gb";
        n8.innerText = "لا/A";
    }
    else if (select1.value == "Koromatic" && select2.value == "Harmonic" && select3.value == "Minor" && select4.value == "Si") {
        step.src = "/images/Steps/KHMiSi.webp";
        n1.innerText = "سی/B";
        n2.innerText = "دو دیز/C#";
        n3.innerText = "ر/D";
        n4.innerText = "می/E";
        n5.innerText = "فا دیز/F#";
        n6.innerText = "سل/G";
        n7.innerText = "لا بمل/Ab";
        n8.innerText = "سی/B";
    }
    else if (select1.value == "Koromatic" && select2.value == "Harmonic" && select3.value == "Minor" && select4.value == "DoDies") {
        step.src = "/images/Steps/KHMiDoDies.webp";
        n1.innerText = "دو دیز/C#";
        n2.innerText = "ر دیز/D#";
        n3.innerText = "می/E";
        n4.innerText = "فا دیز/F#";
        n5.innerText = "سل دیز/G#";
        n6.innerText = "لا/A";
        n7.innerText = "سی بمل/Bb";
        n8.innerText = "دو دیز/C#";
    }
    else if (select1.value == "Koromatic" && select2.value == "Harmonic" && select3.value == "Minor" && select4.value == "MiBemalOrReDies") {
        step.src = "/images/Steps/KHMiReDies.webp";
        n1.innerText = "ر دیز/D#";
        n2.innerText = "می دیز/E#";
        n3.innerText = "فا دیز/F#";
        n4.innerText = "سل دیز/G#";
        n5.innerText = "لا دیز/A#";
        n6.innerText = "سی/B";
        n7.innerText = "دو/C";
        n8.innerText = "ر دیز/D#";
    }
    else if (select1.value == "Koromatic" && select2.value == "Harmonic" && select3.value == "Minor" && select4.value == "FaDies") {
        step.src = "/images/Steps/KHMiFaDies.webp";
        n1.innerText = "فا دیز/F#";
        n2.innerText = "سل دیز/G#";
        n3.innerText = "لا دیز/A#";
        n4.innerText = "سی/B";
        n5.innerText = "دو/C";
        n6.innerText = "ر/D";
        n7.innerText = "می بمل/Eb";
        n8.innerText = "فا دیز/F#";
    }
    else if (select1.value == "Koromatic" && select2.value == "Harmonic" && select3.value == "Minor" && select4.value == "LaBemalOrSolDies") {
        step.src = "/images/Steps/KHMiSolDies.webp";
        n1.innerText = "سل دیز/G#";
        n2.innerText = "لا دیز/A#";
        n3.innerText = "سی/B";
        n4.innerText = "دو دیز/C#";
        n5.innerText = "ر دیز/D#";
        n6.innerText = "می/E";
        n7.innerText = "فا/F";
        n8.innerText = "سل دیز/G#";
    }
    else if (select1.value == "Koromatic" && select2.value == "Harmonic" && select3.value == "Minor" && select4.value == "SiBemalOrLaDies") {
        step.src = "/images/Steps/KHMiLaDies.webp";
        n1.innerText = "لا دیز/A#";
        n2.innerText = "سی دیز/B#";
        n3.innerText = "دو دیز/C#";
        n4.innerText = "ر دیز/D#";
        n5.innerText = "می دیز/E#";
        n6.innerText = "فا دیز/F#";
        n7.innerText = "سل/G";
        n8.innerText = "لا دیز/A#";
    }
    else if (select1.value == "Koromatic" && select2.value == "Melodic" && select3.value == "Major" && select4.value == "Do") {
        step.src = "/images/Steps/KMMaDo.webp";
    }
    else if (select1.value == "Koromatic" && select2.value == "Melodic" && select3.value == "Major" && select4.value == "Re") {
        step.src = "/images/Steps/KMMaRe.webp";
    }
    else if (select1.value == "Koromatic" && select2.value == "Melodic" && select3.value == "Major" && select4.value == "Mi") {
        step.src = "/images/Steps/KMMaMi.webp";
    }
    else if (select1.value == "Koromatic" && select2.value == "Melodic" && select3.value == "Major" && select4.value == "Fa") {
        step.src = "/images/Steps/KMMaFa.webp";
    }
    else if (select1.value == "Koromatic" && select2.value == "Melodic" && select3.value == "Major" && select4.value == "Sol") {
        step.src = "/images/Steps/KMMaSol.webp";
    }
    else if (select1.value == "Koromatic" && select2.value == "Melodic" && select3.value == "Major" && select4.value == "La") {
        step.src = "/images/Steps/KMMaLa.webp";
    }
    else if (select1.value == "Koromatic" && select2.value == "Melodic" && select3.value == "Major" && select4.value == "Si") {
        step.src = "/images/Steps/KMMaSi.webp";
    }
    else if (select1.value == "Koromatic" && select2.value == "Melodic" && select3.value == "Major" && select4.value == "DoDies") {
        step.src = "/images/Steps/KMMaDoDies.webp";
    }
    else if (select1.value == "Koromatic" && select2.value == "Melodic" && select3.value == "Major" && select4.value == "MiBemalOrReDies") {
        step.src = "/images/Steps/KMMaMiBemal.webp";
    }
    else if (select1.value == "Koromatic" && select2.value == "Melodic" && select3.value == "Major" && select4.value == "FaDies") {
        step.src = "/images/Steps/KMMaFaDies.webp";
    }
    else if (select1.value == "Koromatic" && select2.value == "Melodic" && select3.value == "Major" && select4.value == "LaBemalOrSolDies") {
        step.src = "/images/Steps/KMMaLaBemal.webp";
    }
    else if (select1.value == "Koromatic" && select2.value == "Melodic" && select3.value == "Major" && select4.value == "SiBemalOrLaDies") {
        step.src = "/images/Steps/KMMaSiBemal.webp";
    }
    else if (select1.value == "Koromatic" && select2.value == "Melodic" && select3.value == "Minor" && select4.value == "Do") {
        step.src = "/images/Steps/KMMiDo.webp";
    }
    else if (select1.value == "Koromatic" && select2.value == "Melodic" && select3.value == "Minor" && select4.value == "Re") {
        step.src = "/images/Steps/KMMiRe.webp";
    }
    else if (select1.value == "Koromatic" && select2.value == "Melodic" && select3.value == "Minor" && select4.value == "Mi") {
        step.src = "/images/Steps/KMMiMi.webp";
    }
    else if (select1.value == "Koromatic" && select2.value == "Melodic" && select3.value == "Minor" && select4.value == "Fa") {
        step.src = "/images/Steps/KMMiFa.webp";
    }
    else if (select1.value == "Koromatic" && select2.value == "Melodic" && select3.value == "Minor" && select4.value == "Sol") {
        step.src = "/images/Steps/KMMiSol.webp";
    }
    else if (select1.value == "Koromatic" && select2.value == "Melodic" && select3.value == "Minor" && select4.value == "La") {
        step.src = "/images/Steps/KMMiLa.webp";
    }
    else if (select1.value == "Koromatic" && select2.value == "Melodic" && select3.value == "Minor" && select4.value == "Si") {
        step.src = "/images/Steps/KMMiSi.webp";
    }
    else if (select1.value == "Koromatic" && select2.value == "Melodic" && select3.value == "Minor" && select4.value == "DoDies") {
        step.src = "/images/Steps/KMMiDoDies.webp";
    }
    else if (select1.value == "Koromatic" && select2.value == "Melodic" && select3.value == "Minor" && select4.value == "MiBemalOrReDies") {
        step.src = "/images/Steps/KMMiReDies.webp";
    }
    else if (select1.value == "Koromatic" && select2.value == "Melodic" && select3.value == "Minor" && select4.value == "FaDies") {
        step.src = "/images/Steps/KMMiFaDies.webp";
    }
    else if (select1.value == "Koromatic" && select2.value == "Melodic" && select3.value == "Minor" && select4.value == "LaBemalOrSolDies") {
        step.src = "/images/Steps/KMMiSolDies.webp";
    }
    else if (select1.value == "Koromatic" && select2.value == "Melodic" && select3.value == "Minor" && select4.value == "SiBemalOrLaDies") {
        step.src = "/images/Steps/KMMiLaDies.webp";
    }
    else {
        step.src = "";
    }
    //*Set Texts for steps
    const stepKind = select4.options[select4.selectedIndex].text + " " + select3.options[select3.selectedIndex].text + " ";
    if (select1.value == "Koromatic") {
        aboutDiatonic.classList.add("Lflex")
        aboutDiatonic.classList.remove("Lhidden")
        EGImage.src = "";
        if (select2.value == "Tabi'i") {
            text1.innerText = "گام " + stepKind + " طبیعی با فاصله هر درجه از بیسیک ( نت شروع کننده گام ) به شکل زیر است: ";
            if (select3.value == "Major") {
                text2.innerText = "( P : درست ، M : بزرگ ، b : بمل ، # : دیز )";
            }
            else if (select3.value == "Minor") {
                text2.innerText = "( P : درست ، m : کوچک ، b : بمل ، # : دیز )"
            }
            text3.innerText = "";
        }
        else if (select2.value == "Harmonic") {
            if (select3.value == "Major") {
                text1.innerText = "برای بدست آوردن نوع هارمونیک گام های ماژور ، بایستی به درجه ششم گام ، ( نت ششم گام ) نیم پرده کروماتیک اضافه کنیم ( اگر علامت درجه ششم ، دیز : دوبل دیز ، بکار : دیز ، بمل : بکار ، دوبل بمل : بمل  )"
            }
            else if (select3.value == "Minor") {
                text1.innerText = "برای بدست آوردن نوع هارمونیک گام های مینور ، بایستی از درجه هفتم گام ، ( نت هفتم گام ) نیم پرده کروماتیک کم کنیم ( اگر علامت درجه هفتم  ، دوبل دیز : دیز ، دیر: بکار ، بکار: بمل ، بمل : دوبل بمل  )"
            }
            text2.innerText = "گام " + stepKind + "هارمونیک با فاصله هر درجه از بیسیک(نت شروع‌کننده گام) به شکل زیر است:"
            text3.innerText = "(P : درست ، M : بزرگ ، b : بمل ، # : دیز ، ## : دوبل دیز ، bb : دوبل بمل)"
        }
        else if (select2.value == "Melodic") {
            if (select3.value == "Major") {
                text1.innerText = "برای بدست آوردن  گام " + stepKind + " ملودیک ، بایستی درجات ششم و هفتم گام را در نوع پایین رونده گام ( نت ها از زیر به بم می‌روند ) کوچک کنیم .";
                text2.innerText = "لازم به ذکر است نوع بالا رونده گام ( نت ها از بم به زیر می‌روند ) همان نوع ماژور‌ گام تئوریک ( طبیعی ) است.";
            }
            else if (select3.value == "Minor") {
                text1.innerText = "برای بدست آوردن  گام " + stepKind + " ملودیک ، بایستی درجات ششم و هفتم گام را در نوع پایین رونده گام ( نت ها از زیر به بم می‌روند ) بزرگ کنیم .";
                text2.innerText = "لازم به ذکر است نوع بالا رونده گام ( نت ها از بم به زیر می‌روند ) همان نوع مینور گام تئوریک ( طبیعی ) است.";
            }
            text3.innerText = "";
        }
    }
    else if (select1.value == "Diatonic") {
        aboutDiatonic.classList.remove("Lflex")
        aboutDiatonic.classList.add("Lhidden")
        text1.innerText = "گام کروماتیک از ۱۲ نت متوالی با فاصلهٔ نیم‌پرده‌ای تشکیل می‌شود و در آن تمام نت‌های موجود در سیستم موسیقی غربی در محدودهٔ یک اکتاو نواخته می‌شوند. برخلاف گام‌های ماژور و مینور، گام کروماتیک الگوی مشخصی از پرده و نیم‌پرده ندارد و از نیم‌پرده‌های پشت‌سرهم تشکیل شده است.";
        EGImage.src = "/images/Steps/KoromaticDescriptionExample.webp";
        text2.innerText = "برای مثال :";
        text3.innerText = "گام کروماتیک معمولاً برای ایجاد حرکت ملودیک، تنش و رنگ‌آمیزی موسیقایی در قطعات استفاده می‌شود.";
    }
    //*Set column 3 of table for steps
    if (select3.value == "Major") {
        c3r3.innerText = "سوم بزرگ/3M";
        c3r6.innerText = "ششم بزرگ/6M";
        c3r7.innerText = "هفتم بزرگ/7M";
    }
    else if (select3.value == "Minor") {
        c3r3.innerText = "سوم کوچک/3M";
        c3r6.innerText = "ششم کوچک/6M";
        c3r7.innerText = "هفتم کوچک/7M";
    }
}
//*Change step when page reloaded
function AlwaysCheck() {
    changeSelectHandler();
}
//!-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const selectedSectionHeader = document.querySelector(".header__sections__steps");
const selectedSectionDropdown = document.querySelector("#stepsPart");
(function () {
    selectedSectionHeader.classList.add("selectedDiv");
    selectedSectionDropdown.classList.add("selectedDiv");
})();