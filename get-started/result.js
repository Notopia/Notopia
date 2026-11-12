const timer = setInterval(() => {
    const progressBarDOM = document.getElementById("progress")
    if (progressBarDOM) {
        clearInterval(timer)
        const userLevel = localStorage.getItem("userLevel").split(',')
        //*Get level of user percent
        let levelPercent = 0
        for (let i = 0; i <= 2; i++) {
            if (userLevel[i] == "1") {
                levelPercent += 0
            }
            else if (userLevel[i] == "2") {
                levelPercent += 10
            }
            else if (userLevel[i] == "3") {
                levelPercent += 20
            }
            else if (userLevel[i] == "4") {
                levelPercent += 33
            }
        }
        //*Change 99% to 100% and 0% to 1%
        if (levelPercent == 99) {
            levelPercent = 100
        }
        else if (levelPercent == 0) {
            levelPercent = 1
        }
        //*Create progress bar for DOM
        const progressBar = `<div style="width: ${levelPercent}%;" class="bg-main h-full rounded-full"></div>`
        //*Set DOM for progressBar
        progressBarDOM.innerHTML = progressBar
        //!-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        //*Set DOM for percent
        document.getElementById("percent").innerText = levelPercent
    }
}, 50);