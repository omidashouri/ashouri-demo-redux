import './css/master.css'
import './css/normalize.css'
import {Route, Routes} from 'react-router-dom';
import Main from "./components/";
import './css/master.css'


//we have to remove:  react-particles-js@3.6.0 → it is deprecated, instead use  react-tsparticles
//we have to remove: "react-simple-animate": "^3.3.12",(react-simple-animate@3.3.12)
// --> two above have conflict with 'react-share'
// #create-react-app .
// npm install react-router-dom framer-motion react-tsparticles vivus bootstrap react-share
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