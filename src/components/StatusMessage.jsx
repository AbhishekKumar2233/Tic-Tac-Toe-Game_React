import React from "react";

export default function StatusMessage({ winner, current }) {
  return (
    <h2>
      {winner && `Winner is ${winner}`}
      {!winner && `Next Player is ${current.isXNext ? "X" : "O"}`}
    </h2>
  );
}
