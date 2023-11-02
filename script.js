const user = document.getElementById("userchoice");
const computer = document.getElementById("computerchoice");
const resultd = document.getElementById("result");

const output = document.querySelectorAll("button");
let userchoice;
let computerchoice;
let result;

output.forEach((button) => {
  button.addEventListener("click", (e) => {
    userchoice = e.target.id.toLowerCase();
    user.innerHTML = userchoice;
    randomc();
  });
});

function randomc() {
  const rn = Math.floor(Math.random() * 3) + 1;

  if (rn === 1) {
    computerchoice = "rock";
  } else if (rn === 2) {
    computerchoice = "scissors";
  } else {
    computerchoice = "paper";
  }
  computer.innerHTML = computerchoice;

  if (userchoice === computerchoice) {
    result = "It's a tie!";
  } else if (
    (userchoice === "rock" && computerchoice === "scissors") ||
    (userchoice === "paper" && computerchoice === "rock") ||
    (userchoice === "scissors" && computerchoice === "paper")
  ) {
    result = "You win!";
  } else {
    result = "Computer wins!";
  }

  resultd.innerHTML = result;
}
