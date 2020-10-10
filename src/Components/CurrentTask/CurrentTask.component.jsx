import React, { useState, useEffect } from "react";

function CurrentTask(props) {
  const { updateBoard, boards ,selectedBoardName,removeTask} = props;

  const [list, setlist] = useState([]);
  const [listEle, setListEle] = useState("");

 
  const setInput = (e) => {
    let ele = e.target.value;
    setListEle(ele);
  };

  const listadd = (e) => {
    e.preventDefault();
    updateBoard(listEle, "current");
    // setMovies(prevMovies => ([...prevMovies, ...result]));
    // console.log(list);
    setListEle("");
  };

  return (
    <div className="current">
      <h1>CurrentTask</h1>
      <form
        onSubmit={(event) => {
          listadd(event);
        }}
      >
        <label>add taask</label>
        <input
          value={listEle}
          onChange={(e) => {
            setInput(e);
          }}
        />
      </form>
      {boards[selectedBoardName].current.length >= 1 ? (
        <div>
          <ul>
            {boards[selectedBoardName].current.map((ele,i) => {
              return (
                <div >
                <li  >{ele}
                <img src="" alt="del" onClick={(e)=>{
                  removeTask(e,i,"current")
                }}/>
                </li>
                </div>
              )
            })}
          </ul>
        </div>
      ) : (
        <h1>no tasks</h1>
      )}
    </div>
  );
}

export default CurrentTask;
