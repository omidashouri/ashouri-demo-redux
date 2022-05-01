import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from "./components/Navbar";
import Itemscomp from "./components/Itemscomp";
import {createStore} from "redux";
import cartReducer from "./components/CartReducer";
import {Provider} from "react-redux";

function App() {
    const store = createStore(cartReducer);
    return (
        <div className="App">
            <h1 className={'bg-info p-3'}>redux demo</h1>
            <Provider store={store}>
                <Navbar/>
                <Itemscomp/>
            </Provider>

        </div>
    );
}

export default App;
