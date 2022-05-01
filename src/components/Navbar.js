import React from "react";
import {useSelector} from "react-redux";

function Navbar(){

const cartData = useSelector(store => store);
    return(
        <div>
            <h2 className={'mt-5'}>This is Navbar Component: {cartData.cartnum}</h2>
        </div>
    )
}

export default Navbar;