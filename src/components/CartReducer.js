

const initialVar = {
    cartnum: 0
}


function CartReducer(state=initialVar,action){
    switch (action.type){
        case 'ADD_ITEM' :
            return {
            cartnum: ++state.cartnum
        }
        case 'REMOVE_ITEM' : return {
            cartnum: --state.cartnum
        }
        default: return state
    }
    return state;
}

export default CartReducer;