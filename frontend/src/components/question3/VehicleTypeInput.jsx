import React from 'react';
import "../question3/VehicleQ.css";

const VehicleTypeInput = ({ vehicleType, vehicleTypes=[], setVehicleType, fetchVehicleModels }) => {

  const handleModelsChange = (selectedWheels) => {
    vehicleType = selectedWheels;
    setVehicleType(vehicleType);
    // console.log("vehicleType", vehicleType);
    fetchVehicleModels(vehicleType);
  };

  return (
    <div className="q-wrapper">
      <h1 id="q3-h1">Select Type</h1>
      <div id="q3-input">
        {vehicleTypes.map((type) => (
          <div key={type._id}>
            <input
              type="radio"
              name="type"
              value={type.type}
              // checked={vehicleType === type} 
              onChange={() => handleModelsChange(type.type)}
            />
            <label >{type.type}</label>
          </div>
        ))}
        {/* <button type='submit' onClick={handelNext}>NEXT</button> */}
      </div>
    </div>
  );
};

export default VehicleTypeInput;
