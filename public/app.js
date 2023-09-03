// Initial game state
let cells = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let result = document.querySelector('.result');
let btns = document.querySelectorAll('.btn');
let conditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Function to handle player moves
const ticTacToe = (element, index) => {
    // Your game logic here

    /*
    **Part 1: Winning Conditions (Add your code here)**

    1. Implement the logic to check for winning conditions using the 'conditions' array.
    2. Display a winning message in the 'result' element when a player wins.
    3. Disable all buttons after a win.
    */

    // Your code to update the game state and check for a win
    // ...

    // Your code to display the current player's turn
    // ...

    // Your code to handle button and cell interactions
    // ...
};

    /*
    **Part 2: Reset Function (Add your code here)**

    1. Implement a new function that resets the game to its initial state.
    2. Ensure the 'cells', 'btns', and 'currentPlayer' variables are reset.
    3. Update the 'result' element to indicate the current player's turn.
    4. Re-enable all buttons for a new game.
    */

// Function to reset the game
const resetGame = () => {
    // Your code to reset the game state
    // ...

    // Your code to update the 'result' element
    // ...

    // Your code to re-enable buttons
    // ...
};

btns.forEach((btn, i) => {
    btn.addEventListener('click', () => ticTacToe(btn, i));
});

document.querySelector('#reset').addEventListener('click', resetGame);
<!DOCTYPE html>
<html>
	
<head>
	<meta name="viewport" content=
		"width=device-width, initial-scale=1.0">
	<!-- CSS file Included -->
	<link rel="stylesheet" type="text/css" href="tic.css">
	<!-- JavaScript file included -->
	<script src="tic.js"></script>
</head>

<body>
	<div id="main">
		<h1>TIC TAC TOE</h1>
		<p id="ins">
			Game starts by just Tap on
			box<br><br>First Player starts as
			<b>Player X </b>And Second Player as
			<b>Player 0</b>
		</p>
		<br><br>
		<div class = "ui">
			<div class="row">
				<input type="text" id= "b1"
					class="cell" onclick="myfunc_3(); myfunc();"
					readonly>
				<input type="text" id= "b2"
					class="cell" onclick="myfunc_4(); myfunc();"
					readonly>
				<input type="text" id= "b3" class="cell"
					onclick="myfunc_5(); myfunc();"
					readonly>
			</div>
			<div class="row">
				<input type="text" id= "b4"
					class="cell" onclick="myfunc_6(); myfunc();"
					readonly>
				<input type="text" id= "b5"
					class="cell" onclick="myfunc_7(); myfunc();"
					readonly>
				<input type="text" id= "b6"
					class="cell" onclick="myfunc_8(); myfunc();"
					readonly>
			</div>
			<div class="row">
				<input type="text" id= "b7"
					class="cell" onclick="myfunc_9(); myfunc();"
					readonly>
				<input type="text" id= "b8"
					class="cell" onclick="myfunc_10();myfunc();"
					readonly>
				<input type="text" id= "b9"
					class="cell" onclick="myfunc_11();myfunc();"
					readonly>
			</div>
		</div>
		<br><br><br>
		
		<button id="but" onclick="myfunc_2()">
			RESET
		</button>
		<br><br>
		<p id="print"></p>
	</div>
</body>

</html>
