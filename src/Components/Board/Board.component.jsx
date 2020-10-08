import React from "react";
import CurrentTask from "../CurrentTask/CurrentTask.component";
import ProgressTask from "../ProgressTask/ProgressTask.component";
import CompletedTask from "../CompletedTask/Completed.component";

import "./Board.css";

function Board({ selectedBoard }) {
  return (
    <div className="board">
      <CurrentTask />
      <ProgressTask />
      <CompletedTask />
    </div>
  );
}

export default Board;
