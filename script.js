function findDate() {
    const d = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    if (days[d.getDay()] == "Monday") {
        document.getElementById("clue-one").innerText = "Opened in 1973";
        document.getElementById("clue-two").innerText = "Right by the river and pretty close to the sea";
        document.getElementById("clue-three").innerText = "Great accoustics";
        document.getElementById("clue-four").innerText = "In NSW";
        document.getElementById("clue-five").innerText = "A lot of singing down under";
        answer = "sydney opera house";
    };
    if (days[d.getDay()] == "Tuesday") {
        document.getElementById("clue-one").innerText = "Nato-oh-siskoom";
        document.getElementById("clue-two").innerText = "Made by the trains in the mountains";
        document.getElementById("clue-three").innerText = "Named by a Scottsman after his home town";
        document.getElementById("clue-four").innerText = "Home for many in the Canadian Rockies";
        document.getElementById("clue-five").innerText = "Headquarters of the busiest national park in Canada";
        answer = "Banff";
    };
    return `${days[d.getDay()]}, ${months[d.getMonth()]} ${d.getDate()} 2024`;
    
}

function playTheGame() {
    document.getElementById("play-button").style.display = "none";
    document.getElementById("clue-box-one").style.display = "flex";
    document.getElementById("counters").style.visibility = "initial";
    document.getElementById("guess-field").style.visibility = "initial";
    document.getElementById("clue-guess-one").innerText = "🟨";
}

function checkAnswerOne() {
    var x = document.getElementById("input-one").value;
    if (x.toLowerCase() == answer) {
        document.getElementById("clue-box-one").style.background = "rgb(12, 134, 12, .3)";
        document.getElementById("clue-guess-one").innerText = "🟩";
        document.getElementById("input-one").style.display = "none";
        document.getElementById("guess-button").style.display = "none";
        document.getElementById("win-box").style.display = "initial";
    } else {
        document.getElementById("clue-box-one").style.background = "rgb(255, 0, 0, .3)";
        document.getElementById("clue-box-two").style.display = "flex";
        document.getElementById("clue-box-two").style.background = "rgb(255, 255, 0, .3)";
        document.getElementById("clue-guess-one").innerText = "🟥";
        document.getElementById("clue-guess-two").innerText = "🟨";
        document.getElementById("input-one").placeholder = "Second Guess...";
        document.getElementById("input-one").id = "input-two";
        document.getElementById("guess-button").onclick = checkAnswerTwo;
        document.getElementById("input-two").value = "";
        guessCount ++;
    }
}

function checkAnswerTwo() {
    var x = document.getElementById("input-two").value;
    if (x.toLowerCase() == answer) {
        document.getElementById("clue-box-two").style.background = "rgb(12, 134, 12, .3)";
        document.getElementById("clue-guess-two").innerText = "🟩";
        document.getElementById("input-two").style.display = "none";
        document.getElementById("guess-button").style.display = "none";
        document.getElementById("win-box").style.display = "initial";
    } else {
        document.getElementById("clue-box-two").style.background = "rgb(255, 0, 0, .3)";
        document.getElementById("clue-box-three").style.display = "flex";
        document.getElementById("clue-box-three").style.background = "rgb(255, 255, 0, .3)";
        document.getElementById("clue-guess-two").innerText = "🟥";
        document.getElementById("clue-guess-three").innerText = "🟨";
        document.getElementById("input-two").placeholder = "Third Guess...";
        document.getElementById("input-two").id = "input-three";
        document.getElementById("guess-button").onclick = checkAnswerThree;
        document.getElementById("input-three").value = "";
        guessCount ++;
    }
}

