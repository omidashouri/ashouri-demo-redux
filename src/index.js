import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import App_1payload from "./components_1payload/App_1payload";
import App_2shoppingList from "./components_2shoppingList/App_2shoppingList";
import App_5bootstrap from "./components_5bootstrap/App_5bootstrap";
import App_3combinedReducer from "./components_3combinedReducer/App_3combinedReducer";
import App_4persistRedux from "./components_4persistRedux/App_4persistRedux";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/*<App />*/}
        {/*<App_1payload />*/}
        {/*<App_2shoppingList/>*/}
        {/*<App_3combinedReducer/>*/}
        {/*<App_4persistRedux/>*/}

        <App_5bootstrap/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
