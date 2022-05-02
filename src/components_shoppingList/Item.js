import React, {useState} from "react";
import {useDispatch} from "react-redux";


function Item({item}) {

    const [show, setShow] = useState('none');
    const [newitem, setNewitem] = useState('');
    const dispatch = useDispatch();

    function edititem() {
        setShow('inline');
    }

    function submit() {
        dispatch({type: 'SUBMIT', payload: {olditem: item, newitem: newitem}});
        setShow('none')
        setNewitem('');
    }

    function deleteitem(item) {
        dispatch({type: 'DELETE_ITEM', payload: item});
    }

    return (
        <div>
            <div className={'mt-5 row justify-content-center'}>
                <div className={'col-md-8'}>
                    <h1 className={'text-black'}>{item}</h1>
                </div>
                <div className={'col-md-4'}>
                    <button className={'btn btn-primary md-2'} onClick={edititem}>Edit</button>
                    <button className={'btn btn-danger md-2'} onClick={()=>deleteitem(item)}>Delete</button>
                </div>
                <div className={'col-md-8'}>
                    <input type={'text'} style={{display: show}} value={newitem}
                           onChange={(e) => setNewitem(e.target.value)}/>
                    <button style={{display: show}} onClick={submit} className={'btn btn-warning m-2'}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Item;