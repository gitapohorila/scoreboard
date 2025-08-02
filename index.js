let guestScore = document.getElementById("guest-score")
let homeScore = document.getElementById("home-score")
let guestCount = 0
let homeCount = 0

function addOne(){
    homeCount+=1
    homeScore.textContent = homeCount
}
function addTwo(){
    homeCount+=2
    homeScore.textContent = homeCount
}
function addThree(){
    homeCount+=3
    homeScore.textContent = homeCount
}
function addOneg(){
   guestCount+=1
   guestScore.textContent = guestCount
}
function addTwog(){
    guestCount+=2
    guestScore.textContent = guestCount
}
function addThreeg(){
    guestCount+=3
    guestScore.textContent = guestCount
}