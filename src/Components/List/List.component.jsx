import React,{useState,useEffect} from 'react'

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
           <button onClick={e=>{toggleButton("in  true")}} >add</button>
                <form onSubmit={submitNote}>
            <label>input</label>
                <input value={inp} onChange={listValue}/>
                </form>
             </div>
        ):(
            <button onClick={e=>{toggleButton("in faalse")}} >add</button>

        )}
        
            <h1>{title}</h1>
           {notes?.map(ele=>{
            return <h1 key={ele.id}>{ele.text }</h1>
           })}
           
     
        </div>
    )
}

export default List
