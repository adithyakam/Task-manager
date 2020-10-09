import React, { useState, useEffect } from "react";

function CurrentTask() {
  const [list, setlist] = useState([]);
  const [listEle, setListEle] = useState();

  useEffect(() => {
    console.log(list);
  }, [list]);

  const setInput = (e) => {
    let ele = e.target.value;
    setListEle(ele);
  };

  const listadd = (e) => {
    e.preventDefault();
    setlist((prev) => [...prev, listEle]);
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
      {list.length >= 1 ? (
        <div>
          <ul>
            {list.map((ele) => {
              return <li>{ele}</li>;
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
