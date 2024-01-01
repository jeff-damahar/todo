import React, {useState} from "react";

function InputArea(props) {

    const [inputext,setInputText] = useState();

    function handel(event) {
        const newValue = event.target.value;
        setInputText(newValue);
    }

    return(
        <div className="form">
            <input onChange={handel} type="text" value={inputext}/>
            <button onClick={()=>{
                props.onAdd(inputext);
                setInputText("")
            }}>
                <span>Add</span>
            </button>
        </div>
    )
}

export default InputArea;
