
let btn = document.querySelectorAll(".btn");
let player = document.getElementById("turn");
player.innerHTML = "Turn : X";  // setting the turn of the player whose is going to play
let p = document.getElementById("pid");
let turnX = true; // Player X starts
const toWin = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8]];

// playing the game by setting box values to 'X' or 'O' 
// and disabling the box so that their values can't be changed once their values are assigned.
btn.forEach(box => {
  box.addEventListener("click", () => {
    if (turnX) {
      player.innerHTML = "Turn : O";
      box.innerHTML = "X";
      turnX = false;
      checkWin();
    } else {
      player.innerHTML = "Turn : X";
      box.innerHTML = "O";
      turnX = true;
      checkWin();
    }
    box.disabled = true;
  });
});

// checking the win conditions with the boxes assigned with values 'X' or 'O' by player
// and declaring the winner.
const checkWin = () => {
  for (let e of toWin) {
    let pos1 = btn[e[0]].innerText;
    let pos2 = btn[e[1]].innerText;
    let pos3 = btn[e[2]].innerText;
    let hasWon = false;

    if (pos1 !== "" && pos2 !== "" && pos3 !== "" && pos1 === pos2 && pos2 === pos3) {
      p.textContent = `${pos1} wins!!!`;
      hasWon = true;    // this varible checks if player won or not
      disableBox();
      return hasWon;
    }
    if (!hasWon) {
      // checks if all boxes are filled with some value or not
      const isDraw = [...btn].every((b) => b.innerText !== "");
      if (isDraw) {
        p.textContent = "Draw!!";
      }
    }

  }
}

// this function makes sure after winning the boxes can't be clicked
const disableBox = () => {
  for (let el of btn) {
    el.disabled = true;
  }
}

// this function resets the current ongoing game (if any)
function resetGame() {
  turnX = true;
  for (const e of btn) {
    e.disabled = false;
    e.innerHTML = "";
    p.textContent = "";
    player.innerHTML = "Turn : X";
  }
}

// this function results back to the portfolio page
function portfolio() {
  window.location.href = "./index.html#portfolio";
}
