"use client";
import "./style.css"

import React, { useState } from "react";
import { Calendar } from "react-multi-date-picker";

const DashboardCalender = () => {
  let [inputValue, setInputValue] = useState("");
  let [inputValue2, setInput2Value] = useState("");
  let [value, setValue] = useState([]);

  const handleDateChange = (selectedDates) => {
    setValue(selectedDates);
  };

  return (

    <div style={{ display: "flex", flexDirection: "", justifyItems: "center" }}>
      <Calendar
        multiple
        onlyShowInRangeDates={true}
        minDate={inputValue}
        maxDate={inputValue2}
        value={value}
        onChange={handleDateChange}
        style={{
          width: "100%",
          height: "100%",
          margin: "auto",
          padding: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "0",
          boxShadow: "none",
          borderRadius: "3.5%",
        }}
      />
    </div>
  );
};

export default DashboardCalender;
