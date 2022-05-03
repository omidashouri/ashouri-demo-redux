

const users={
    usercount:['omid1','omid2']
}

function usersReducer(state=users,action){
    switch (action.type) {
        case 'ADD_USER': return {
            ...state,
            usercount: [...state.usercount,'newuser']
        }
    }
    return state;
}

export default usersReducer;