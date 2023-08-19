// Your code here

window.onload = () => {
	const gameBoard = document.getElementById("game-board");

	gameBoard.addEventListener("click", (e) => {
		e.target.classList.add("x");
		console.log(e.target);
		console.log(e.target.classList.contains("x"));
	});
};
