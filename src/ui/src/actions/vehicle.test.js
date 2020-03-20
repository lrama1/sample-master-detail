
import {getRequest, putRequest} from "../utils/authority";
import {
    VEHICLE_FETCH_SUCCESS,
    VEHICLE_SAVE_SUCCESS,
    VEHICLES_FETCH_SUCCESS,
    VEHICLE_SAVE_ERROR,
    VEHICLES_FETCH_ERROR,
    VEHICLE_FETCH_ERROR,
    fetchAllVehicles,
    fetchVehicle,
    saveVehicle
} from "./vehicle";

jest.mock('../utils/authority')

describe('vehicle (action)', () => {
    
    const mockDispatch = jest.fn();
    const mockGetState = jest.fn();

    jest.spyOn(window, 'alert').mockImplementation(() => {});
    
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('invokes success when list of vehicles are returned', async () => {
        /* obtain reference to thunk*/
        const thunk = fetchAllVehicles('/mockurl', 1);

        /**/
        const response = Promise.resolve({rows:[], totalRecords: 0, lastPage: 1})
        getRequest.mockImplementation(() => response);

        const result = await thunk(mockDispatch, mockGetState);
        expect(mockDispatch).toBeCalledWith({type: VEHICLES_FETCH_SUCCESS, vehicles: [], totalRecords: 0, lastPage: 1, first: 1})
    })

    it('invokes error when an error occured in the service', async () => {
        /* obtain reference to thunk*/
        const thunk = fetchAllVehicles('/mockurl', 1);

        /**/
        const response = Promise.reject()
        getRequest.mockImplementation(() => response);

        const result = await thunk(mockDispatch, mockGetState);
        expect(mockDispatch).toBeCalledWith({type: VEHICLES_FETCH_ERROR, error: true})
    })
    
    it('invokes success when a single vehicle is returned', async () => {
        /* obtain reference to thunk*/
        const thunk = fetchVehicle('/mockurl');

        /**/
        const mockObjectToReturn = {
                                                id: 'Sampleid'
                                                                ,year: 'Sampleyear'    
                                                                ,make: 'Samplemake'    
                                                                ,model: 'Samplemodel'    
                                            }
        
        const response = Promise.resolve(mockObjectToReturn)
        getRequest.mockImplementation(() => response);

        const result = await thunk(mockDispatch, mockGetState);
        expect(mockDispatch).toBeCalledWith({type: VEHICLE_FETCH_SUCCESS, vehicle: mockObjectToReturn})
    })
    
    it('invokes error when a single vehicle fetch returned error', async () => {
        /* obtain reference to thunk*/
        const thunk = fetchVehicle('/mockurl');
        
        const response = Promise.reject()
        getRequest.mockImplementation(() => response);

        const result = await thunk(mockDispatch, mockGetState);
        expect(mockDispatch).toBeCalledWith({type: VEHICLE_FETCH_ERROR, error: true})
    })

    it('invokes success when a record is saved', async () => {
        /* obtain reference to thunk*/
        const thunk = saveVehicle('/mockurl', {});

        /**/
        const mockObjectToReturn = {
                                                id: 'Sampleid'
                                                                ,year: 'Sampleyear'    
                                                                ,make: 'Samplemake'    
                                                                ,model: 'Samplemodel'    
                                            }
        const response = Promise.resolve(mockObjectToReturn)
        putRequest.mockImplementation(() => response);

        const result = await thunk(mockDispatch, mockGetState);
        expect(mockDispatch).toBeCalledWith({type: VEHICLE_SAVE_SUCCESS, vehicle: mockObjectToReturn})
    })
    
    it('invokes error when save errors out', async () => {
        /* obtain reference to thunk*/
        const thunk = saveVehicle('/mockurl', {});

        const response = Promise.reject('Error saving')
        putRequest.mockImplementation(() => response);

        const result = await thunk(mockDispatch, mockGetState);
        expect(window.alert).toBeCalledWith("\"Error saving\"")
    })

})