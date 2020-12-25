import React,{useState} from 'react'
import TaskList from "../TaskList/Tasklist.component"
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import TaskCreate from '../TaskCreate/TaskCreate.component'

import "./TaskBoard.styles.css"

function TaskBoard({data,newNote,submitText}) {
const [isOpen, setisOpen] = useState(true)

const changeOpennewList=()=>{
    setisOpen(prev=>(!prev))
}



const onDragEnd=(e)=>{
    console.log(e)
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

           { (isOpen)?(
                <AddCircleIcon onClick={changeOpennewList}/>

            ):(
                <div>
                    <RemoveCircleIcon onClick={changeOpennewList}/>
                    <TaskCreate submitText={submitText} name="list"/>

                </div>

            )}
            </div>

            </div>
                )}
                </Droppable>
        </div>
        </DragDropContext>
    )
}

export default TaskBoard
