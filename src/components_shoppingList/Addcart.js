import React, {useState} from "react";
import {useDispatch} from "react-redux";


function Addcart() {
    const dispatch = useDispatch();
    const [itemname, setItemname] = useState('');

    function additem() {
        dispatch({type: 'ADD_ITEM', payload: itemname});
        setItemname('')
    }

    return (
        <div>
            <h2 className={'mt-5 text-black'}>Add items to the List</h2>
            <div className={'row justify-content-center'}>
                <div className={'col-md-6'}>
                    <input type={'text'} value={itemname} onChange={(e) => setItemname(e.target.value)}
                           placeholder={'enter the item '} style={{display: 'inline'}}
                           className={'form-control w-75 m-2'}/>
                    <button onClick={additem} className={'btn btn-success'}>Add Item</button>
                </div>
            </div>
        </div>
    );
}

export default Addcart;