import { DINCREMENET, DDECREMENT } from "./actionTypes";
const initailState = {
    value: 0
}
const DynamicCounterReducer = (state = initailState, action) => {
    switch (action.type) {
        case DINCREMENET:

            return {
                ...state,
                value: state.value + action.payload.value,
            }
        case DDECREMENT:
            return {
                ...state,
                value: state.value - action.payload.value
            }

        default:
            return state;
    }
}

export default DynamicCounterReducer;