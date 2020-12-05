import React, { useState, useEffect } from "react";
import Header from "./Components/Header/Header.component"
import  TaskBoard from "./Components/Task Board/TaskBoard.component"

import "./App.css";

import data from "./DataList"


function App() {
  const [listData,setListData] =useState(data)

  const newNote=(note)=>{
    console.log("in noe add",note);

  }

  return (
    <div className="App">
     <Header/> 
      <TaskBoard data={listData} newNote={newNote}/>
    </div>
  );
}

export default App;
