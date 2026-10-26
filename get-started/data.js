function CheckQ5Inputs(event) {
    const inputs = document.querySelectorAll(".option")
    if (event.target.dataset.option != 6) {
        inputs[5].checked = false
    }
    else if (event.target.dataset.option = 6) {
        if (inputs[5].checked) {
            for (let i = 0; i <= 4; i++) {
                inputs[i].checked = false
            }
        }
    }
}