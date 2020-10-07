import React from "react";
import "./Boards.css";

function Boards(props) {
  const { boards } = props;
  return (
    <div className="boards">
      {Object.keys(boards).map((ele) => {
        return (
          <div className="ip_board">
            <h1>{ele}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default Boards;
