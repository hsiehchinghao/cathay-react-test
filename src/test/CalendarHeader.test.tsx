import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import CalendarHeader from "../DatePicker/CalendarHeader/CalendarHeader";
import dayjs from "dayjs";

describe("CalendarHeader", () => {
  //測試正確顯示月份和年份
  it("renders current month and year correctly", () => {
    const currentDate = dayjs("2025-01-02");
    const setCurrentDate = vi.fn();

    render(
      <CalendarHeader
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
      />
    );

    expect(screen.getByText("2025年01月")).toBeInTheDocument();
  });
  //測試點擊右箭頭後，setCurrentDate是否被呼叫
  it("changes to previous month when clicking left arrow", () => {
    const currentDate = dayjs("2025-01-02");
    const setCurrentDate = vi.fn();

    render(
      <CalendarHeader
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
      />
    );

    const nextButton = screen.getByTestId("next-month-btn");
    fireEvent.click(nextButton);

    expect(setCurrentDate).toHaveBeenCalledTimes(1);

    const expectedDate = currentDate.add(1, "month");

    const actualDate = setCurrentDate.mock.calls[0][0];
    expect(actualDate.format("YYYY-MM")).toBe(expectedDate.format("YYYY-MM"));
  });
});
