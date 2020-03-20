import {combineReducers} from 'redux'
import { vehicles, vehicle } from './vehicle';

/*
By combining reducers, you now have to use the namespace of the reducer
when mapping State-to-Props in your components
 */
export default combineReducers({
    vehicle,
    vehicles
});

 