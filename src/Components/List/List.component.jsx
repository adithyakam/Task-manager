import React,{useState,useEffect} from 'react'
import Button from "../Button/Button.component";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './list.styles.css'


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

    const onDragEnd=(event)=>{
        console.log(event);
    }

    return (
        
        <div className="notes" style={{width:"20%"}}>
        <DragDropContext  className=" drag" onDragEnd={onDragEnd}>

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
        <Droppable droppableId={(str.title)}>
        {(provided)=>(
            <ul  
           {...provided.droppableProps} ref={provided.innerRef}
            style={{width:"100%",backgroundColor:"yellowgreen"}}>
            
            {(notes.length>0)?(
            notes.map((ele,i)=>{
            return (
                <Draggable draggableId={String(ele.id)}  key={ele.id} index={(i)}>
                
                 {   (provided)=>(
                        <li 
                        key={i}
                        style={{backgroundColor:"red",width:"50%",padding:"10px"}}
                        {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef} >
                        {ele.text } 
                        </li>
)}
                </Draggable>)
            })
      
        ):(     
              <> 
            <h1>nonnn</h1> 
            </>)}
                    {provided.placeholder}

            </ul>
        )

        }
        </Droppable>
        
     
        </DragDropContext>
        
        </div>
    )
}

export default List
