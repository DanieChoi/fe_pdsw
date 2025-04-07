// src/components/ui/calendar-headless.tsx

"use client";

import { useState } from "react";
import { Popover } from "@headlessui/react";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";
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
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());

  const daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();
  const currentMonthDates = Array.from({ length: daysInMonth }, (_, i) =>
    new Date(selectedYear, selectedMonth, i + 1)
  );

  const handleSelect = (day: Date) => {
    setDate(day);
  };

  return (
    <div className={cn("w-full", className)}>
      {label && <label className="text-sm font-medium mb-1 block">{label}</label>}
      <Popover className="relative">
        <Popover.Button as="div">
          <Button
            variant="outline"
            className={cn(
              "w-full justify-center px-3 text-center font-medium h-10 border border-input bg-background shadow-sm rounded-md",
              !date && "text-muted-foreground"
            )}
          >
            <div className="flex items-center gap-2 justify-center">
              <CalendarIcon className="h-4 w-4 text-muted-foreground" />
              {date ? format(date, "yyyy-MM-dd", { locale: ko }) : <span>날짜 선택</span>}
            </div>
          </Button>
        </Popover.Button>
        <Popover.Panel className="absolute z-50 bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-[320px] p-4 bg-background shadow-lg rounded-md">
          {({ close }) => (
            <>
              <div className="flex items-center gap-2 mb-4 justify-center">
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(Number(e.target.value))}
                  className="border rounded px-2 py-1 text-sm"
                >
                  {Array.from({ length: 10 }).map((_, i) => {
                    const year = new Date().getFullYear() - 5 + i;
                    return (
                      <option key={year} value={year}>
                        {year}년
                      </option>
                    );
                  })}
                </select>
                <select
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(Number(e.target.value))}
                  className="border rounded px-2 py-1 text-sm"
                >
                  {Array.from({ length: 12 }).map((_, i) => (
                    <option key={i} value={i}>
                      {i + 1}월
                    </option>
                  ))}
                </select>
              </div>
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
                      "text-sm w-10 h-10 rounded hover:bg-accent focus:outline-none",
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
