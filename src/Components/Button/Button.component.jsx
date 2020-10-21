import React from 'react'

function Button({toggleButton}) {
    return (
        <div>
        <button  onClick={e=>{toggleButton("in  true")}}>add</button>
        </div>
    )
}

export default Button
