// src/components/ui/calendar-headless.tsx

"use client";

import { useState } from "react";
import { Popover } from "@headlessui/react";
import { Button } from "@/components/ui/button";
import { CalendarIcon, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { ko } from "date-fns/locale";

interface CalendarHeadlessProps {
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
  className?: string;
  label?: string;
}

export const CalendarHeadless = ({
  date,
  setDate,
  className = "",
  label,
}: CalendarHeadlessProps) => {
  const today = new Date();
  const [selectedYear, setSelectedYear] = useState(today.getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(today.getMonth());

  const daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();
  const currentMonthDates = Array.from({ length: daysInMonth }, (_, i) =>
    new Date(selectedYear, selectedMonth, i + 1)
  );

  const handleSelect = (day: Date) => {
    setDate(day);
  };

  const handlePrevYear = () => {
    const newYear = selectedYear - 1;
    setSelectedYear(newYear);
    setDate(new Date(newYear, selectedMonth, 1));
  };

  const handleNextYear = () => {
    const newYear = selectedYear + 1;
    setSelectedYear(newYear);
    setDate(new Date(newYear, selectedMonth, 1));
  };

  const handlePrevMonth = () => {
    let newYear = selectedYear;
    let newMonth = selectedMonth - 1;
    if (newMonth < 0) {
      newMonth = 11;
      newYear = selectedYear - 1;
      setSelectedYear(newYear);
    }
    setSelectedMonth(newMonth);
    setDate(new Date(newYear, newMonth, 1));
  };

  const handleNextMonth = () => {
    let newYear = selectedYear;
    let newMonth = selectedMonth + 1;
    if (newMonth > 11) {
      newMonth = 0;
      newYear = selectedYear + 1;
      setSelectedYear(newYear);
    }
    setSelectedMonth(newMonth);
    setDate(new Date(newYear, newMonth, 1));
  };

  const handleToday = () => {
    const newToday = new Date();
    setSelectedYear(newToday.getFullYear());
    setSelectedMonth(newToday.getMonth());
    setDate(newToday);
  };

  const handleLastWeek = () => {
    const current = date ? new Date(date) : new Date();
    current.setDate(current.getDate() - 7);
    setDate(current);
    setSelectedYear(current.getFullYear());
    setSelectedMonth(current.getMonth());
  };

  const handleNextWeek = () => {
    const current = date ? new Date(date) : new Date();
    current.setDate(current.getDate() + 7);
    setDate(current);
    setSelectedYear(current.getFullYear());
    setSelectedMonth(current.getMonth());
  };

  return (
    <div className={cn("w-full font-sans text-gray-800", className)}>
      {label && <label className="text-sm font-medium mb-1 block">{label}</label>}
      <Popover className="relative">
        <Popover.Button as="div">
          <Button
            variant="outline"
            className={cn(
              "w-full justify-between px-3 text-left font-medium h-10 border border-input bg-background shadow-sm rounded-md",
              !date && "text-muted-foreground"
            )}
          >
            <div className="flex items-center justify-between w-full">
              <span>
                {date ? format(date, "yyyy-MM-dd", { locale: ko }) : <span>날짜 선택</span>}
              </span>
              <CalendarIcon className="h-4 w-4 text-muted-foreground" />
            </div>
          </Button>
        </Popover.Button>
        <Popover.Panel className="absolute z-50 bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-[320px] p-4 bg-background shadow-lg rounded-md">
          {({ close }) => (
            <>
              {/* 헤더 영역 */}
              <div className="bg-gray-50 p-3 rounded mb-4">
                {/* 헤더의 1행: 연도 및 월 선택 영역 */}
                <div className="flex items-center gap-2 justify-center mb-3">
                  <div className="flex items-center gap-1">
                    <select
                      value={selectedYear}
                      onChange={(e) => {
                        const newYear = Number(e.target.value);
                        setSelectedYear(newYear);
                        setDate(new Date(newYear, selectedMonth, 1));
                      }}
                      className="border rounded px-2 py-1 text-sm"
                    >
                      {Array.from({ length: 10 }).map((_, i) => {
                        const year = today.getFullYear() - 5 + i;
                        return (
                          <option key={year} value={year}>
                            {year}년
                          </option>
                        );
                      })}
                    </select>
                    <button
                      onClick={handlePrevYear}
                      className="px-2 py-1 border rounded text-sm hover:bg-accent transition-colors duration-200"
                    >
                      {"<<"}
                    </button>
                    <button
                      onClick={handleNextYear}
                      className="px-2 py-1 border rounded text-sm hover:bg-accent transition-colors duration-200"
                    >
                      {">>"}
                    </button>
                  </div>
                  <div className="flex items-center gap-1">
                    <select
                      value={selectedMonth}
                      onChange={(e) => {
                        const newMonth = Number(e.target.value);
                        setSelectedMonth(newMonth);
                        setDate(new Date(selectedYear, newMonth, 1));
                      }}
                      className="border rounded px-2 py-1 text-sm"
                    >
                      {Array.from({ length: 12 }).map((_, i) => (
                        <option key={i} value={i}>
                          {i + 1}월
                        </option>
                      ))}
                    </select>
                    <button
                      onClick={handlePrevMonth}
                      className="px-2 py-1 border rounded text-sm hover:bg-accent transition-colors duration-200"
                    >
                      {"<"}
                    </button>
                    <button
                      onClick={handleNextMonth}
                      className="px-2 py-1 border rounded text-sm hover:bg-accent transition-colors duration-200"
                    >
                      {">"}
                    </button>
                  </div>
                </div>
                {/* 헤더의 2행: 선택된 날짜 및 유틸 버튼 (저번주, 오늘, 다음주) */}
                <div className="flex items-center justify-between">
                  <span className="text-base font-medium">
                    {date ? format(date, "yyyy-MM-dd", { locale: ko }) : "선택된 날짜 없음"}
                  </span>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      className="px-2 py-1 text-sm"
                      onClick={handleLastWeek}
                    >
                      저번주
                    </Button>
                    <Button
                      variant="outline"
                      className="px-2 py-1 text-sm"
                      onClick={handleToday}
                    >
                      오늘
                    </Button>
                    <Button
                      variant="outline"
                      className="px-2 py-1 text-sm"
                      onClick={handleNextWeek}
                    >
                      다음주
                    </Button>
                  </div>
                </div>
              </div>
              {/* 날짜 선택 영역 */}
              <div className="grid grid-cols-7 gap-1 text-center">
                {["일", "월", "화", "수", "목", "금", "토"].map((day) => (
                  <div key={day} className="text-xs text-muted-foreground font-medium">
                    {day}
                  </div>
                ))}
                {currentMonthDates.map((day) => (
                  <button
                    key={day.toISOString()}
                    onClick={() => {
                      handleSelect(day);
                      close();
                    }}
                    className={cn(
                      "text-sm w-10 h-10 rounded hover:bg-accent focus:outline-none transition-colors duration-200",
                      date?.toDateString() === day.toDateString() && "bg-primary text-white"
                    )}
                  >
                    {day.getDate()}
                  </button>
                ))}
              </div>
            </>
          )}
        </Popover.Panel>
      </Popover>
    </div>
  );
};
