import { combineReducers } from "redux";
import counterReducer from "./counter/CounterReducer";
import DynamicCounterReducer from "./dynamicCounter/dynamicCounterReducer";

const rootReducer = combineReducers({
    counter: counterReducer,
    dynamicCounter: DynamicCounterReducer
})

export default rootReducer;