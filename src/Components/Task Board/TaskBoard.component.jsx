import React from 'react'
import TaskList from "../TaskList/Tasklist.component"
import { DragDropContext, Droppable } from "react-beautiful-dnd";

import "./TaskBoard.styles.css"

function TaskBoard({data,newNote,submitText}) {

    


    const onDragEnd=(e)=>{
        console.log(e);
    }


   
    return (

        <DragDropContext onDragEnd={onDragEnd}>
        

        <div className="taskboard">
                <Droppable droppableId="all-lists" direction="horizontal" type="list">
                {provided => (
                    <div
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
  <h1>in taskboard</h1>
            <div className="taskboard_container">
            {
                data.map((ele,i)=>(
                <TaskList ele={ele} listId={ele.id} key={ele.id} index={i} newNote={newNote} submitText={submitText}/>

            ))
            }
            {provided.placeholder}

            </div>

            </div>
                )}
                </Droppable>
        </div>
        </DragDropContext>
    )
}

export default TaskBoard
