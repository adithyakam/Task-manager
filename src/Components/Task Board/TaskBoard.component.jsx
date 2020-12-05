import React from 'react'
import TaskList from "../TaskList/Tasklist.component"
import { DragDropContext, Droppable } from "react-beautiful-dnd";

import "./TaskBoard.styles.css"

function TaskBoard({data,newNote}) {

    return (

        <div className="taskboard">
            <h1>in taskboard</h1>
            <div className="taskboard_container">
            {
                data.map(ele=>(
                <TaskList ele={ele} newNote={newNote}/>

            ))
            }
            </div>
        </div>
    )
}

export default TaskBoard
