import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import styles from "./Timer.module.css";

import { defaultOption } from "../../data/constant";
import { setTimeTakenHandler, timeoutHandler } from "../slice/quizSlice";
import { useQuizResult } from "../hooks/useQuizResult";

function Timer() {
  const totalSeconds = defaultOption.time * 60;
  const initialHours = Math.floor(totalSeconds / 3600);
  const initialMinutes = Math.floor((totalSeconds % 3600) / 60);
  const initialSeconds = totalSeconds % 60;

  const [hours, setHours] = useState(initialHours);
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);
  const dispatch = useDispatch();
  const timerInterval = useRef(null);

  const { completed } = useQuizResult();

  useEffect(() => {
    if (completed) {
      clearInterval(timerInterval.current);
      const timeUsedInMinutes =
        (totalSeconds - (hours * 3600 + minutes * 60 + seconds)) / 60;
      dispatch(setTimeTakenHandler(timeUsedInMinutes));
    } else {
      timerInterval.current = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else {
          if (minutes > 0) {
            setMinutes(minutes - 1);
            setSeconds(59);
          } else {
            if (hours > 0) {
              setHours(hours - 1);
              setMinutes(59);
            } else {
              clearInterval(timerInterval.current);
              dispatch(timeoutHandler());
            }
          }
        }
      }, 1000);

      return () => clearInterval(timerInterval.current);
    }
  }, [hours, minutes, seconds, completed, dispatch, totalSeconds]);

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <div className={styles.timerWrapper}>
      <div>
        <span>{formatTime(hours)}</span>
        <span>Hours</span>
      </div>
      <div>
        <span>{formatTime(minutes)}</span>
        <span>Minutes</span>
      </div>
      <div>
        <span>{formatTime(seconds)}</span>
        <span>Seconds</span>
      </div>
    </div>
  );
}

export default Timer;
