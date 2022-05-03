
const stories={
    storycount:['story1','story2','story3']
}

function storiesReducer(state=stories,action){
    switch (action.type) {
        case 'ADD_STORY': return {
            ...state,
            storycount: [...state.storycount,'newstory']
        }
    }
    return state;
}

export default storiesReducer;