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
  let [selectedBoardName,setSelectedBoardName] = useState("");
  let [dragableItem,setDragableItem] = useState({})


  useEffect(() => {
    console.log(boards,"asfdasdfwesa");
    // for (const [key, value] of Object.entries(boards)) {  
    //   if(key===selectedBoardName){
    //   setSelectedBoard(value);
    // }}
console.log(len,"ength");
  }, [boards,selected,setSelectedBoardName,len]);

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

  const   onDraagOver=(e)=>{
    e.preventDefault();
      }

      const onDraagStart =(e,ele)=>{
        console.log("dragStart",ele);
        e.dataTransfer.setData("id", ele)

      }

      const oonDrop = (ev, start,finish) => {         
        let id = ev.dataTransfer.getData("id"); 
        console.log(id,start,finish);
        //  let tasks = this.state.tasks.filter((task) => {      
        //    if (task.name == id) {             
        //        task.category = cat;                
        //        }                     return task;       
        //          });        
        //             this.setState({                 ...this.state,                 tasks          });  
        }

  const removeTask=(event,index,lvl)=>{
    for (const [key, value] of Object.entries(boards)) { 

      if(key===selectedBoardName){
        const ele=value[lvl][index];
        // console.log(value[lvl].splice(index,1),index,"valllue");
          setBoards(prev=>({
            ...prev,
            [selectedBoardName]:{...value,[lvl]:[...value[lvl].filter((item,i)=>i!=index)]}
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
          <Board boards={boards} updateBoard={updateBoard} oonDrop={oonDrop} selectedBoardName={selectedBoardName} onDraagStart={onDraagStart} removeTask={removeTask} onDraagOver={onDraagOver} />
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
