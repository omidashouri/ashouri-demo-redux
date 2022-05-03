import React, {useState} from "react";
import {useDispatch} from "react-redux";

function SecondComp() {
    const [name, setName] = useState('');

    const dispatch = useDispatch();

    function addcomic() {
        dispatch({type:'ADD_COMIC', payload: name})
    }

    return (
        <div>
            <h2>change your favourite </h2>
            <input type={'text'} placeholder={'enter comic'} value={name} onChange={(e) => setName(e.target.value)}/>
            <button onClick={addcomic}>submit</button>
        </div>
    )
}

export default SecondComp;