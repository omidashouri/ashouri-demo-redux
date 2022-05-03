
const posts={
    postcount:['post1']
}

function postsReducer(state=posts,action){
    switch (action.type) {
        case 'ADD_POST': return {
            ...state,
            postcount: [...state.postcount,'newpost']
        }
    }
    return state;
}

export default postsReducer;