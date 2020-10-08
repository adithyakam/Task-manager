import React, { useState } from "react";
import Boards from "./Components/Boards/Boards.component";
import Header from "./Components/Header/Header.component";

import "./App.css";

function App() {
  let [boards, setBoards] = useState({});
  let [len, setLen] = useState(0);

  const addBoard = (name) => {
    console.log(name, "asf");

    setBoards((prev) => ({ ...prev, [name]: {} }));
    setLen(len++);
  };

  return (
    <div className="App">
      <Header />
      <Boards boards={boards} addBoard={addBoard} len={len} />
    </div>
  );
}

export default App;
