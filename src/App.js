import React, { useState } from "react";
import Boards from "./Components/Boards/Boards.component";
import Header from "./Components/Header/Header.component";

import "./App.css";

function App() {
  const [boards, setBoards] = useState({ a: {}, b: {} });

  return (
    <div className="App">
      <Header />
      <Boards boards={boards} />
    </div>
  );
}

export default App;
