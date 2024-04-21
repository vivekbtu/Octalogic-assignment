import React from "react";
import "../question5/DateRange.css";

const DatePicker = ({startDate, endDate, onStartDateChange, onEndDateChange}) => {

  return (
    <div className="q-wrapper">
      <h1 id="q5-h1"> Booking Date</h1>
      <div id="q5-input">
        <label>
          Booking From (Start Date) {"\u00A0"}
          <input
            type="date"
            name="startDate"
            id="startDate"
            required
            value={startDate}
            onChange={onStartDateChange}
          />
        </label>
        <label>
          Booking Upto(End Date) {"\u00A0"}
          <input
            type="date"
            name="endDate"
            id="endDate"
            required
            value={endDate}
            onChange={onEndDateChange}
          />
        </label>
        {/* <button type="submit" onClick={handleNext}>
          BOOK
        </button> */}
      </div>
    </div>
  )
}

export default DatePicker