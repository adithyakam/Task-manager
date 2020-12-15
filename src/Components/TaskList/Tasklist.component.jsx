import React,{useState} from 'react'
import Card from "../Card/Card.component"
import { DragDropContext, Droppable ,Draggable} from "react-beautiful-dnd";


import "./Tasklist.style.css"

function Tasklist({ele,newNote,listId,index}) {
     const [text, settext] = useState("")

const textAdd=(e)=>{
    // console.log(e.target.value);
    settext(e.target.value)
}

const submitText=(e,title)=>{
    e.preventDefault();
    console.log(text);
    newNote(text,title)
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
