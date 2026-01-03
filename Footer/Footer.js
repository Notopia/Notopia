function registerInNews() {
    let phoneNumber = document.getElementById("txtPhoneNumber").value;
    let email = document.getElementById("txtEmail").value;
    if (phoneNumber != "" && email != "") {
        alert("درخواست شما با موفقیت ثبت شد.");
    }
}