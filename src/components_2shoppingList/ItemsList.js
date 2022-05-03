import React from "react";
import {useSelector} from "react-redux";
import Item from "./Item";


function ItemsList(){
    const itemObject = useSelector(store=>store);
    const items = itemObject.shopcount.map(item=>{
        return (
            <Item item={item}/>
        )
    })
    return(
        <div>{items}</div>
    )
}

export default ItemsList;