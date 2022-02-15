import React from "react";

export default function StatusMessage({ winner, current }) {
  const noMoveleft = current.board.every((el) => el !== null);

  return (
    <div className="status-message">
      {winner && (
        <>
          Winner is {""}
          <span className={winner === "X" ? "text-green" : "text-orange"}>
            {winner}
          </span>
        </>
      )}
      {!winner && !noMoveleft && `Now Player is ${current.isXNext ? "X" : "O"}`}
      {!winner && noMoveleft && "X and O tied"}
    </div>
  );
}
