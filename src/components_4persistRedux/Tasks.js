import React from "react";
import {useSelector} from "react-redux";

function Tasks(){
    const taskObj = useSelector(store => store.taskReducer);

    const taskList = taskObj.taskList.map((task)=>{
        return <h2>{task}</h2>;
    })

    return(
        <div>
            <h2>Tasks will be displayed here: </h2>
            {taskList}
        </div>
    )
}

export default Tasks;