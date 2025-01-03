import React, { useState } from "react";
import "./DatePicker.scss";
import CalendarHeader from "./CalendarHeader/CalendarHeader";
import CalendarBody from "./CalendarBody.tsx/CalendarBody";
import dayjs, { Dayjs } from "dayjs";

const DatePicker = () => {
  const [currentDate, setCurrentDate] = useState<Dayjs>(dayjs());
  const [startDate, setStartDate] = useState<Dayjs | null>(null);
  const [endDate, setEndDate] = useState<Dayjs | null>(null);

  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ minHeight: "700px" }}
    >
      <div className="d-flex flex-column bg-white border rounded shadow calendar text-green">
        <CalendarHeader
          currentDate={currentDate}
          setCurrentDate={setCurrentDate}
        />
        <CalendarBody
          currentDate={currentDate}
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
        />
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center my-5 text-green border rounded p-3 shadow w-50">
        <h5 className="mb-3 fw-bold">PICK!</h5>
        <p className="fw-bold">START:</p>
        {startDate ? (
          <p>{startDate.format("YYYY-MM-DD")}</p>
        ) : (
          <p className="text-grey">Not Selected</p>
        )}
        <p className="fw-bold">END:</p>
        {endDate ? (
          <p>{endDate.format("YYYY-MM-DD")}</p>
        ) : (
          <p className="text-grey">Not Selected</p>
        )}
      </div>
    </div>
  );
};

export default DatePicker;
