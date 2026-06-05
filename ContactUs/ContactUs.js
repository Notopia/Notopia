const lblTitleError = document.getElementById("titleError");
const lblNameError = document.getElementById("nameError");
const lblTelError = document.getElementById("telError");
const lblEmailError = document.getElementById("emailError");
const lblDescriptionError = document.getElementById("descriptionError");
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const errorLabels = document.getElementsByClassName("error");
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
let isEmailHasAddsign = false;
let isTelIsntCorrect = false;
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function Send() {
    let isItHasAnError = false;
    for (let i = 0; i < errorLabels.length; i++) {
        errorLabels[i].innerHTML = "";
    }
    // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    let title = document.getElementById("txtTitle").value;
    let name = document.getElementById("txtName").value;
    let tel = document.getElementById("txtTel").value;
    let email = document.getElementById("txtEmail").value;
    let description = document.getElementById("txtDescription").value;
    // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    if (title == "" || title == " ") {
        lblTitleError.innerHTML = "پر کردن این فیلد الزامیست.";
        isItHasAnError = true;
    }
    if (name == "" || name == " ") {
        lblNameError.innerHTML = "پر کردن این فیلد الزامیست.";
        isItHasAnError = true;
    }
    if (tel == "" || tel == " ") {
        lblTelError.innerHTML = "پر کردن این فیلد الزامیست.";
        isItHasAnError = true;
    }
    if (email == "" || email == " ") {
        lblEmailError.innerHTML = "پر کردن این فیلد الزامیست.";
        isItHasAnError = true;
    }
    if (description == "" || description == " ") {
        lblDescriptionError.innerHTML = "پر کردن این فیلد الزامیست.";
        isItHasAnError = true;
    }
    // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    for (let i = 0; i < tel.length; i++) {
        if (tel[i] != 0 && tel[i] != 1 && tel[i] != 2 && tel[i] != 3 && tel[i] != 4 && tel[i] != 5 && tel[i] != 6 && tel[i] != 7 && tel[i] != 8 && tel[i] != 9 && tel[i] != "+") {
            isTelIsntCorrect = true;
            break;
        }
    }
    if (isTelIsntCorrect == true || (tel.length != 10 && tel.length != 11 && tel.length != 12 && tel.length != 13)) {
        lblTelError.innerHTML = "شماره موبایل نامعتبر است.";
        isItHasAnError = true;
    }
    // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    for (let i = 0; i < email.length; i++) {
        if (email[i] == "@") {
            isEmailHasAddsign = true;
            break;
        }
    }
    if (isEmailHasAddsign == false) {
        lblEmailError.innerHTML = "ایمیل نامعتبر است.";
        isItHasAnError = true;
    }
    // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    if (isItHasAnError == false) {
        alert("پیام شما با موفقیت ارسال شد.\nاز طریق پیامک و ایمیل منتظر پاسخ باشید!")
    }
}
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const selectedSection = document.getElementById("contactPart");
(function () {
    selectedSection.classList.add("selectedDiv");
})();