import React, { useState, useEffect } from "react";
import Header from "./Components/Header/Header.component"
import List from "./Components/List/List.component"
import Button from "./Components/Button/Button.component";



import "./App.css";

import data from "./DataList"

function App() {
  const [list,setList ]= useState(data);
  const [newList,setNewList ] =useState("")

  useEffect(() => {
    console.log(list)
  }, [list,newList])


  const addNote=(text,title)=>{
console.log(title,"sdsd");

const dummy=list;

    dummy.map(ele=>{
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
    
    setList(dummy);



  }
  const addList=(event)=>{
      setNewList(event.target.value);

  }

  const addNewList=(event)=>{
    event.preventDefault();

    const a={
      title: newList,
      id:addList.length+1,
      notes:[]
    }
  
    setList(prev=>[...prev,a])

  }

  return (
    <div className="App">
    <Header/>
    <div className='lists'>
       { list.map((str,i) => {
           return <List str={str} addNote={addNote} key={i}/> 
    })}

    <form  onSubmit={addNewList}>
      <input onChange={(addList)} />
    </form>

    </div>

    </div>
  );
}

export default App;
