import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from "./Navbar";
import Addcart from "./Addcart";
import {Provider} from "react-redux";
import {createStore} from "redux";
import cartReducer from "./cartReducer";
import ItemsList from "./ItemsList";

function App_2shoppingList() {
    const store = createStore(cartReducer);
    return (
        <div className="App">
            <Provider store={store}>
                <Navbar/>
                <Addcart/>
                <ItemsList/>
            </Provider>
        </div>
    );
}

export default App_2shoppingList;
