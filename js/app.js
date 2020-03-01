function getComputerChoice() {
    var com = Math.random()
    if (com < 0.34) return "Rock"
    if (com >= 0.34 && com <= 0.67) return "Scissor"
    return "Paper"
}

function getResult(com, player) {
    if (player == com) return "DRAW!!"
    if (player == "Rock")
        return (com == "Scissor") ? "WIN!!" : "LOSE!!"
    if (player == "Scissor")
        return (com == "Paper") ? "WIN!!" : "LOSE!!"
    if (player == "Paper")
        return (com == "Rock") ? "WIN!!" : "LOSE!!"
}

// function controller() {
//     var computerChoice = getComputerChoice()
//     var playerChoice = player.className
//     var result = getResult(computerChoice, playerChoice)
//     document.querySelector(".img-computer").setAttribute('src', `img/${computerChoice}.jpg`)
//     document.querySelector(".hasil").innerHTML = result

// }

var choices = document.querySelectorAll(".left div")
choices.forEach(function (player) {
    player.addEventListener('click', function(){
        var computerChoice = getComputerChoice()
        var playerChoice = player.className
        var result = getResult(computerChoice, playerChoice)
        console.log(result)
        console.log(playerChoice)
        console.log(computerChoice)

        // document.querySelector(".").setAttribute('src', `img/${computerChoice}.jpg`)
        document.querySelector(".RIGHT").innerHTML = computerChoice
        document.querySelector(".hasil").innerHTML = result
    })
}) 