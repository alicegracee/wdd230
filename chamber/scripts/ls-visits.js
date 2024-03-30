/* discover page */
/* days between visits */
const displayMessage = document.querySelector(".visits");

const ms24Hrs = 84600000;
/* milliseconds to days constant = 1000 ms/s * 60 s/m * 60 m/h * 24 h/day */

const newDate = new Date();
const today = Date.now();

let latestVisit = Number(window.localStorage.getItem("latestVisit")) || 0;

if (latestVisit == 0) {
    displayMessage.textContent = "Welcome! Let us know if you have any questions.";
}

else if (latestVisit > today - ms24Hrs) {
    displayMessage.textContent = "Back so soon! Awesome!";
}

else {
    let daysBetweenVisits = ((today - latestVisit) / ms24Hrs | 0);

    if (daysBetweenVisits == 1) {
        displayMessage.textContent = `You last visited ${daysBetweenVisits} day ago.`
    }
    else {
        displayMessage.textContent = `You last visited ${daysBetweenVisits} days ago.`
    }
}

localStorage.setItem("latestVisit", today);