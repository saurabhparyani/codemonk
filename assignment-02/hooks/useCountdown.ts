"use client"

import { useState, useEffect } from 'react';

export const useCountdown = (initialMinutes: number) => {
    const initialTime = initialMinutes * 60; // Initial time in seconds
  const [time, setTime] = useState(initialMinutes * 60);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;

    const countdown = () => {
        setTime((prevTime) => {
          if (prevTime === 0) {
            clearInterval(interval!);
            setIsActive(false);
            setIsPaused(false);
            return 0;
          } else {
            return prevTime - 1;
          }
        });
      };

     if (isActive && !isPaused) {
        countdown(); 
  
        interval = setInterval(countdown, 1000);
      }
  
      return () => {
        if (interval) {
          clearInterval(interval);
        }
      };
    }, [isActive, isPaused, initialTime]); 
  
    const start = () => {
      setIsActive(true);
      setIsPaused(false);
    };
  
    const pause = () => {
      setIsPaused(true);
      setIsActive(false);
    };
  
    const resume = () => {
      setIsPaused(false);
      setIsActive(true);
    };
  
    const reset = () => {
      setTime(initialTime);
      setIsActive(false);
      setIsPaused(false);
    };
  
    return { time, isActive, isPaused, start, pause, resume, reset };
  };