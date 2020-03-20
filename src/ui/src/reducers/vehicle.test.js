import {vehicles, vehicle} from "./vehicle";

describe('reducers/vehicle', ()=> {

    jest.spyOn(window, 'alert').mockImplementation(() => {});

    afterEach(() => {
        jest.clearAllMocks();
    });

    /* We are testing that when we give our reducer an action, it creates
    * an expected new state*/
    it('returns a state with vehicles', () => {
        const dummyAction = {
            type: 'VEHICLES_FETCH_SUCCESS',
            vehicles: [

            ],
            totalRecords: 2,
            first: 1
        }

        const expectedResults = {
            records: [],
            totalRecords: 2,
            first: 1
        }

        const result = vehicles(null, dummyAction);
        expect(result).toEqual(expectedResults)
    })

    it('returns a state with vehicle', () => {
        const dummyAction = {
            type: 'VEHICLE_FETCH_SUCCESS',
            vehicle: {
                                                id: 'Sampleid'
                                                                ,year: 'Sampleyear'    
                                                                ,make: 'Samplemake'    
                                                                ,model: 'Samplemodel'    
                                            }
        }

        const expectedResults = {
                                                id: 'Sampleid'
                                                                ,year: 'Sampleyear'    
                                                                ,make: 'Samplemake'    
                                                                ,model: 'Samplemodel'    
                                        }

        const result = vehicle(null, dummyAction);
        expect(result).toEqual(result)
    })

    it('returns a state a field edited', () => {
        const dummyAction = {
            type: 'VEHICLE_EDIT',
            "id": 'ZZZ'
        }

        const expectedResults = {
            "id": "ZZZ",
            attr2: 'YYY'
        }

        const result = vehicle({attr2: 'YYY'}, dummyAction);
        expect(result).toEqual(result)
    })

    it('returns saved vehicle', () => {
        const dummyAction = {
            type: 'VEHICLE_SAVE_SUCCESS',
            "vehicle": {
                                                id: 'Sampleid'
                                                                ,year: 'Sampleyear'    
                                                                ,make: 'Samplemake'    
                                                                ,model: 'Samplemodel'    
                                            }
        }

        const expectedResult = {
                                                id: 'Sampleid'
                                                                ,year: 'Sampleyear'    
                                                                ,make: 'Samplemake'    
                                                                ,model: 'Samplemodel'    
                                        }

        const result = vehicle(null, dummyAction);

        expect(result).toEqual(expectedResult)
    })

    it('pops up alert on error', () => {
        const dummyAction = {
            type: 'VEHICLE_SAVE_ERROR',
            error: 'Error saving'
        }

        const result = vehicle(null, dummyAction);
        expect(window.alert).toBeCalledWith('Error saving')
    })
})