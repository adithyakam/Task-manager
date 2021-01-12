import React,{useState} from 'react'

import "./TaskCreate.style.css"

function TaskCreate({submitText,listId,name}) {

const [list,setList]=useState('')

    const onSubmitForm=e=>{
        e.preventDefault();
        console.log(list,"Asdfasdf")
        submitText(list,listId,name)
        setList("")
    }
    const addList= e=>{
        setList(e.target.value);
        // console.log(list);

    }

    return (
        <div className="createTask">
            <form onSubmit={(e)=>onSubmitForm(e)}  >
                <textarea className="taskcreate" value={list} placeholder={name} type='text' onChange={e =>addList(e)}/>
                <input type="submit" id="submitForm" value="ADD"/>
            </form>
        </div>
    )
}

export default TaskCreate
