import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from "react-router-dom";
// import App_portfolioCss from "./components_6portfolioCss/App_portfolioCss"; for: portfolioCss
import App_portfolioBootstrap from "./compponents_7portfolioBootstrap/App_portfolioBootstrap";






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/*<App />*/}
        {/*<App_1payload />*/}
        {/*<App_2shoppingList/>*/}
        {/*<App_3combinedReducer/>*/}
        {/*<App_4persistRedux/>*/}
        {/*<App_5bootstrap/>*/}
        {/*<Router>
            <App_portfolioCss/>
        </Router>*/}

        <App_portfolioBootstrap/>

    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
