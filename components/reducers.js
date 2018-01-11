// We begin by importing our actions from actions.js
import { FETCH_RESTAURANTS, FETCH_SUCCESS, FETCH_FAIL } from "./actions";

// pass action and state argument
export default function reducers(state, action) {
    let changes = {};

    // Creating switch statement to figure our which action was triggered
    switch(action.type) {
        case FETCH_RESTAURANTS:
            changes.restaurantsApi = {isFetching: action.state, dataFetched: true};
            break;
        case FETCH_SUCCESS:
            changes.restaurantsData = {
                phone: action.data.main.phone,
                distance: action.data.main.distance,
                rating: action.data.main.rating
            };
            break;
        case FETCH_FAIL:
            changes.restaurantsApi = {errorData: action.error.message, isFetching: false, dataFetched: true};
            break;
        default:
            return state;
    }

    // We update our state with the new changes at the end
    return Object.assign({}, state, changes);
}