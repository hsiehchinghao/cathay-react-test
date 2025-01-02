import React from "react";
import dayjs, { Dayjs } from "dayjs";
import "./CalendarBody.scss";

interface CalendarBodyProps {
  currentDate: Dayjs;
  startDate: Dayjs | null;
  setStartDate: React.Dispatch<React.SetStateAction<Dayjs | null>>;
  endDate: Dayjs | null;
  setEndDate: React.Dispatch<React.SetStateAction<Dayjs | null>>;
}

const CalendarBody = ({
  currentDate,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}: CalendarBodyProps) => {
  // 產生6週日曆（避免極端情況）
  const generateCalendarDays = () => {
    //當月第一天(Dayjs)
    const firstDay = currentDate.startOf("month");
    //當月第一天週的第一天(Dayjs)
    const startOfWeek = firstDay.startOf("week");
    const displayDays = [];
    for (let i = 1; i <= 42; i++) {
      const currentDay = startOfWeek.add(i, "day");
      //   console.log("currentDay", currentDay);
      displayDays.push({
        date: currentDay,
        isCurrentMonth: currentDay.month() === currentDate.month(),
        isToday:
          currentDay.format("YYYY-MM-DD") === dayjs().format("YYYY-MM-DD"),
      });
    }
    return displayDays;
  };
  //處理選中日期
  const handleSelectDate = (e: MouseEvent) => {
    const target = e.target as HTMLDivElement;
    if (target.classList.contains("calendar-body__day__disabled")) return;
    const selectedDate = dayjs()
      .set("y", currentDate.year())
      .set("M", currentDate.month())
      .set("D", +target.innerText.slice(0, -1))
      .startOf("day");
    //如果還沒選中開始日期，則選中開始日期
    if (!startDate) {
      setStartDate(selectedDate);
    } else if (selectedDate.isSame(startDate)) {
      //如果選中日期等於開始日期，結束日期=開始日期
      setEndDate(selectedDate);
    } else if (selectedDate.isBefore(startDate)) {
      //如果選中日期等於或早於startDate，則將選中日期設為startDate
      setStartDate(selectedDate);
      setEndDate(null);
    } else if (startDate && endDate) {
      //如果已經選中開始日期和結束日期，則重新選擇開始日期
      setStartDate(selectedDate);
      setEndDate(null);
    } else {
      //如果已經選中開始日期，則選中結束日期
      setEndDate(selectedDate);
    }
  };

  //判斷是否選中
  const isSelectedDate = (date: Dayjs) => {
    if (
      date.isBetween(startDate, endDate) ||
      date.format("YYYY-MM-DD") === startDate?.format("YYYY-MM-DD") ||
      date.format("YYYY-MM-DD") === endDate?.format("YYYY-MM-DD")
    ) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="calendar-body">
      {generateCalendarDays().map((day) => (
        <div
          onClick={handleSelectDate}
          className={`calendar-body__day ${
            day.isCurrentMonth || `calendar-body__day__disabled`
          } 
          ${day.isToday && `calendar-body__day__today`}
          ${isSelectedDate(day.date) && `calendar-body__day__selected`}
          `}
          key={day.date.toString()}
        >
          {dayjs(day.date).format("D日")}
        </div>
      ))}
    </div>
  );
};

export default CalendarBody;
