import React from "react";

export default function StatusMessage({ winner, current }) {
  const noMoveleft = current.board.every((el) => el !== null);

  return (
    <h2>
      {winner && `Winner is ${winner}`}
      {!winner &&
        !noMoveleft &&
        `Next Player is ${current.isXNext ? "X" : "O"}`}
      {!winner && noMoveleft && "X and O tied"}
    </h2>
  );
}
