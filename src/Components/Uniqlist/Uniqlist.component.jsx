import React,{useState} from 'react'
import Button from "../Button/Button.component";
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import Note from '../../Notes/Note.component';

import  "./Uniquelist.styles.css"


function Uniqlist({str,addNote,key}) {
    const {title,notes,id}=str;
    const [inp, setinp] = useState("");
const [toggle,setToggle] = useState(false);

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
if (!event.destination) {
   return event;
  }
}


    return (
<div                 class="drpable" 
>
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

         <DragDropContext  className=" drag" onDragEnd={onDragEnd} >

         <Droppable droppableId={String(id)} type="PERSON" index={key} >
         {(provided)=>(
             <div  
                ref={provided.innerRef}
                {...provided.droppableProps}
                style={{width:"100%",backgroundColor:"yellowgreen"}}>
             
             {(notes.length>0)?(
               
             notes.map((ele,i)=>{
             return (
                 <Note ele={ele} i={i} />
                 )
             })
             
             

         ):(     
               <> 
             <h1
             {...provided.droppableProps} ref={provided.innerRef}>nonnn</h1> 
             </>)
             }
             {provided.placeholder}

             </div>
         )
 
         }
         </Droppable>
         </DragDropContext>
</div>
    )
    
}

export default Uniqlist
