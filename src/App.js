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

  const submitText=(list,listId)=>{
    // e.preventDefault();

    // setListData(prev=>(
    //   ...prev,
      
    // ))

    let newObject=listData.filter(ele=>(ele.id===listId ))
    let newNotes=newObject[0].notes;
    newObject[0]={
      ...newObject[0],
      notes:[
...newNotes,
{
  id:newNotes.length,
  title:"hi in"
}

      ]
    }
    console.log("new",newObject)

}


  return (
    <div className="App">
     <Header/> 
      <TaskBoard data={listData} newNote={newNote} submitText={submitText}/>
    </div>
  );
}

export default App;
