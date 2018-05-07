import {RESET_TABLE, UPDATE_TABLE} from "./actionTypes";

export const updateTable = (teamName, points, goalDifference) => {
    return {
        type: UPDATE_TABLE,
        teamName,
        points,
        goalDifference
    }
};

export const resetTable = () => {
    return {
        type: RESET_TABLE
    }
};
