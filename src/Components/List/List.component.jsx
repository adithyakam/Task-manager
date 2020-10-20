import React,{useState} from 'react'

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
        console.log("sd",dd);
        setToggle(prev =>{
            prev=!prev
        })
    }

    return (
        
        <div className="notes">
       { toggle?(
           <div>
           <button onclick={toggleButton('dd')}>dun</button>

            <form onSubmit={submitNote}>
           <label>input</label>
            <input value={inp} onChange={listValue}/>
             </form>
             </div>
        ):(
            <h1 onclick={toggleButton}>add</h1>

        )}
        
            <h1>{title}</h1>
           {notes?.map(ele=>{
            return <h1>{ele.text}</h1>
           })}
           
     
        </div>
    )
}

export default List
