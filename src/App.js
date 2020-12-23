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


  useEffect(() => {
   console.log(listData);
  }, [listData])

  const submitText=(list,listId ,name)=>{
      console.log("insubmit",list,name,listId)
      if(name === "list"){
        let newdatalist=[...listData,{
          title:list,
          id:"0"+(listData.length+1),
          notes:[]
        }]

        console.log("inlist",newdatalist);
        setListData(newdatalist)
      }else{
        
    let newObject=listData.filter(ele=>(ele.id===listId ))
    let newNotes=newObject[0].notes;
    newObject[0]={
      ...newObject[0],
      notes:[
...newNotes,
{
  id:`${listId}`+newNotes.length,
  text:list
}

      ]
    }

  const newList=listData.map(ele=>(
    (ele.id===listId)?{
     ...newObject[0]
    }:{ ...ele}
     
    )
  )

const newL=Object.assign([],listData,newList)



    setListData(newL)


      }

}


  return (
    <div className="App">
     <Header/> 
      <TaskBoard data={listData} newNote={newNote} submitText={submitText}/>
    </div>
  );
}

export default App;
