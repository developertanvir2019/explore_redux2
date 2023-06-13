import { INCREMENET, DECREMENT } from "./actionTypes";
const initailState = {
    value: 0
}
const counterReducer = (state = initailState, action) => {
    switch (action.type) {
        case INCREMENET:

            return {
                ...state,
                value: state.value + action.payload.value,
            }
        case DECREMENT:
            return {
                ...state,
                value: state.value - action.payload.value
            }

        default:
            return state;
    }
}

export default counterReducer;