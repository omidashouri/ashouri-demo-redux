import './App.css';

import comicsReducer from "./components_payload/comicsReducer";
import {createStore} from "redux";
import {Provider} from "react-redux";
import FirstComp from "./components_payload/FirstComp";
import SecondComp from "./components_payload/SecondComp";

function App_payload() {
    const store = createStore(comicsReducer);
    return (
        <div className="App">
            <h1>payload topic</h1>
            <Provider store={store}>
                <FirstComp/>
                <SecondComp/>
            </Provider>
        </div>
    );
}

export default App_payload;
