const initialData = {
    taskList: ['go to gym in the morning', 'prepare teas', 'fresh fruits to eat']
}


function taskReducer(state = initialData, action) {
    switch (action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                taskList: [...state.taskList, action.payload]
            }
    }
    return state;
}

export default taskReducer;