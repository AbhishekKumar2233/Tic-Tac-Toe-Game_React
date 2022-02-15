import "./styles.scss";
import React, { useState } from "react";
import Board from "./components/Board";
import History from "./components/History";
import StatusMessage from "./components/StatusMessage";
import { calculateWinner } from "./components/helper";

export default function App() {
  const [history, setHistory] = useState([
    { board: Array(9).fill(null), isXNext: true }
  ]);

  const [currentMove, setCurrentMove] = useState(0);
  const current = history[currentMove];

  //winner logic
  const winner = calculateWinner(current.board);
  console.log(winner);
  // const winnerName = winner
  //   ? `Winner is ${winner}`
  //   : `Next Player is ${current.isXNext ? "X" : "O"}`;

  function handleBoard(position) {
    if (current.board[position] || winner) {
      return;
    }
    setHistory((prev) => {
      const last = prev[prev.length - 1];

      const newBoard = last.board.map((square, pos) => {
        if (pos === position) {
          return last.isXNext ? "X" : "O";
        }
        return square;
      });
      return prev.concat({ board: newBoard, isXNext: !last.isXNext });
    });
    setCurrentMove((prev) => prev + 1);
  }

  const moveTo = (move) => {
    setCurrentMove(move);
  };

  const NewGame = [{ board: Array(9).fill(null), isXNext: true }];

  function Restart() {
    setHistory(NewGame);
    setCurrentMove(0);
  }

  return (
    <div className="app">
      <h1>Tic Tac Toe Game</h1>
      <StatusMessage winner={winner} current={current} />
      <Board board={current.board} handleBoard={handleBoard} />
      <button onClick={Restart}>Restart</button>

      <History history={history} moveTo={moveTo} currentMove={currentMove} />
    </div>
  );
}
