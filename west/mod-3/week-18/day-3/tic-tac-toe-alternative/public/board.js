export function addMoveToBoard(target, currPlayer) {
	if (target.classList.contains("x") || target.classList.contains("o")) {
		return false;
	}
	target.classList.add(currPlayer);
	return true;
}

export function getBoard() {
	const squares = Array.from(document.getElementsByClassName("square"));
	let board = [];
	for (let i = 0; i < 3; i++) {
		let row = [];
		for (let j = 0; j < 3; j++) {
			const square = squares[i * 3 + j];
			if (square.classList.contains("x")) row.push("x");
			else if (square.classList.contains("o")) row.push("o");
			else row.push(" ");
		}
		board.push(row);
	}
	return board;
}
