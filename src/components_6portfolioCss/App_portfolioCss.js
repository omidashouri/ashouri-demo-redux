import React from "react";
import './App_portfolioCss.css';
import Particles from 'react-tsparticles'
import {loadFull} from 'tsparticles'
import {Routes, Route, useLocation} from "react-router-dom";
import Home from "./containers/home";
import About from "./containers/home";
import Skills from "./containers/skills";
import Resume from "./containers/resume";
import Portfolio from "./containers/portfolio";
import Contact from "./containers/contact";
import Navbar from "./components/navBar";
import particlesConfig from "./helpers/particlesConfig";


//npm install react-router-dom sass react-vertical-timeline-component rc-progress react-tsparticles tsparticles react-simple-animate react-icons
function App_portfolioCss() {

    const particlesInit = async (main) => {
        await loadFull(main);
    }

    const location = useLocation();
    const renderParticleJsIfCurrentPageIsHomePage = location.pathname === '/';


    return (
        <div className={'App_portfolioCss'}>

            {/*    particles js*/}
            {
                renderParticleJsIfCurrentPageIsHomePage &&
                <Particles id={'particles'} options={particlesConfig} init={particlesInit}/>
            }


            {/*    nav bar component*/}
            <Navbar/>

            {/*    main page */}
            <Routes>
                {/*    create all routes */}
                <Route path={'/'} index element={<Home/>}/>
                <Route path={'/about'} element={<About/>}/>
                <Route path={'/skills'} element={<Skills/>}/>
                <Route path={'/resume'} element={<Resume/>}/>
                <Route path={'/portfolio'} element={<Portfolio/>}/>
                <Route path={'/contact'} element={<Contact/>}/>

            </Routes>
        </div>
    );
}

export default App_portfolioCss;
