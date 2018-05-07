import {UPDATE_POINTS} from "../actions/actionTypes";

const initialState = [];

const pointsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_POINTS:
            return {
                ...state,
                [action.fixtureId]: {
                    team: action.team,
                    points: action.points,
                    goalDifference: action.goalDifference
                }
            };

        default:
            return state
    }
};

export default pointsReducer
