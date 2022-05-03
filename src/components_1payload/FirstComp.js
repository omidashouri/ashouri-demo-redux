import React from "react";
import {useSelector} from "react-redux";

function FirstComp(){
    const comicobj = useSelector(store => store);

    return(
        <div>
            My Fav comic is {comicobj.comic}
        </div>
    )
}

export default FirstComp;