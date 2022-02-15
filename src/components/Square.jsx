import React from "react";

function Square({ value, onClick, isWinningSquare }) {
  return (
    <button
      type="button"
      className="square"
      onClick={onClick}
      style={{
        color: isWinningSquare ? "green" : "black",
        fontWeight: isWinningSquare ? "bold" : "normal"
      }}
    >
      {value}
    </button>
  );
}
export default Square;
