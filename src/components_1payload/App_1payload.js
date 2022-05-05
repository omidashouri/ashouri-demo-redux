import '../App.css';

import comicsReducer from "./comicsReducer";
import {createStore} from "redux";
import {Provider} from "react-redux";
import FirstComp from "./FirstComp";
import SecondComp from "./SecondComp";

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
