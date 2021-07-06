import React from 'react'

function TodoList(props) {
   
    return (
        <>
        <div className ="todo">
            <button type="submit" className= "btn1" 
            onClick={() => {
                props.onSelect(props.id);
            }}>
                <b>del</b>
                </button>
            <li> {props.text} </li>
            </div>
        </>
    )
}

export default TodoList
