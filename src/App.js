import React, { useState, useEffect } from "react";
import Boards from "./Components/Boards/Boards.component";
import Header from "./Components/Header/Header.component";
import Board from "./Components/Board/Board.component";

import "./App.css";

function App() {
  let [boards, setBoards] = useState({});
  let [len, setLen] = useState(0);
  // let [selectedBoard, setSelectedBoard] = useState({});
  let [selected, setSelected] = useState(false);
  let [selectedBoardName,setSelectedBoardName] = useState("")

  useEffect(() => {
    console.log(boards,"asfdasdfwesa");
    // for (const [key, value] of Object.entries(boards)) {  
    //   if(key===selectedBoardName){
    //   setSelectedBoard(value);
    // }}
  }, [boards,selected,setSelectedBoardName]);

  const addBoard = (name) => {
    console.log(name, "asf");

    setBoards((prev) => ({
      ...prev,
      [name]: { current: ["ab"], progress: ["b"], completed: ["c"] },
    }));
    setLen(prev=>prev+1);
  };

  const updateBoard = (ele, lvl) => {
    // const update = selectedBoard[lvl];
    for (const [key, value] of Object.entries(boards)) {  
      // console.log(selectedBoardName,"selected")
      if(key===selectedBoardName){
          setBoards(prev=>({
            ...prev,
            [selectedBoardName]:{...value,[lvl]:[...value[lvl],ele]}
          }))
    }
  }
   

  };

  const removeTask=(ele,index,lvl)=>{
    for (const [key, value] of Object.entries(boards)) {  
      console.log(value[lvl],len,"value")
      if(key===selectedBoardName){
          setBoards(prev=>({
            ...prev,
            [selectedBoardName]:{...value,[lvl]:value[lvl].slice(index,value[lvl].length)}
          }))
    }
  }
      
  }

  const boardSelected = (ele) => {
    // setSelectedBoard(boards[ele]);
    for (const [key, value] of Object.entries(boards)) {  
      if(key===ele){
      // setSelectedBoard(value);
        setSelectedBoardName(ele)

    }
  }
    setSelected(true);
  };

  return (
    <div className="App">
      <Header />

      {selected ? (
        <>
          <Board boards={boards} updateBoard={updateBoard} selectedBoardName={selectedBoardName} removeTask={removeTask}/>
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