function checkAnswerThree() {
    var x = document.getElementById("input-three").value;
    if (x.toLowerCase() == answer) {
        document.getElementById("clue-box-three").style.background = "rgb(12, 134, 12, .3)";
        document.getElementById("clue-guess-three").innerText = "🟩";
        document.getElementById("input-three").style.display = "none";
        document.getElementById("guess-button").style.display = "none";
        document.getElementById("win-box").style.display = "initial";
    } else {

        document.getElementById("clue-box-three").style.background = "rgb(255, 0, 0, .3)";
        document.getElementById("clue-box-four").style.display = "flex";
        document.getElementById("clue-box-four").style.background = "rgb(255, 255, 0, .3)";
        document.getElementById("clue-guess-three").innerText = "🟥";
        document.getElementById("clue-guess-four").innerText = "🟨";
        document.getElementById("input-three").placeholder = "Fourth Guess...";
        document.getElementById("input-three").id = "input-four";
        document.getElementById("guess-button").onclick = checkAnswerFour;
        document.getElementById("input-four").value = "";
        guessCount ++;
    }
}

function checkAnswerFour() {
    var x = document.getElementById("input-four").value;
    if (x.toLowerCase() == answer) {
        document.getElementById("clue-box-four").style.background = "rgb(12, 134, 12, .3)";
        document.getElementById("clue-guess-four").innerText = "🟩";
        document.getElementById("input-four").style.display = "none";
        document.getElementById("guess-button").style.display = "none";
        document.getElementById("win-box").style.display = "initial";
    } else {
        document.getElementById("clue-box-four").style.background = "rgb(255, 0, 0, .3)";
        document.getElementById("clue-box-five").style.display = "flex";
        document.getElementById("clue-box-five").style.background = "rgb(255, 255, 0, .3)";
        document.getElementById("clue-guess-four").innerText = "🟥";
        document.getElementById("clue-guess-five").innerText = "🟨";
        document.getElementById("input-four").placeholder = "Final Guess...";
        document.getElementById("input-four").id = "input-five";
        document.getElementById("guess-button").onclick = checkAnswerFive;
        document.getElementById("input-five").value = "";
        guessCount ++;
    }
}

function checkAnswerFive() {
    var x = document.getElementById("input-five").value;
    document.getElementById("input-five").disabled = true;
    if (x.toLowerCase() == answer) {
        document.getElementById("clue-box-five").style.background = "rgb(12, 134, 12, .3)";
        document.getElementById("clue-guess-five").innerText = "🟩";
        document.getElementById("input-five").style.display = "none";
        document.getElementById("guess-button").style.display = "none";
        document.getElementById("win-box").style.display = "initial";
    } else {
        document.getElementById("clue-box-five").style.background = "rgb(255, 0, 0, .3)";
        document.getElementById("clue-guess-five").innerText = "🟥";
        document.getElementById("input-five").style.display = "none";
        document.getElementById("guess-button").style.display = "none";
        document.getElementById("end-message").innerText = "The answer was " + answer.charAt(0).toUpperCase() + answer.slice(1) + ".";
        document.getElementById("win-box").style.display = "initial";
    }
}

function copyResults() {
    var copyText = document.getElementById("share-text");
    var gridText = "";
    if (guessCount == 1) {
        gridText = "🟩⬛️⬛️⬛️⬛️";
    } else if (guessCount == 2){
        gridText = "🟥🟩⬛️⬛️⬛️";
    } else if (guessCount == 3){
        gridText = "🟥🟥🟩⬛️⬛️";
    } else if (guessCount == 4){
        gridText = "🟥🟥🟥🟩⬛️";
    } else if (guessCount == 5){
        gridText = "🟥🟥🟥🟥🟩";
    } else {
        gridText = "🟥🟥🟥🟥🟥";
    }

    let copyCopy = "Guess The Location\n#1 - " + guessCount.toString() + "/5\n\n" + gridText + "\n\nPlay Guess The Location at:\nhttps://emilehicksonx.github.io/GuessTheLocation/";
    document.getElementById("share-text").innerHTML = copyCopy;
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard
      .writeText(copyText.value)
      .then(() => {
        alert("Result copied to clipboard");
      })
      .catch(() => {
        alert("something went wrong");
      });
}

let answer = "petra";
let guessCount = 1;

document.getElementById("date-text").textContent = findDate();
var input = document.getElementById("input-one");
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("guess-button").click();
    }
  });