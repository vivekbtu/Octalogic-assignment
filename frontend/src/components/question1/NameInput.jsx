import React from "react";
// import { Link } from 'react-router-dom';
import "../question1/UserQ.css"

const NameInput = ({ firstName, lastName, onFirstNameChange, onLastNameChange }) => {

  return (
    <div className="q-wrapper">
      <h1 id="q1-h1"> What Is Your Name</h1>
      <div id="q1-input">
        <label>
          First Name
          <input
            type="text"
            name="firstName"
            id="firstName"
            required
            value={firstName}
            onChange={onFirstNameChange}
          />
        </label>
        <label>
          Last Name
          <input
            type="text"
            name="lastName"
            id="lastName"
            required
            value={lastName}
            onChange={onLastNameChange}
          />
        </label>
        {/* <button type="submit" onClick={handleNext}>
        NEXT
      </button> */}
      </div>
      {/* <div  id="backToBooking">
        <Link to="/allbookings" style={{ textDecoration: 'none' }}>
          <button type="button">Back To All Bookings</button>
        </Link>
      </div> */}
    </div>
  );
};

export default NameInput;
