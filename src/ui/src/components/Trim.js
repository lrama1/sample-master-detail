import React from 'react'


function Trim({trimId, trimLevel, trimDescription, onEditTrim, onRemoveTrim, index}){
    return(
        <div className="row">
            <div className="col-md-3">
                <input className="form-control" id="trimId" name="trimId" value={trimId}  onChange={(event) => onEditTrim(event, index)}/>
            </div>
            <div className="col-md-3">
                <input className="form-control" id="trimLevel" name="trimLevel" value={trimLevel}  onChange={(event) => onEditTrim(event, index)}/>
            </div>
            <div className="col-md-3">
                <input className="form-control" id="trimDescription" name="trimDescription" value={trimDescription}  onChange={(event) => onEditTrim(event, index)}/>
            </div>
            <div className="col-md-3">
                <button onClick={() => onRemoveTrim(index)}>Delete</button>
            </div>
        </div>
    )
}

export default Trim;