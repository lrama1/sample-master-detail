
import React from 'react';
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';
import {clickElement} from '../utils/TestUtils';
import VehicleList from "../components/VehicleList";

describe("VehicleList", () => {
    const props = {
        history: []
    }

    const mockFetchVehicle = jest.fn();
    const mockFetchAllVehicles = jest.fn();
    const mockVehicles =
        [
                                                                                                                                                                                                                                          
          {id: 'Sample-id0',year: 'Sample-year0',make: 'Sample-make0',model: 'Sample-model0'}
                                ,
                                                                                                                                                                                                                                  
          {id: 'Sample-id1',year: 'Sample-year1',make: 'Sample-make1',model: 'Sample-model1'}
                                ,
                                                                                                                                                                                                                                  
          {id: 'Sample-id2',year: 'Sample-year2',make: 'Sample-make2',model: 'Sample-model2'}
                                ,
                                                                                                                                                                                                                                  
          {id: 'Sample-id3',year: 'Sample-year3',make: 'Sample-make3',model: 'Sample-model3'}
                                ,
                                                                                                                                                                                                                                  
          {id: 'Sample-id4',year: 'Sample-year4',make: 'Sample-make4',model: 'Sample-model4'}
                                ,
                                                                                                                                                                                                                                  
          {id: 'Sample-id5',year: 'Sample-year5',make: 'Sample-make5',model: 'Sample-model5'}
                                ,
                                                                                                                                                                                                                                  
          {id: 'Sample-id6',year: 'Sample-year6',make: 'Sample-make6',model: 'Sample-model6'}
                                ,
                                                                                                                                                                                                                                  
          {id: 'Sample-id7',year: 'Sample-year7',make: 'Sample-make7',model: 'Sample-model7'}
                                ,
                                                                                                                                                                                                                                  
          {id: 'Sample-id8',year: 'Sample-year8',make: 'Sample-make8',model: 'Sample-model8'}
                                ,
                                                                                                                                                                                                                                  
          {id: 'Sample-id9',year: 'Sample-year9',make: 'Sample-make9',model: 'Sample-model9'}
                                ,
                                                                                                                                                                                                                                  
          {id: 'Sample-id10',year: 'Sample-year10',make: 'Sample-make10',model: 'Sample-model10'}
                                ,
                                                                                                                                                                                                                                  
          {id: 'Sample-id11',year: 'Sample-year11',make: 'Sample-make11',model: 'Sample-model11'}
                                ,
                                                                                                                                                                                                                                  
          {id: 'Sample-id12',year: 'Sample-year12',make: 'Sample-make12',model: 'Sample-model12'}
                                ,
                                                                                                                                                                                                                                  
          {id: 'Sample-id13',year: 'Sample-year13',make: 'Sample-make13',model: 'Sample-model13'}
                ]

        const componentToTest = <VehicleList history={props.history} fetchVehicle={mockFetchVehicle}
            fetchAllVehicles={mockFetchAllVehicles} vehicles={mockVehicles} first={0} totalRecords={11} />

        const rootDiv = document.createElement('div') ;
        ReactDom.render(componentToTest, rootDiv);
        document.body.appendChild(rootDiv);
        
        it('renders correctly', () => {            
            expect(rootDiv).toMatchSnapshot();
        })
        
        it('displays the correct number of rows', () => {
            const numberOfRowsRendered = document.querySelectorAll('div.p-datatable-wrapper > table > tbody > tr').length;
            expect(numberOfRowsRendered).toBe(10)
        })

        it('invokes row action', () =>{
            clickElement(document.querySelector("button[id='Sample-id0']"))
            expect(mockFetchVehicle).toBeCalledTimes(1)
        })
        
        it('invokes next page', () => {
            const selector = "div.p-paginator.p-component.p-unselectable-text.p-paginator-bottom > span > button:nth-child(2)";
            clickElement(document.querySelector(selector));
            expect(mockFetchAllVehicles).toBeCalledTimes(1);
        })
})