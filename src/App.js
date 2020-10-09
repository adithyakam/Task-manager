import React, { useState, useEffect } from "react";
import Boards from "./Components/Boards/Boards.component";
import Header from "./Components/Header/Header.component";
import Board from "./Components/Board/Board.component";

import "./App.css";

function App() {
  let [boards, setBoards] = useState({});
  let [len, setLen] = useState(0);
  let [selectedBoard, setSelectedBoard] = useState({});
  let [selected, setSelected] = useState(false);

  useEffect(() => {
    console.log(boards);
  }, [boards]);

  const addBoard = (name) => {
    console.log(name, "asf");

    setBoards((prev) => ({
      ...prev,
      [name]: { current: ["ab"], progress: ["b"], completed: ["c"] },
    }));
    setLen(len++);
    // console.log(boards, "booooo");
  };

  const updateBoard = (ele, lvl) => {
    console.log(selectedBoard, ele, lvl, "listttt");
    const update = selectedBoard[lvl];
    console.log(selectedBoard[lvl], "uppp");

    setSelectedBoard((prev) => ({ ...prev }));
  };

  const boardSelected = (ele) => {
    console.log(ele, "selectedBord");
    setSelectedBoard(boards[ele]);
    setSelected(true);
  };

  return (
    <div className="App">
      <Header />

      {selected ? (
        <>
          <Board selectedBoard={selectedBoard} updateBoard={updateBoard} />
        </>
      ) : (
        <>
          <Boards
            boards={boards}
            addBoard={addBoard}
            len={len}
            boardSelected={boardSelected}
          />
        </>
      )}
    </div>
  );
}

export default App;
