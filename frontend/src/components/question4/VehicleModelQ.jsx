import React from 'react'
import "../question4/VehicleModelQ.css";

const VehicleModelQ = ({ vehicleModels=[], onVehicleModelChange }) => {

  return (
    <div className="q-wrapper">
      <h1 id="q4-h1">Select Specific Model</h1>
      <div id="q4-input">
        {vehicleModels.map((sData) => {
          return (
            <div key={sData._id}>
              <input
                type="radio"
                name="model"
                value={sData.model}
                // checked={vehicleModel === sData.modelName}
                onChange={onVehicleModelChange}
              />
              <label>{sData.model}</label>
            </div>
          );
        })}
        {/* <button type='submit' onClick={handelNext}>NEXT</button> */}
      </div>
    </div>
  )
}

export default VehicleModelQ
