import './css/master.css'
import './css/normalize.css'
import {Route, Routes} from 'react-router-dom';
import Main from "./components/";
import './css/master.css'


//we have to remove:  react-particles-js@3.6.0 → it is deprecated, instead use  react-tsparticles
//we have to remove: "react-simple-animate": "^3.3.12",(react-simple-animate@3.3.12)
// --> two above have conflict with 'react-share'
// #create-react-app .
/*"peerDependencies": {
    "react": ">=17"
}*/

// for install "react-share" :
// 1- remove 'react-share' from 'package.json'
// 2- run npm install
// 3- add ' "overrides": { "react-share": { "react": "18.1.0", "react-dom": "18.1.0" } } ' to the 'package.json' after 'dependencies'
// 4- run npm install react-share
// for import swiper:
// 1- just install swiper@6.0.2
// 2- for import just do as follow:
// 3-   import {Navigation, Pagination, EffectFade, Virtual, EffectCoverflow} from 'swiper';
//      import {Swiper, SwiperSlide} from "swiper/react";
//      import SwiperCore from "swiper/core";
//      import "swiper/swiper-bundle.min.css";
// npm install react-router-dom framer-motion react-tsparticles vivus bootstrap react-share react-countup swiper@6.0.2 emailjs-com react-hook-form
function App_portfolioBootstrap() {
    return(
        <>
            {/*for deploy by domain name, use domain name instead '/'*/}
            <Routes>
                <Route path={'/'} index element={<Main/>}/>
            </Routes>


        </>
    )
}

export default App_portfolioBootstrap;