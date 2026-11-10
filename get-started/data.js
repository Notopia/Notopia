function CheckQ5Inputs(event) {
    const inputs = document.querySelectorAll(".option")
    //*Disable options when user select option 1 or 6
    if (event.target.dataset.option == 6 || event.target.dataset.option == 1) {
        if (event.target.dataset.option == 1) {
            for (let i = 1; i <= 5; i++) {
                inputs[i].checked = false
            }
        }
        if (event.target.dataset.option == 6) {
            for (let i = 0; i <= 4; i++) {
                inputs[i].checked = false
            }
        }
    }
    //*Disable option 1 and 6 when user select another option
    else {
        inputs[0].checked = false
        inputs[5].checked = false
    }
}