import React from 'react';
import renderer from 'react-test-renderer';
import VehicleEdit from './VehicleEdit';
import ReactDom from 'react-dom';
import {changeInputValue, clickElement} from '../utils/TestUtils'

describe("VehicleEdit", ()=> {
    const mockChangeHandler = jest.fn();
    const mockSaveHandler = jest.fn();

    const mockSelectedVehicle = {
                        id: 'Sampleid'
                                ,year: 'Sampleyear'    
                                ,make: 'Samplemake'    
                                ,model: 'Samplemodel'    
                    }

    const componentToTest = <VehicleEdit selectedVehicle={mockSelectedVehicle} onEditVehicle={mockChangeHandler}
                        onSaveVehicle={mockSaveHandler}/>
    const rootDiv = document.createElement('div')
    ReactDom.render(componentToTest, rootDiv);
    document.body.appendChild(rootDiv);
    
    it('Renders fields correctly', () =>{        
        expect(rootDiv).toMatchSnapshot();
    });
        
    it('dispatches input changes', ()=> {
        changeInputValue(document.querySelector("input[name='id'"), "TEST");
        expect(mockChangeHandler).toBeCalledTimes(1);
    })
    
    it('calls save function on click of Save button', () => {
        clickElement(document.querySelector("button[id='saveButton']"));
        expect(mockSaveHandler).toBeCalledTimes(1);
        expect(mockSaveHandler).toHaveBeenCalledWith('vehicle/Sampleid', mockSelectedVehicle)
    })

})