import {createStore} from "redux";
import {Provider} from "react-redux";
import rootReducer from "./components_4persistRedux/rootReducer";
import AddTasks from "./components_4persistRedux/addTasks";
import Tasks from "./components_4persistRedux/Tasks";
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {PersistGate} from 'redux-persist/integration/react'

function App_4persistRedux() {
    const persistConfig = {
        key: 'root',
        storage
    }
    const persistedReducer = persistReducer(persistConfig, rootReducer)
    const store = createStore(persistedReducer);
    const persistor = persistStore(store);
    return (
        <div className="App">
            <h1>Demo for combineReducer</h1>
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <AddTasks/>
                    <Tasks/>
                </PersistGate>
            </Provider>
        </div>
    );
}

export default App_4persistRedux;