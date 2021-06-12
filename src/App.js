import React from 'react';
import Header from './component/Header.jsx';
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import {Route} from 'react-router-dom';
import axios from "axios";

function App() {
    const [pizzas, setPizzas] = React.useState([]);

    React.useEffect(() => {
        axios.get('http://localhost:3000/db.json').then(resp => {
            setPizzas(resp.data.pizzas)
        })
    }, []);

    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Route path="/" render={() => <Home items={pizzas}/>} exact/>
                <Route path="/cart" component={Cart} exact/>
            </div>
        </div>
    );
}

export default App;
