import { useDispatch, useSelector } from "react-redux";

import Answer from "../components/Answer";
import AnswerMarke from "../components/AnswerMarke";
import Marke from "../components/Marke";
import NotAnswer from "../components/NotAnswer";
import NotVisited from "../components/NotVisited";
import Question from "../components/Question";
import QuestionTab from "../components/QuestionTab";
import Timer from "../components/Timer";
import styles from "./ExamPage.module.css";
import {
  markReviewHandler,
  saveQuizHandler,
  setResponseHandler,
} from "../slice/quizSlice";
import { useQuizQuestion } from "../hooks/useQuizQuestion";

function ExamPage() {
  const dispatch = useDispatch();
  const { currentOption, timeout } = useSelector((state) => state.quiz);

  const {
    index,
    answered,
    notAnswered,
    notVisited,
    marked,
    markedAnswered,
    questions,
  } = useQuizQuestion();

  const markHandler = () => {
    dispatch(markReviewHandler());
  };

  const saveHandler = () => {
    dispatch(saveQuizHandler());
  };

  const responseHandler = () => {
    if (currentOption === "") return;
    dispatch(setResponseHandler(true));
  };

  const questionNumber = index + 1;
  // const isDisabled = questions.length - 1 <= index;
  const isDisabled = timeout || questions.length - 1 <= index;

  return (
    <div className={styles.examPageMainWrapper}>
      <div className={styles.questionWrapper}>
        <header>
          <h1>Demo Exam</h1>
          <QuestionTab />
        </header>
        <div className={styles.questionBox}>
          <div className={styles.questionOverview}>
            <div>
              <strong>Question No.</strong>
              <span>{questionNumber}</span>
            </div>
            <div>
              <div>
                <label>View In</label>
                <span>:</span>
                <select>
                  <option value="English">English</option>
                </select>
              </div>
              <div>
                <strong>Right Mark</strong>
                <span>:4.00</span>
              </div>
              <div>
                <strong>Negative Mark</strong>
                <span>:1.00</span>
              </div>
            </div>
          </div>
          <Question />
          <div className={styles.submitWrapper}>
            <div>
              <button
                className={`${isDisabled ? "disabled" : ""}`}
                disabled={isDisabled}
                onClick={markHandler}
              >
                Mark for Review & Next
              </button>
              <button
                className={`${isDisabled ? "disabled" : ""}`}
                disabled={isDisabled}
                onClick={responseHandler}
              >
                Clear Response
              </button>
            </div>

            <button
              className={`${isDisabled ? "disabled" : ""}`}
              disabled={isDisabled}
              onClick={saveHandler}
            >
              Save & Next
            </button>
          </div>
        </div>
      </div>

      <div className={styles.resultWrapper}>
        <Timer />
        <p>Demo User</p>

        <div className={styles.questionPaletteWrapper}>
          <div className={styles.paletteBox}>
            <h4>Question Palette</h4>
            <div className={styles.paletteItem}>
              {questions.map((item, i) => {
                return (
                  <div key={i}>
                    {item.legend === "notVisited" && (
                      <NotVisited>{i + 1}</NotVisited>
                    )}
                    {item.legend === "answered" && <Answer>{i + 1}</Answer>}
                    {item.legend === "markedAnswered" && (
                      <AnswerMarke>{i + 1}</AnswerMarke>
                    )}
                    {item.legend === "marked" && <Marke>{i + 1}</Marke>}
                    {item.legend === "notAnswered" && (
                      <notAnswered>{i + 1}</notAnswered>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          <div className={styles.legendBox}>
            <h4>Legend:</h4>
            <div>
              <div>
                <Answer>{answered}</Answer>
                <span className={styles.shapeName}>Answered</span>
              </div>
              <div>
                <NotAnswer>{notAnswered}</NotAnswer>
                <span className={styles.shapeName}>Not Answered</span>
              </div>
              <div>
                <Marke>{marked}</Marke>
                <span className={styles.shapeName}>Marked</span>
              </div>
              <div>
                <NotVisited>{notVisited}</NotVisited>
                <span className={styles.shapeName}>Not Visited</span>
              </div>
              <div>
                <AnswerMarke>{markedAnswered}</AnswerMarke>
                <span className={styles.shapeName}>
                  Answered & Marked for Review
                </span>
              </div>
            </div>
            <div>
              <lable>Filter</lable>
              <select>
                <option>All</option>
              </select>
            </div>
            <div>
              <button>Question paper</button>
              <button>Instruction</button>
              <button>Profile</button>
              <button>Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExamPage;
