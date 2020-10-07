import React, { useState } from "react";
import Boards from "./Components/Boards/Boards.component";
import Header from "./Components/Header/Header.component";

import "./App.css";

function App() {
  const [boards, setBoards] = useState({ a: {}, b: {} });

  const addBoard = ({ name, event }) => {
    event.preventDefault();

    console.log(name, "asf");

    setBoards(name);
  };

  return (
    <div className="App">
      <Header />
      <Boards boards={boards} addBoard={addBoard} />
    </div>
  );
}

export default App;
