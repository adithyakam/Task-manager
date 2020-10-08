import React, { useState } from "react";
import Boards from "./Components/Boards/Boards.component";
import Header from "./Components/Header/Header.component";
import Board from "./Components/Board/Board.component";

import "./App.css";

function App() {
  let [boards, setBoards] = useState({});
  let [len, setLen] = useState(0);
  let [selectedBoard, setSelectedBoard] = useState({});
  let [selected, setSelected] = useState(false);

  const addBoard = (name) => {
    console.log(name, "asf");

    setBoards((prev) => ({ ...prev, [name]: {} }));
    setLen(len++);
  };

  const boardSelected = (ele) => {
    console.log(ele);
    setSelectedBoard(ele);
    setSelected(true);
  };

  return (
    <div className="App">
      <Header />

      {selected ? (
        <>
          <Board selectedBoard={selectedBoard} />
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
