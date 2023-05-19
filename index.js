let randomNumber1 = Math.trunc(Math.random() * 6 + 1);

const dice1 = document.querySelector(".img1");
dice1.setAttribute("src", `images/dice${randomNumber1}.png`);

let randomNumber2 = Math.trunc(Math.random() * 6 + 1);

const dice2 = document.querySelector(".img2");
dice2.setAttribute("src", `images/dice${randomNumber2}.png`);

let endText = "";
if (randomNumber1 > randomNumber2) {
  endText = "🚩Player 1 Wins";
} else if (randomNumber2 > randomNumber1) {
  endText = "Player 2 Wins🚩";
} else {
  endText = "Draw";
}

document.querySelector("h1").innerHTML = endText;
