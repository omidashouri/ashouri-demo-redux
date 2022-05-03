import './App.css';

import comicsReducer from "./components_1payload/comicsReducer";
import {createStore} from "redux";
import {Provider} from "react-redux";
import FirstComp from "./components_1payload/FirstComp";
import SecondComp from "./components_1payload/SecondComp";

function App_1payload() {
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

export default App_1payload;
