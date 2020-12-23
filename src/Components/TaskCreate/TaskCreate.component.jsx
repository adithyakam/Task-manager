import React,{useState} from 'react'

function TaskCreate({submitText,listId,name}) {

const [list,setList]=useState('')

    const onSubmitForm=e=>{
        e.preventDefault();
        submitText(list,listId,name)
    }
    const addList= e=>{
        setList(e.target.value);
        // console.log(list);

    }

    return (
        <div className="taskcreate" onSubmit={e=>onSubmitForm(e)}>
            <form>
                <input placeholder="add list" type='text' onChange={e =>addList(e)}/>
            </form>
        </div>
    )
}

export default TaskCreate
