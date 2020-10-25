import React,{useState,useEffect} from 'react'
import Button from "../Button/Button.component";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';



function List({str,addNote}) {

    const {title,notes,id}=str;
    const [inp, setinp] = useState("");
    const [toggle,setToggle] = useState(false)


    const listValue=(event)=>{

            setinp(event.target.value)
    }

    const submitNote=(event)=>{
        event.preventDefault();
        addNote(inp,title);
        setinp("")
    }

    const toggleButton=(dd)=>{
       setToggle(!toggle)
    }

    return (
        
        <div className="notes">
       { toggle===true?(
           <div style={{backgroundColor:"yellow"}}>
            <Button toggleButton={toggleButton}/>
                    <form onSubmit={submitNote}>
            <label>input</label>
                <input value={inp} onChange={listValue}/>
                </form>
             </div>
        ):(
            <Button toggleButton={toggleButton}/>
      
        )}
        <h1>{title}</h1>
        <DragDropContext>
        <Droppable droppableId={String(id)}>
        {(provided)=>(
            <div>
            {(notes.length>0)?(
        <div {...provided.droppableProps} ref={provided.innerRef}>
            {notes.map((ele,i)=>{

            return (
                <Draggable draggableId={String(i)} index={id}>
                
                 {   (provided)=>(
                        <h1 key={ele.i} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                        {ele.text }
                        </h1>
)}
                    
                
                </Draggable>
)
            })}
        </div>
        ):(     
              <> 
            <h1>nonnn</h1> 
            </>)}
                    {provided.placeholder}

            </div>
        )

        }
        </Droppable>
        
     
        </DragDropContext>
        
        </div>
    )
}

export default List
