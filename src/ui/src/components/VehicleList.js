import React from 'react'
import {DataTable} from 'primereact/components/datatable/DataTable'
import {Column} from 'primereact/components/column/Column'

function VehicleList({history, fetchVehicle, fetchAllVehicles, vehicles, first, totalRecords}){

    function pageAction({first,rows, page}){
        console.log(first)
        fetchAllVehicles('vehicles?per_page=' + rows + '&page=' + (page+1), first )
    }
    
    function buttonClicked(event){
        fetchVehicle('vehicle/' + event.target.value)
        //tell route to display the Edit screen
        history.push({pathname: '/vehicle'});
    }

    function actionTemplate(rowData, column){
        return (
            <button id={rowData.id} value={rowData.id} onClick={buttonClicked}>Edit</button>
        )
    }
       
    /*
    render a table component
     */
    return (
        <div>
        <DataTable first={first} paginator={true} value={vehicles} lazy={true} rows={10} totalRecords={totalRecords}
            onPage={pageAction} selectionMode="single">
                <Column field="id" header="ID"/>
                <Column field="year" header="YEAR"/>
                <Column field="make" header="MAKE"/>
                <Column field="model" header="MODEL"/>
                <Column body={actionTemplate}/>
        </DataTable>
        </div>
    )
};

export default VehicleList;