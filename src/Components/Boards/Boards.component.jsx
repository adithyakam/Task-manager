import React, { useState } from "react";
import "./Boards.css";

function Boards({ boards, addBoard, len }) {
  let [name, setName] = useState("");
  let boardsList = Object.keys(boards);

  const submitToBoards = (e) => {
    e.preventDefault();

    addBoard(name);
    setName("");
  };

  const setBoardName = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="main_boards">
      <form onSubmit={(event) => submitToBoards(event)}>
        <label>new board name</label>
        <input value={name} onChange={setBoardName} />
      </form>

      <div className="boards">
        {boardsList.length > 0 ? (
          <div className="boards">
            {boardsList.map((ele) => {
              return (
                <div className="ip_board">
                  <h1>{ele}</h1>
                  <button>open</button>
                </div>
              );
            })}
          </div>
        ) : (
          <h1>No boards to display </h1>
        )}
        {name.length > 0 ? (
          <div>
            <div className="ip_board">
              <label>add board</label>
              <h1>{name}</h1>
              <button disabled>open</button>
            </div>
          </div>
        ) : (
          <h1>asd</h1>
        )}
      </div>
    </div>
  );
}

export default Boards;
