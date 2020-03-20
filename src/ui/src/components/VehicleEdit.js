//DomainDetail-template.js
import React from 'react'
import Trim from "./Trim";

function VehicleEdit({selectedVehicle, onEditVehicle, onSaveVehicle, onAddTrim, onEditTrim, onRemoveTrim}) {

    function buttonEventHandler(event) {
        onSaveVehicle('vehicle/' + selectedVehicle.id,
            selectedVehicle);
        event.preventDefault();
    }

    function addTrim(){
        onAddTrim()
    }

    const trimSection = selectedVehicle.trims.map((trim, index) => {
        return (
            <Trim key={index} {...trim} index={index} onEditTrim={onEditTrim} onRemoveTrim={onRemoveTrim}/>
        )
    })

    return (
        <div>
            <div className="form-group">
                <label htmlFor="id">id</label>
                <input className="form-control" id="id" name="id" value={selectedVehicle.id}
                       onChange={onEditVehicle}/>
            </div>
            <div className="form-group">
                <label htmlFor="year">year</label>
                <input className="form-control" id="year" name="year" value={selectedVehicle.year}
                       onChange={onEditVehicle}/>
            </div>
            <div className="form-group">
                <label htmlFor="make">make</label>
                <input className="form-control" id="make" name="make" value={selectedVehicle.make}
                       onChange={onEditVehicle}/>
            </div>
            <div className="form-group">
                <label htmlFor="model">model</label>
                <input className="form-control" id="model" name="model" value={selectedVehicle.model}
                       onChange={onEditVehicle}/>
            </div>

            <div>
                {trimSection}
            </div>
            <button id="addTrimButton" onClick={addTrim}>Add Trim</button>
            <button id="saveButton" onClick={buttonEventHandler}>Save</button>
        </div>
    );
}

export default VehicleEdit;