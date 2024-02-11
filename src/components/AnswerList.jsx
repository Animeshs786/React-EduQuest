import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./AnswerList.module.css";
import { currentOptionHandler, setResponseHandler } from "../slice/quizSlice";

function AnswerList({ options, selectedOption }) {
  const dispatch = useDispatch();
  const { clearResponse } = useSelector((state) => state.quiz);
  const [selectedAnswer, setSelectedAnswer] = useState(selectedOption);

  useEffect(() => {
    if (clearResponse) {
      setSelectedAnswer("");
      dispatch(setResponseHandler(false));
    } else if (selectedOption !== "") {
      setSelectedAnswer(String(selectedOption));
    }else{
      setSelectedAnswer("");
    }
  }, [options, selectedOption, clearResponse,dispatch]);

  const handleOptionChange = (event) => {
    const optionValue = event.target.value;
    setSelectedAnswer(optionValue);
    dispatch(currentOptionHandler(+optionValue));
  };

  return (
    <div className={styles.answerWrapper}>
      {options.map((option, i) => (
        <div key={i}>
          <input
            type="radio"
            value={i}
            name="answer"
            checked={selectedAnswer === String(i)}
            onChange={handleOptionChange}
            disabled={Boolean(selectedOption === "" ? false : true)}
          />
          <label>{option}</label>
        </div>
      ))}
    </div>
  );
}

export default AnswerList;
