import React from 'react'
import { DragDropContext, Droppable ,Draggable} from "react-beautiful-dnd";

import './Card.style.css'

function Card({note,id,index,listId}) {
    return (
        <div>

                <Draggable draggableId={String(id)} index={index}>
        {provided => (
          <div
          className="cardContainer"
          {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <h1>{note.text}</h1>
          </div>
        )}
      </Draggable>
           
        </div>
    )
}

export default Card
