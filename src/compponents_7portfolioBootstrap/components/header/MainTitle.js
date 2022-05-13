import React, {useEffect} from "react";
import Vivus from 'vivus';
import omidAnimate from '../../pic/svg/mainTitle.svg'

const MainTitle = ()=>{


    useEffect(()=>{
        new Vivus('main-title', {file: omidAnimate});
    },[])

    return(
        <div id={'main-title'}>

        </div>
    )
}
export default MainTitle;