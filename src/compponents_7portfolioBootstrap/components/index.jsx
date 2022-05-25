import React from "react";
import Header from "./header";
import About from "./about";
import ProgressBarComponent from "./progressbar/";
import Resume from "./resume";
import Portfolio from "./portfolio";
import Services from "./services";
import Counter from "./counter";
import Testimonials from "./testimonials";


const Main = ()=>{
    return(
        <>
            <Header/>
            <About/>
            <ProgressBarComponent/>
            <Resume/>
            <Portfolio/>
            <Services/>
            <Testimonials/>
        </>
    )
}

export default Main;