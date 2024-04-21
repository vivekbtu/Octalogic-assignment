import React, { useState, useContext } from 'react'
import "../question2/WheelQ.css"

const WheelsInput = ({ wheels, fetchVehicleTypes, setWheels }) => {

  const handleWheelsChange = (selectedWheels) => {
    wheels = selectedWheels;
    setWheels(selectedWheels);
    // console.log("wheelsInput",wheels);
    fetchVehicleTypes(wheels);
  };

  return (
    <div className="q-wrapper">
      <h1 id="q2-h1">No Of Wheels?</h1>
      <div id="q2-input">
        <input 
          type="radio"
          id="two"
          name="wheels"
          value="2"
          // checked={wheels === '2'}
          onChange={() => handleWheelsChange('2')}
        />
        <label > TWO Wheeler</label><br />
        <input 
          type="radio"
          id="four"
          name="wheels"
          value="4"
          // checked={wheels === '4'}
          onChange={() => handleWheelsChange('4')}
        />

        <label > Four Wheeler</label><br />
        {/* <button type='submit' onClick={handelNext}>NEXT</button> */}
      </div>
    </div>
  )
}

export default WheelsInput;
