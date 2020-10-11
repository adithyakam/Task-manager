import React from "react";
import CurrentTask from "../CurrentTask/CurrentTask.component";
import ProgressTask from "../ProgressTask/ProgressTask.component";
import CompletedTask from "../CompletedTask/Completed.component";

import "./Board.css";

function Board(props) {
  const { updateBoard, boards,selectedBoardName ,removeTask,onDraagOver,onDraagStart,oonDrop} = props;

  return (
    <div className="board">
      <CurrentTask boards={boards} updateBoard={updateBoard} selectedBoardName={selectedBoardName} removeTask={removeTask}
      onDraagStart={onDraagStart} onDraagOver={onDraagOver} oonDrop={oonDrop}
      />
      <ProgressTask boards={boards} updateBoard={updateBoard}        onDraagStart={onDraagStart} onDraagOver={onDraagOver}
 selectedBoardName={selectedBoardName} removeTask={removeTask} oonDrop={oonDrop}/>
      <CompletedTask boards={boards} updateBoard={updateBoard}   oonDrop={oonDrop}    onDraagStart={onDraagStart} onDraagOver={onDraagOver}
 selectedBoardName={selectedBoardName} removeTask={removeTask}/>
    </div>
  );
}

export default Board;
