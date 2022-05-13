import React from "react";
import OmidPic from '../../pic/omidashouri.jpg';
import './header.css'
import MainTitle from "./MainTitle";

const Header = () => {
    return (
        <div className={'header'}>
            <img src={OmidPic} alt={'Omid Ashouri picture'}/>
            {/*<h1 className={'main-title'}>Portfolio Porject ..</h1>*/}
            <MainTitle/>
        </div>
    )

}

export default Header;