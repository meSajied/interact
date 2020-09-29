import {LEADERS} from '../shared/leaders';
import * as ActionType from './redux/ActionType';

export const LEADERS = (state = {
    isLoading = true,
    errMess = null,
    leaders = []
}, action) =>{
    switch (action.type) {
        case ActionType.ADD_LEADERS:
            return{
                ...state,
                isLoading: false,
                errMess: null,
                leaders: action.payload
            };

        case ActionType.DISHES_LOADING:
            return {
                ...state,
                isLoading: true,
                errMess: null,
                leaders: action.payload
            };

        case ActionType.DISHES_FAILED:
            return {
                ...state,
                isLoading: false,
                errMess:action.payload
            };

        default:
            return state;
    }
}