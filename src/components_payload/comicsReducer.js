const initialData={
    comic:'DC Comics'
}

function comicsReducer(state=initialData, action){
    switch (action.type) {
        case 'ADD_COMIC': return {
            comic: action.payload
        }

    }
    return state
}

export default comicsReducer;

