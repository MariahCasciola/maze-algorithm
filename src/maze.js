/**
 * Return a string representing the path through the maze.
 * @param {array} maze
 * @param {array} index The starting point
 */
// array with an array is a matrix

/* 
 let maze = [
    [" ", " ", " "],
    [" ", "*", " "],
    [" ", " ", "e"],
 ]

 maze[0][0] how to get the first " "

 let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];
possible path: RRDDLLDDRRRRRR
*/

//***************************** psuedo code******************************
//  start point
// end point
// mark where you have been

// base case
// are we in a valid spot ("in bounds, have we been to a spot, is it a wall->"*")
// check if we are at the end "e"

// mark where we have been

//movement time
// can we move left, up, right, down

function mazeSolver(maze, position = [0, 0], path = "") {
  // get current row and column
  let row = position[0];
  let column = position[1]; 

  /*check if we are out bounds of the maze || we ARE hitting a blocked cell */
  if (!inBounds() || isBlockedCell()) {
    return;
  }

  /*check if the current position is exit*/
  if (maze[row][column] === "e") {
    // path will give us our directional input in the form of RLUD
    return path;
  }

  // mark the current cell as visited, marked *
  maze[row][column] = "*";
  //initialize result variable
  let result = "";

  // Recursive calls
  // if the direction is invalid result gets set to undefined
  // if truthy keep going and if false check other directions

  result = mazeSolver(maze, [row, column - 1], path + "L"); //left
  if (result) return result;

  result = mazeSolver(maze, [row - 1, column], path + "U"); //up
  if (result) return result;

  result = mazeSolver(maze, [row, column + 1], path + "R"); //right
  if (result) return result;

  result = mazeSolver(maze, [row + 1, column], path + "D"); //down
  if (result) return result;

  // Backtrack by unmarking the current cell
  maze[row][column] = " ";

  //   helper function to check if postition is in bounds
  function inBounds() {
    const mazeHeight = maze.length;
    const mazeLength = maze[0].length;
    return row >= 0 && column >= 0 && row < mazeHeight && column < mazeLength;
  }

  //   helper function to check if 
  function isBlockedCell() {
    return maze[row][column] === "*";
  }
}

module.exports = mazeSolver;
