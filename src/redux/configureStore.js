import {createStore, combineReducers, applyMiddleware} from 'redux';
import { createForms } from 'react-redux-form';
import { Reducer, initialState } from './reducer'
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';
import thunk from "redux-thunk";
import {logger} from "redux-logger/src";
import { InitialFeedback } from './forms';

export const ConfigureStore = () => {
	{/*
	const store = createStore(
                Reducer, // reducer
                initialState, // our initialState
        );
	*/}
	/* hold the complete redux store */
	const store = createStore(
	
	/*
	 * an object whose values are different 
	 * reducing functions into a single 
	 * reducing function
	 */
		combineReducers({
			dishes: Dishes,
			comments: Comments,
			promotions: Promotions,
			leaders: Leaders,
			...createForms({
				feedback: InitialFeedback
			})
		}),
		// wrap the store's dispatch method...
		applyMiddleware(thunk, logger)
    );

    return store;
}
