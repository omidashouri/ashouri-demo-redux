import './css/master.css'
import './css/normalize.css'
import {Route, Routes} from 'react-router-dom';
import Main from "./components/";
import './css/master.css'


//we have to remove  react-particles-js@3.6.0, "react-simple-animate": "^3.3.12",(react-simple-animate@3.3.12)
// #create-react-app .
// npm install react-router-dom framer-motion react-particles-js vivus
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