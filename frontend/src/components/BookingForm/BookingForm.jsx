
import React, { useState } from 'react';
import NameInput from '../question1/NameInput';
import WheelsInput from '../question2/WheelsInput';
import VehicleTypeInput from '../question3/VehicleTypeInput';
import VehicleModelQ from '../question4/VehicleModelQ';
import { Link } from 'react-router-dom';
import DatePicker from '../question5/DatePicker';
import { Button, useToast } from '@chakra-ui/react'

function BookingForm() {
  const [step, setStep] = useState(1);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [wheels, setWheels] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const [vehicleTypes, setVehicleTypes] = useState([]);
  const [vehicleModel, setVehicleModel] = useState('');
  const [vehicleModels, setVehicleModels] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const toast = useToast();

  const fetchVehicleTypes = async (wheels) => {

    const response = await fetch(`https://octa-bac.onrender.com/veh/wheels/${wheels}`);
    const data = await response.json();

    const uniqueTypes = [...new Set(data.map(vehicle => vehicle.type))];
    
    const uniqueData = uniqueTypes.map(type => ({
      type,
    }));

    setVehicleTypes(uniqueData);
  }

  const fetchVehicleModels = async (vehicleType) => {

    const response = await fetch(`https://octa-bac.onrender.com/veh/types/${vehicleType}`);
    const data = await response.json();
    setVehicleModels(data);

  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleVehicleTypeChange = (e) => {
    setVehicleType(e.target.value);
  };

  const handleVehicleModelChange = (e) => {
    setVehicleModel(e.target.value);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleNext = () => {
    if (step === 1 && (!firstName || !lastName)) {
      // alert('Please enter your first name and last name.');
      toast({
        title: "Please enter your first name and last name.",
        position: 'top-center',
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
  
    if (step === 2 && !wheels) {
      // alert('Please select the number of wheels.');
      toast({
        title: "Please select the number of wheels.",
        position: 'top-center',
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
  
    if (step === 3 && !vehicleType) {
      // alert('Please select a vehicle type.');
      toast({
        title: "Please select a vehicle type.",
        position: 'top-center',
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
  
    setStep(step + 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send a POST request to your backend API to save the form data
    const response = await fetch('https://octa-bac.onrender.com/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName,
        lastName,
        vehicleModel,
        vehicleType,
        wheels,
        startDate,
        endDate
      })
      
    });
    console.log(response);
    const data = await response.json();
    if (response.ok) {
      // Handle success
      // alert(data.message);
      if(data.message === 'Booking created successfully'){
        toast({
          title: data.message,
          position: 'top-center',
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      }
      else{
        toast({
          title: data.message,
          position: 'top-center',
          status: "warning",
          duration: 3000,
          isClosable: true,
        });
      }
    } else {
      // Handle error
      console.error(data);
      // alert('An error occurred');
      toast({
        title: 'An error occurred',
        position: 'top-center',
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }

    // Handle the response as needed
  };

  console.log("Hello", firstName,
  lastName,
  vehicleModel,
  vehicleType,
  wheels,
  startDate,
  endDate)

  const renderStep = () => {
    switch (step) {
      case 1:
        return <NameInput
          firstName={firstName}
          lastName={lastName}
          onFirstNameChange={handleFirstNameChange}
          onLastNameChange={handleLastNameChange}
        />;
      case 2:
        return <WheelsInput
          wheels={wheels}
          // onWheelsChange={handleWheelsChange}
          fetchVehicleTypes={fetchVehicleTypes}
          setWheels={setWheels}
        />;
      case 3:
        return <VehicleTypeInput
          vehicleType={vehicleType}
          setVehicleType={setVehicleType}
          vehicleTypes={vehicleTypes}
          onVehicleTypeChange={handleVehicleTypeChange}
          fetchVehicleModels={fetchVehicleModels}
        />;
      case 4:
        return <VehicleModelQ
          vehicleModel={vehicleModel}
          vehicleModels={vehicleModels}
          onVehicleModelChange={handleVehicleModelChange}
        />;
      case 5:
        return <DatePicker
          startDate={startDate}
          endDate={endDate}
          onStartDateChange={handleStartDateChange}
          onEndDateChange={handleEndDateChange}
        />
      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {renderStep()}
      <div style={{ width: '40%', display: 'flex', justifyContent: 'space-between'}}>
        {step !== 5 && <Button colorScheme='teal' size='md' type="button" onClick={handleNext}>Next</Button>}
        {step === 5 && <Button colorScheme='teal' size='md' type="submit">Submit</Button>}
        {step !== 1 && <Button colorScheme='teal' size='md' type="button" onClick={() => setStep(step - 1)}>Prev</Button>}
      </div>

      {/* {step === 5 && <Link to="/allbookings" style={{ textDecoration: 'none'}}>
        <button type="button" style={{ backgroundColor: 'red', color: 'white' }}>Show All Bookings</button>
      </Link>} */}

      {/* {step === 1 &&
        <Link to="/allbookings" style={{ textDecoration: 'none' }}>
          <button type="button" style={{ backgroundColor: 'red', color: 'white' }}>Show All Bookings</button>
        </Link>
      } */}
    </form>
    
  );
}

export default BookingForm;

