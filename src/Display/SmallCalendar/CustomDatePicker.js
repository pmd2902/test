import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./CustomDatePicker.css";

const CustomDatePicker = ({ date, setDate }) => {
  return (
    <div className="custom-date-picker">
      <Calendar
        onChange={setDate}
        value={date}
        defaultView="month"
        showNeighboringMonth={false}
      />
    </div>
  );
};

export default CustomDatePicker;
