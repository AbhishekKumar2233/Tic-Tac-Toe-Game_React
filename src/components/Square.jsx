import React from "react";

function Square({ value }) {
  return (
    <button
      type="button"
      className="square"
      onClick={() => {
        console.log(value);
      }}
    >
      {value}
    </button>
  );
}
export default Square;
