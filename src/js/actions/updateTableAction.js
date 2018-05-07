import {RESET_TABLE, UPDATE_TABLE} from "./actionTypes";

export function updateTableWithDetails(teamName, points, goalDifference) {
    return {
        type: UPDATE_TABLE,
        teamName,
        points,
        goalDifference
    }
}

export function resetTable() {
    return {
        type: RESET_TABLE
    }
}

export function updateTable(points) {
    return (dispatch) => {
        dispatch(resetTable());

        Object.keys(points).forEach(key => {
            dispatch(updateTableWithDetails(points[key].team, points[key].points, points[key].goalDifference))
        });
    }
}
