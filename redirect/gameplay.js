const btn = document.querySelector("#check-num");
let num = document.querySelector("#input-num");
let chanceText = document.querySelector("#num-guess");

let guessText = document.querySelector("#guesses");
let guessNum = [];
let minGuess = 0;
let maxGuess = 100;

const win_num = Math.floor(Math.random() * 100) + 1;
let guess_number;
let chanceLeft = Number(chanceText.textContent);

// console.log(win_num);

btn.addEventListener("click", function (event) {
    event.preventDefault();
    chanceLeft--;
    chanceText.textContent = chanceLeft;
    guess_number = num.value;
    checkNum(guess_number, chanceLeft);
    num.value = "";
})

function checkNum(number, chanceLeft) {
    if (chanceLeft > -1) {
        if (number == win_num) {
            document.querySelector("#res-str").textContent = " You Won! Number is : "+win_num;
            document.querySelector(".res-box").classList.add("res-won");
            num.disabled = true;
            btn.disabled = true;
        } else if (number > win_num) {
            if (number < maxGuess) {
                maxGuess = number;
            }
        } else if (number < win_num) {
            if (number > minGuess) {
                minGuess = number;
            }
        }

    } else {
        document.querySelector("#res-str").textContent = " You Lost, the Number was : " + win_num;
        document.querySelector(".res-box").classList.add("res-lost");
        num.disabled = true;
        btn.disabled = true;
    }
    guessNum.push(number);
    guessText.textContent = guessNum;
    $("#low-num").text(minGuess);
    $("#high-num").text(maxGuess);
    $("#lower").css("flex", minGuess + "%");
    $("#in-range").css("flex", (maxGuess - minGuess) + "%");
    $("#higher").css("flex", (100 - maxGuess) + "%");
}

$("#play-new").on("click", function () {
    window.open("../index.html", "_self");
});