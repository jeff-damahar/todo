import React, {useState} from "react";
import "./App.css"
import TodoItems from "./TodoItems";
import InputArea from "./InputArea";


function App() {
    const [items,setItems] = useState([]);

    function handelPress(inputext) {
        setItems((prev)=>{
            return [...prev,inputext]
        })
    }

    function deleteitem(id) {
        setItems((prev)=>{
            return prev.filter(
                (item,index)=>{
                    return index !== id;
                }
            )
        })
    }

    return (
        <div className="container">
            <div className="heading">
                <h1>To-Do List</h1>
            </div>
            <InputArea
            onAdd={handelPress}
            />
            <div>
                <ul>
                    {items.map((todoitems, index) => (
                        <TodoItems
                            key={index}
                            id={index}
                            text={todoitems}
                            onChecked={deleteitem}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;
