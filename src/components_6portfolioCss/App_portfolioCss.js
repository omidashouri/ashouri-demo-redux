import React from "react";
import './App_portfolioCss.css';
// import 'bootstrap/dist/css/bootstrap.min.css'
import {Routes, Route} from "react-router-dom";
import Home from "./containers/home";
import About from "./containers/home";
import Skills from "./containers/skills";
import Resume from "./containers/resume";
import Portfolio from "./containers/portfolio";
import Contact from "./containers/contact";
import Navbar from "./components/navBar";


//npm install react-router-dom sass react-vertical-timeline-component rc-progress react-tsparticles tsparticles react-simple-animate react-icons
function App_portfolioCss() {
    return (
        <div className={'App_portfolioCss'}>
            {/*    particles js*/}

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
