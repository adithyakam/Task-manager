import React from "react";
import CurrentTask from "../CurrentTask/CurrentTask.component";
import ProgressTask from "../ProgressTask/ProgressTask.component";
import CompletedTask from "../CompletedTask/Completed.component";

import "./Board.css";

function Board(props) {
  const { updateBoard, selectedBoard } = props;

  return (
    <div className="board">
      <CurrentTask selectedBoard={selectedBoard} updateBoard={updateBoard} />
      <ProgressTask selectedBoard={selectedBoard} updateBoard={updateBoard} />
      <CompletedTask selectedBoard={selectedBoard} updateBoard={updateBoard} />
    </div>
  );
}

export default Board;
