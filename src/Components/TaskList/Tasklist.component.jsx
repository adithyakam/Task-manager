import React,{useState} from 'react'
import Card from "../Card/Card.component"
import TaskCreate from '../TaskCreate/TaskCreate.component'
import { DragDropContext, Droppable ,Draggable} from "react-beautiful-dnd";


import "./Tasklist.style.css"

function Tasklist({ele,newNote,listId,index,submitText}) {
     const [text, settext] = useState("")

const textAdd=(e)=>{
    // console.log(e.target.value);
    settext(e.target.value)
}


    return (

      <Draggable draggableId={String(listId)} index={index}>
      {provided => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
<Droppable droppableId={String(listId)} type="card">
            {provided => (
              <div className='listContainer'>
              <h1 id="ListTitle">{ele.title.toUpperCase()}</h1>
                <div  {...provided.droppableProps} ref={provided.innerRef}>
                  {ele.notes.map((card, index) => (
                    <Card
                      key={card.id}
                      note={card}
                      id={card.id}
                      index={index}
                      listId={listId}
                    />
                  ))}
                  {provided.placeholder}
                  <TaskCreate   classname="input" submitText={submitText} listId={listId} name="card"/>
                </div>
              </div>
            )}
          </Droppable>
        </div>
      )}
      </Draggable>

    )
}

export default Tasklist
