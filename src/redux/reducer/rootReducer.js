import filterReducer from "./filterReducer";
import pizzaReducer from "./pizzaReducer";
import {combineReducers} from "redux";


const rootReducer = combineReducers({
    filterReducer,
    pizzaReducer
});

export default rootReducer;