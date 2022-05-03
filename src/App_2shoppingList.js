import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from "./components_2shoppingList/Navbar";
import Addcart from "./components_2shoppingList/Addcart";
import {Provider} from "react-redux";
import {createStore} from "redux";
import cartReducer from "./components_2shoppingList/cartReducer";
import ItemsList from "./components_2shoppingList/ItemsList";

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
