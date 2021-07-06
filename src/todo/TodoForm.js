import React, {useState} from 'react'
import TodoList from "./TodoList"

export default function Main() {
    const [inputList, setInputList] = useState("");
    const [items, setItems] = useState([]);
    const itemEvent =(e)=> {
        setInputList(e.target.value)

    };

    const list = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList];
        })
        setInputList("");

    }

    const deleteItem =(id) =>{
        setItems((oldItems) => {
            return oldItems.filter((arrElement, index) =>{
                return index !== id;

            })
        })

    }
    return (
        <>
        <div className = "main">
            <div className="block">
        <h1 className="head">To Do List</h1>
        <br />
        <input type="text" placeholder="Add item" 
        onChange={itemEvent}
        value={inputList} className="input" />
        <button type="submit" onClick={list} className="btn">Submit</button>


        <ol>
            {/* <li>{inputList} </li> */}

            {items.map((itemVal, index) => {
              return <TodoList 
              key ={index} 
              id={index}
              text = {itemVal}
              onSelect = {deleteItem} />
            })}
        </ol>
        </div>
        </div>  
        </>
    )
}