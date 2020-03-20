/*
Refactor opportunities
1.  create separate files for each logical group of action creators
2.  combine the separate action creator files here an export them
 */
import {getRequest, putRequest} from "../utils/authority";

export const VEHICLE_FETCH_SUCCESS = 'VEHICLE_FETCH_SUCCESS';
export function vehicleFetchSuccess(vehicle){
    console.log('DISPATCHING SUCCESS', vehicle );
    return {
        type: VEHICLE_FETCH_SUCCESS,
        vehicle: vehicle
    }
}

export const VEHICLE_FETCH_ERROR = 'VEHICLE_FETCH_ERROR';
export function vehicleFetchError(error){
    return {
        type: VEHICLE_FETCH_ERROR,
        error: error
    }
}

export function fetchVehicle(url){
    console.log('Fetch of single vehicle Invoked');
    return async dispatch => {
        try{
            const data = await getRequest(url);
            dispatch(vehicleFetchSuccess(data))
        }catch (e) {
            dispatch(vehicleFetchError(true))
        }   
    }
}

export const VEHICLE_EDIT = 'VEHICLE_EDIT';
export function editVehicle(name, value){    
    return {
        type: VEHICLE_EDIT,
        name,
        value
    }
}

export const VEHICLE_SAVE_SUCCESS = 'VEHICLE_SAVE_SUCCESS';
export function saveVehicleSuccess(vehicle){
    return {
        type: VEHICLE_SAVE_SUCCESS,
        vehicle: vehicle
    }
}

export const VEHICLE_SAVE_ERROR = 'VEHICLE_SAVE_ERROR';
export function saveVehicleError(error){
    return {
        type: VEHICLE_SAVE_ERROR,
        error
    }
}

export function saveVehicle(url, vehicle){
    return async dispatch => {
        try {
            const data = await putRequest(url, vehicle)
            dispatch(saveVehicleSuccess(data))
        }catch (e){
            alert(JSON.stringify(e))
        }
    }
}

export const ADD_TRIM = 'ADD_TRIM'
export function addTrim(){
    return{
        type: ADD_TRIM
    }
}

export const REMOVE_TRIM = 'REMOVE_TRIM'
export function removeTrim(index){
    return{
        type: REMOVE_TRIM,
        index
    }
}

export const EDIT_TRIM = 'EDIT_TRIM'
export function editTrim(name, value, index){
    return{
        type: EDIT_TRIM,
        name,
        value,
        index
    }
}

/*---------------------------------------------------------*/

export const VEHICLES_FETCH_SUCCESS = 'VEHICLES_FETCH_SUCCESS';
export function vehiclesFetchSuccess(vehicles, totalRecords, lastPage, first){
    console.log('DISPATCHING SUCCESS', vehicles );
    return {
        type: VEHICLES_FETCH_SUCCESS,
        vehicles: vehicles,
        totalRecords,
        lastPage,
        first
    }
}

export const VEHICLES_FETCH_ERROR = 'VEHICLES_FETCH_ERROR';
export function vehiclesFetchError(error){
    return {
        type: VEHICLES_FETCH_ERROR,
        error: error
    }
}

export function fetchAllVehicles(url, first){
    console.log('Fetch Invoked');
    return async dispatch => {
        try {
            const data = await getRequest(url);
            dispatch(vehiclesFetchSuccess(data.rows, data.totalRecords, data.lastPage, first))
        }catch (e) {
            dispatch(vehiclesFetchError(true))
        }
    }
}