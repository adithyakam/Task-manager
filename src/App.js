import React, { useState, useEffect } from "react";
import Header from "./Components/Header/Header.component"
import List from "./Components/List/List.component"


import "./App.css";

import data from "./DataList"

function App() {
  const [list,setList ]= useState(data)


  const addNote=(text,title)=>{
// console.log(ele,title);

    data.map(ele=>{
      if(ele.title===title){
        ele.notes.push(
          {
            id:ele.notes.length,
            text:text
          }
        )
      }
    }
    )

  }
 
  return (
    <div className="App">
    <Header/>
    <div className='lists'>
       { data.map((str) => {
           return <List str={str} addNote={addNote}/> 
    })}
    </div>
    </div>
  );
}

export default App;
