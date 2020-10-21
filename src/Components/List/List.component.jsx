import React,{useState,useEffect} from 'react'
import Button from "../Button/Button.component";

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

        {(notes.length>0)?(
        <>
            {notes.map(ele=>{
            return <h1 key={ele.id}>{ele.text }</h1>
            })}
        </>
        ):(     
              <> 
            <h1>nonnn</h1> 
            </>)}
     
        </div>
    )
}

export default List
