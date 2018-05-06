import {TEMPLATE} from "../actions/actionTypes";

const initialState = {};

const templateReducer = (state=initialState, action) => {
    switch(action.type) {
        case TEMPLATE:
            return action.payload;

        default:
            return state
    }
};

export default templateReducer
