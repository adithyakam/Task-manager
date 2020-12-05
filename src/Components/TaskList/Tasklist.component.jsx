import React,{useState} from 'react'
import Card from "../Card/Card.component"

import "./Tasklist.style.css"

function Tasklist({ele,newNote}) {
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
        <div className='tasklist'>
            <h1>title: {ele.title}</h1>
            
            <form onSubmit={e=>submitText(e,ele.title)}>
                <input onChange={event=>textAdd(event)}/>
            </form>

            {
                ele.notes.map(note=>(
                    <Card note={note} />
                ))
            }

        </div>
    )
}

export default Tasklist
