import React from "react";
import {useDispatch} from "react-redux";


function Itemscomp() {

    const dispatch = useDispatch()

    function additem() {
        dispatch({type: 'ADD_ITEM'})
    }

    function removeitem() {
        dispatch({type: 'REMOVE_ITEM'})
    }

    return (
        <div>
            <h2 className={'mt-4'}>Items Component</h2>
            <button onClick={additem} className={'btn btn-success'}>Add Item</button>
            <button onClick={removeitem} className={'btn btn-danger'}>Remove Item</button>
        </div>
    )
}

export default Itemscomp;