import {TEMPLATE} from "./actionTypes";

export const setTemplate = (value) => {
    return {
        type: TEMPLATE,
        payload: value
    }
};