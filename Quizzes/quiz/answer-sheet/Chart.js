import { shortResult } from "./AnswerSheet.js";

const canvas = document.getElementById('chartjs');
//*Get user result from AnswerSheet file
const userResult = shortResult
//*Show doughnut or pie chart type if userResult exists
if (userResult != null) {
    let chartType = ""
    if (userResult.correct == 0 && userResult.mistake == 0) {
        chartType = "doughnut"
    }
    else {
        chartType = "pie"
    }
    //*Use chartjs
    new Chart(canvas, {
        type: chartType,
        data: {
            labels: ['درست', 'نادرست', 'بی‌جواب'],
            datasets: [{
                data: [userResult.correct, userResult.mistake, userResult.blank],
                backgroundColor: ['#05df72', '#fb2c36', '#737373'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: { font: { family: 'Sahel' } }
                }
            }
        }
    });
}