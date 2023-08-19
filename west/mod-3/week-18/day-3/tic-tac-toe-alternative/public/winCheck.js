import { getBoard } from "./board.js";

export function checkWin() {
	const board = getBoard();
	const winPatterns = [
		// Rows
		[
			[0, 0],
			[0, 1],
			[0, 2],
		],
		[
			[1, 0],
			[1, 1],
			[1, 2],
		],
		[
			[2, 0],
			[2, 1],
			[2, 2],
		],
		// Columns
		[
			[0, 0],
			[1, 0],
			[2, 0],
		],
		[
			[0, 1],
			[1, 1],
			[2, 1],
		],
		[
			[0, 2],
			[1, 2],
			[2, 2],
		],
		// Diagonals
		[
			[0, 0],
			[1, 1],
			[2, 2],
		],
		[
			[0, 2],
			[1, 1],
			[2, 0],
		],
	];

	for (const pattern of winPatterns) {
		if (
			board[pattern[0][0]][pattern[0][1]] ===
				board[pattern[1][0]][pattern[1][1]] &&
			board[pattern[1][0]][pattern[1][1]] ===
				board[pattern[2][0]][pattern[2][1]] &&
			board[pattern[0][0]][pattern[0][1]] !== " "
		) {
			return board[pattern[0][0]][pattern[0][1]];
		}
	}

	if (board.every((row) => row.every((cell) => cell !== " "))) return "tie";
	return null;
}
