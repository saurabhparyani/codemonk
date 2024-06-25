"use client";
import React from "react";
import { useCountdown } from "@/hooks/useCountdown";
import { FaPlay } from "react-icons/fa";
import { RxReset } from "react-icons/rx";
import { BsFillPauseFill } from "react-icons/bs";

interface TimerProps {
  initialMinutes: number;
}

const Timer: React.FC<TimerProps> = ({ initialMinutes }) => {
  const { time, isActive, isPaused, start, pause, resume, reset } =
    useCountdown(initialMinutes);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m < 10 ? "0" : ""}${m}:${s < 10 ? "0" : ""}${s}`;
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <div className="text-9xl">{formatTime(time)}</div>
      <div className="space-x-2">
        {!isActive && !isPaused && (
          <button
            className="items-center p-4 bg-purple-300 rounded-full text-black"
            onClick={start}
          >
            <FaPlay />
          </button>
        )}
        {isActive && (
          <button
            className="items-center p-4 bg-purple-300 text-black rounded-full"
            onClick={pause}
          >
            <BsFillPauseFill />
          </button>
        )}
        {!isActive && isPaused && (
          <button
            className="items-center p-4 bg-purple-300 rounded-full text-black"
            onClick={start}
          >
            <FaPlay />
          </button>
        )}
        <button
          className="items-center p-4 rounded-full bg-slate-200 text-purple-900 font-extrabold"
          onClick={reset}
        >
          <RxReset />
        </button>
      </div>
    </div>
  );
};

export default Timer;
