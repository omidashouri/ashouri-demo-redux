import {createStore} from "redux";
import {Provider} from "react-redux";
import Homepage from "./Homepage";
import rootReducer from "./rootReducer";

function App_3combinedReducer() {
    const store = createStore(rootReducer);
    return (
        <div className="App">
            <h1>Demo for combineReducer</h1>
            <Provider store={store}>
                <Homepage/>
            </Provider>
        </div>
    );
}

export default App_3combinedReducer;