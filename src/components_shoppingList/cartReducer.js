import React from "react";

const initialCart={
    shopcount:[]
}

function cartReducer(state=initialCart,action){
    switch (action.type) {
        case 'ADD_ITEM' : return {
            ...state,
            shopcount: [...state.shopcount,action.payload]
        }

    }
    return state;
}

export default cartReducer;