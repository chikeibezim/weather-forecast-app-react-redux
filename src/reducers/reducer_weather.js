import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
	//console.log('Action Recieved', action);
	switch(action.type){
		case FETCH_WEATHER:
		    //return old weather data and new data
			//return state.concat([action.payLoad.data]);
			//or use this
			return [action.payload.data, ...state];
	}
	return state;
}