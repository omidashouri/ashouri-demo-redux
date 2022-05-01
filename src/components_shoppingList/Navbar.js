import React from "react";
import {useSelector} from "react-redux";


function Navbar(){
    const shopObj = useSelector(store=>store);
    return(
        <div>
            <h1 className={'m-3 text-black'}>Shopping List Using Redux</h1>
            <h2 className={'m-3 text-black'}>Cart Count : {shopObj.shopcount.length}</h2>
        </div>
    )
}

export default Navbar;