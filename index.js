//Home 
let baseScore = 0
let homeScore = document.getElementById("home-score")

function plusOne() {
    baseScore += 1
    homeScore.textContent = baseScore
}

function plusTwo() {
    baseScore += 2
    homeScore.textContent = baseScore
}

function plusThree () {
  baseScore += 3
  homeScore.textContent = baseScore
}


//Guest 
let baseGuestScore = 0
let guestScore = document.getElementById("guest-score")

function plusOneGuest() {
  baseGuestScore += 1
  guestScore.textContent = baseGuestScore
}

function plusTwoGuest () {
  baseGuestScore += 2
  guestScore.textContent = baseGuestScore
}

function plusThreeGuest () {
  baseGuestScore += 3
  guestScore.textContent = baseGuestScore
}












