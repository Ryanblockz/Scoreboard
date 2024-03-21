let homeCount = document.getElementById("currentHomeScore")

let guestCount = document.getElementById("currentGuestScore")


function threePoints() {
    homeCount.innerText = parseInt(homeCount.innerText) + 3;
    highlightLeadTeam();
}

function sixPoints() {
    homeCount.innerText = parseInt(homeCount.innerText) + 6;
    highlightLeadTeam();
}

function ninePoints() {
    homeCount.innerText = parseInt(homeCount.innerText) + 9;
    highlightLeadTeam();
}

function threePointsG() {
    guestCount.innerText = parseInt(guestCount.innerText) + 3;
    highlightLeadTeam();
}

function sixPointsG() {
    guestCount.innerText = parseInt(guestCount.innerText) + 6;
    highlightLeadTeam();
}

function ninePointsG() {
    guestCount.innerText = parseInt(guestCount.innerText) + 9;
    highlightLeadTeam();
}


function highlightLeadTeam() {
    const homeScore = parseInt(homeCount.innerText);
    const guestScore = parseInt(guestCount.innerText);

    if (homeScore > guestScore) {
        homeCount.classList.add("lead");
        guestCount.classList.remove("lead");
    } else if (guestScore > homeScore) {
        guestCount.classList.add("lead");
        homeCount.classList.remove("lead");
    } else {
        homeCount.classList.remove("lead");
        guestCount.classList.remove("lead");
    }
}

function newGame() {
    guestCount.innerText = 0;
    homeCount.innerText = 0;
    highlightLeadTeam();
}
