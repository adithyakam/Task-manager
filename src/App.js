import React, { useState, useEffect } from "react";
import Header from "./Components/Header/Header.component"
import List from "./Components/List/List.component"


import "./App.css";

import data from "./DataList"

function App() {
  const [list,setList ]= useState(data)
 
  return (
    <div className="App">
    <Header/>
       { data.map((str) => {
           return <List /> 
    })}
    </div>
  );
}

export default App;
