window.onload = () => {
	const gameBoard = document.getElementById("game-board");
	gameBoard.style.display = "none";
	let playerTurn = "x";

	gameBoard.addEventListener("click", (e) => {
		e.target.classList.add(playerTurn);
		console.log(e.target);
		playerTurn = playerTurn === "x" ? "o" : "x";
		console.log(e.target.classList.contains("x"));
	});
};

window.addEventListener("DOMContentLoaded", () => {});
