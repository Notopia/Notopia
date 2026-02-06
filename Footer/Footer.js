function registerInNews() {
    let phoneNumber = document.getElementById("txtPhoneNumber").value;
    let email = document.getElementById("txtEmail").value;
    let emailChecker = false;
    let phoneNumberChecker = true;
    for (let i = 0; i <= phoneNumber.length - 1; i++) {
        if (phoneNumber[i] != "0" && phoneNumber[i] != "1" && phoneNumber[i] != "2" && phoneNumber[i] != "3" && phoneNumber[i] != "4" && phoneNumber[i] != "5" && phoneNumber[i] != "6" && phoneNumber[i] != "7" && phoneNumber[i] != "8" && phoneNumber[i] != "9") {
            phoneNumberChecker = false;
        }
    }
    for (let i = 0; i <= email.length - 1; i++) {
        if (email[i] == '@') {
            emailChecker = true;
        }
    }
    console.log(phoneNumber.length, phoneNumberChecker, emailChecker);
    if (phoneNumber != "" && phoneNumber.length >= 10 && phoneNumberChecker == true && email != "" && emailChecker == true) {
        alert("درخواست شما با موفقیت ثبت شد.");
    }
    else {
        alert("لطفا اطلاعات را به شکل صحیح وارد نمایید!")
    }
}