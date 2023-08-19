import { addMoveToBoard } from "./board.js";
import { checkWin } from "./winCheck.js";

window.onload = () => {
	const gameBoard = document.getElementById("game-board");

	let currPlayer = "x";

	gameBoard.addEventListener("click", handleBoardClick);

	const giveUpBtn = document.getElementById("give-up-btn");
	giveUpBtn.addEventListener("click", (e) => {
		gameBoard.removeEventListener("click", handleBoardClick);
		const winner = currPlayer === "x" ? "o" : "x";
		updateWinMessage(winner);
	});

	const newGameBtn = document.getElementById("new-game-btn");
	newGameBtn.addEventListener("click", (e) => {
		gameBoard.childNodes.forEach((el) => {
			el.className = "square";
		});

		const h1 = document.querySelector("h1");
		h1.innerText = "";
	});

	function handleBoardClick(e) {
		if (addMoveToBoard(e.target, currPlayer)) {
			currPlayer = currPlayer === "x" ? "o" : "x";
			const winStatus = checkWin();
			console.log(winStatus);
			updateWinMessage(winStatus);
		}
	}

	function updateWinMessage(status) {
		const h1 = document.querySelector("h1");
		if (status) {
			h1.innerText =
				status === "tie" ? "Tie game!!" : `${status.toUpperCase()} wins!!!`;
			gameBoard.removeEventListener("click", handleBoardClick);
		}
	}
};
