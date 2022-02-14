import React, { useState } from "react";
import Square from "./Square";

function Board() {
  const [board, setBoard] = useState(Array(9).fill(null));
  console.log(board);

  function handleBoard() {
    console.log("hYY");
  }

  const renderSquare = (position) => {
    return (
      <Square
        value={board[position]}
        onClick={() => {
          handleBoard(position);
        }}
      />
    );
  };

  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(6)}
      </div>
      <div className="board-row">
        {renderSquare(7)}
        {renderSquare(8)}
        {renderSquare(9)}
      </div>
    </div>
  );
}
export default Board;
