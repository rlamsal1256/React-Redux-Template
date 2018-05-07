import {UPDATE_POINTS} from "./actionTypes";

export const updatePoints = (fixtureId, team, points, goalDifference) => {
    return {
        type: UPDATE_POINTS,
        fixtureId,
        team,
        points,
        goalDifference
    }
};