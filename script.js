let homeTotalScore = 0;
let guestTotalScore = 0;
let homeScore = document.getElementById("homeScore");
let guestScore = document.getElementById("guestScore");

function addOne(home) {
  if (home === "home") {
    homeTotalScore += 1;
    homeScore.innerHTML = homeTotalScore;
  } else {
    guestTotalScore += 1;
    guestScore.innerHTML = guestTotalScore;
  }
}

function addTwo(home) {
  if (home === "home") {
    homeTotalScore += 2;
    homeScore.innerHTML = homeTotalScore;
  } else {
    guestTotalScore += 2;
    guestScore.innerHTML = guestTotalScore;
  }
}


function addThree(home) {
  if (home === "home") {
    homeTotalScore += 3;
    homeScore.innerHTML = homeTotalScore;
  } else {
    guestTotalScore += 3;
    guestScore.innerHTML = guestTotalScore;
  }
}

function restart(){
 homeTotalScore = 0;
 guestTotalScore = 0;

 homeScore.innerHTML = 0;
 guestScore.innerHTML = 0;
}