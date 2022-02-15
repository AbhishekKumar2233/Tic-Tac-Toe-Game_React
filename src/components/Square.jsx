import React from "react";

function Square({ value, onClick, isWinningSquare }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`square ${isWinningSquare ? "winning" : ""} ${
        value === "X" ? "text-green" : "text-orange"
      }`}
      // style={{
      //   color: isWinningSquare ? "green" : "black",
      //   fontWeight: isWinningSquare ? "bold" : "normal"
      // }}
    >
      {value}
    </button>
  );
}
export default Square;
