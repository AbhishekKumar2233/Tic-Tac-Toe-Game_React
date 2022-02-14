import "./styles.scss";
import React, { useState } from "react";
import Board from "./components/Board";
import { calculateWinner } from "./components/helper";

export default function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);

  //winner logic
  const winner = calculateWinner(board);
  console.log(winner);
  const winnerName = winner
    ? `Winner is ${winner}`
    : `Next Player is ${isXNext ? "X" : "O"}`;

  function handleBoard(position) {
    if (board[position]) {
      return;
    }
    setBoard((prev) => {
      return prev.map((square, pos) => {
        if (pos === position) {
          return isXNext ? "X" : "O";
        } else {
          return square;
        }
      });
    });
    setIsXNext((prev) => !prev);
  }

  return (
    <div className="app">
      <h1>Tic Tac Toe Game</h1>
      <h2>{winnerName}</h2>
      <Board board={board} handleBoard={handleBoard} />
    </div>
  );
}
