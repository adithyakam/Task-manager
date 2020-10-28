import React from 'react'
import {Draggable} from 'react-beautiful-dnd'

function Note({ele,i}) {
    return (
        <Draggable draggableId={String(ele.id)}  key={ele.id} index={(i)}>
                 
                  {   (provided)=>(
                         <h1 
                         key={i}
                         style={{backgroundColor:"red",width:"50%",padding:"10px"}}
                         ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                   >
                         {ele.text } 
                         </h1>
 )}
                 </Draggable>
    )
}

export default Note
