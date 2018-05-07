import {RESET_TABLE, UPDATE_TABLE} from "../actions/actionTypes";
import {teams} from "../constants/teamConstants";

const initialState = teams;

const tableReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_TABLE:
            return {
                ...state,
                [action.teamName]: {
                    name: action.teamName,
                    matchesPlayed: state[action.teamName].matchesPlayed + 1,
                    goalDifference: state[action.teamName].goalDifference + action.goalDifference,
                    points: state[action.teamName].points + action.points
                }
            };

        case RESET_TABLE:
            return initialState;

        default:
            return state
    }
};

export default tableReducer
