import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./CalendarHeader.scss";
import { Dayjs } from "dayjs";

interface CalendarHeaderProps {
  currentDate: Dayjs;
  setCurrentDate: React.Dispatch<React.SetStateAction<Dayjs>>;
}

const CalendarHeader = ({
  currentDate,
  setCurrentDate,
}: CalendarHeaderProps) => {
  //調整月份
  const handleMonthChange = (change: string) => {
    if (change === "prev") {
      setCurrentDate(currentDate.subtract(1, "month"));
    } else {
      setCurrentDate(currentDate.add(1, "month"));
    }
  };
  return (
    <div className="d-flex justify-content-between align-items-center border-bottom">
      <div
        onClick={() => handleMonthChange("prev")}
        className="calendar-header__chevron-btn"
      >
        <ChevronLeft />
      </div>
      <div>{currentDate.format("YYYY年MM月")}</div>
      <div
        onClick={() => handleMonthChange("next")}
        className="calendar-header__chevron-btn"
      >
        <ChevronRight />
      </div>
    </div>
  );
};

export default CalendarHeader;
