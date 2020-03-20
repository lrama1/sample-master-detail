
import {
    VEHICLE_FETCH_SUCCESS,
    VEHICLE_EDIT,
    VEHICLE_SAVE_SUCCESS,
    VEHICLE_SAVE_ERROR,
    ADD_TRIM, REMOVE_TRIM, EDIT_TRIM
} from '../actions/vehicle'

const initialVehicles = {
     records: [],
     totalRecords: 0,
     first: 0        
} 

export const vehicles = (state = initialVehicles, action) => {
    if(action.type === 'VEHICLES_FETCH_SUCCESS'){
        return {
            ...state,
            records: action.vehicles,
            totalRecords: action.totalRecords,
            first: action.first
        }
    }
    return state;
}

const initialVehicle = {
        id: ''    
        ,year: ''
        ,make: ''
        ,model: ''
        ,trims: []
    }

export const vehicle = (state = initialVehicle, action) => {
    if (action.type === VEHICLE_FETCH_SUCCESS){
        return action.vehicle
        
    }else if(action.type === VEHICLE_EDIT){
        return {
        	...state,
        	[action.name]: action.value
        	}
    }else if(action.type === VEHICLE_SAVE_SUCCESS){
        return action.vehicle;
    }else if(action.type === VEHICLE_SAVE_ERROR){
        alert(action.error)
        return state;
    }else if(action.type === ADD_TRIM){
        const trims = state.trims
        trims.push({})
        return{...state}
    }else if(action.type === REMOVE_TRIM){
        const index = action.index
        state.trims.splice(index)
        return{...state}
    }else if(action.type === EDIT_TRIM){
        const index = action.index;
        const editedTrim = state.trims[index];
        console.log('editing ' + action.name)
        editedTrim[action.name] = action.value;
        return{...state}
    }
    return state;
}
