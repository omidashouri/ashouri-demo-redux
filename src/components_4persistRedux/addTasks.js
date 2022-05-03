import React, {useState} from "react";
import {useDispatch} from "react-redux";


function AddTasks(){
    const [task, setTask] = useState('');
    const dispatch = useDispatch();

    function addtask() {
        dispatch({type:'ADD_TASK',payload:task})
    }

    return (
        <div>
            <h1>Belo Type to add task</h1>
            <input type={'text'} placeholder={'add task'}
                   value={task}
                   onChange={(e) => setTask(e.target.value)}/>
            <button onClick={addtask}>Add Task</button>
        </div>
    );
}

export default AddTasks;