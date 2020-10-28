import React,{useState,useEffect} from 'react'

import './list.styles.css'
import Uniqlist from '../Uniqlist/Uniqlist.component';


function List({str,addNote,key}) {

    return (
        
        <div className="notes" style={{width:"20%"}}>
        <Uniqlist str={str} addNote={addNote} key={key}/>
        </div>
    )
}

export default List
