import React, { useState } from "react";

function CurrentTask() {
  const [list, setlist] = useState([]);
  const [listEle, setListEle] = useState();

  const setInput = (e) => {
    let ele = e.target.value;
    console.log(ele);
    setListEle(ele);
  };

  const listadd = (e) => {
    e.preventDefault();
    setlist((list) => [...list, listEle]);
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
      <div>
        <ul>
          <li>a</li>
          <li>11</li>
        </ul>
      </div>
    </div>
  );
}

export default CurrentTask;
