import React, { useState } from "react";
import "./Boards.css";

function Boards(props) {
  const [name, setName] = useState("");

  const setBoardName = (e) => {
    setName(e.target.value);
    console.log(e.target.value);
  };

  const { boards, addBoard } = props;
  return (
    <div className="main_boards">
      <form onSubmit={(event) => addBoard(name, event)}>
        <label>new board name</label>
        <input onChange={setBoardName} />
      </form>
      <div className="boards">
        {Object.keys(boards).map((ele) => {
          return (
            <div className="ip_board">
              <h1>{ele}</h1>
            </div>
          );
        })}
        <div className="ip_board">
          <h1>{name}</h1>
        </div>
      </div>
    </div>
  );
}

export default Boards;
