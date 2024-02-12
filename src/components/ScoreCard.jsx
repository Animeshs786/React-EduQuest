import styles from "./ScoreCard.module.css";
import { useQuizResult } from "../hooks/useQuizResult";
import { defaultOption, existingUser } from "../../data/constant";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  LinearScale,
  CategoryScale,
} from "chart.js";

import { Pie } from "react-chartjs-2";
import MyBarChartComponent from "./MyBarChartComponent";

ChartJS.register(ArcElement, Tooltip, Legend, LinearScale, CategoryScale);

function ScoreCard({ setShowQuiz }) {
  const {
    correctAnswer,
    wrongAnswer,
    point: score,
    quizQuestion,
    timetaken,
    timeout,
  } = useQuizResult();

  const getMyTime = () => {
    if (timeout) {
      return `${defaultOption.time} Minutes`;
    } else {
      if (timetaken > 1) {
        return `${Math.floor(timetaken)} Minutes`;
      } else {
        return `${timetaken * 60} Seconds`;
      }
    }
  };

  const myTime = getMyTime();

  const negativeMark = defaultOption.negativeMark * wrongAnswer;
  const rightMark = defaultOption.rightMark * correctAnswer;

  const getTotalQuestions = (quizQuestion) => {
    let totalQuestions = 0;

    for (const subject in quizQuestion) {
      if (quizQuestion.hasOwnProperty(subject)) {
        totalQuestions += quizQuestion[subject].questions.length;
      }
    }

    return totalQuestions;
  };

  const getTotalAnsweredQuestion = (quizQuestion) => {
    let totalQuestions = 0;

    for (const subject in quizQuestion) {
      if (quizQuestion.hasOwnProperty(subject)) {
        const questions = quizQuestion[subject].questions;
        for (const question of questions) {
          if (
            question.legend === "answered" ||
            question.legend === "markedAnswered"
          ) {
            totalQuestions++;
          }
        }
      }
    }

    return totalQuestions;
  };

  const totalQuestions = getTotalQuestions(quizQuestion);
  const totalMarks = totalQuestions * defaultOption.rightMark;
  const totalAnsweredQuestion = getTotalAnsweredQuestion(quizQuestion);
  const notAnsweredQuestion = totalQuestions - totalAnsweredQuestion;
  const percentage = (score / totalMarks) * 100;
  const isPassed = percentage >= 33;

  const existingUserScores = existingUser.map((user) => user.score);
  function getRank(num) {
    let rank = 1;
    for (let i = 0; i < existingUserScores.length; i++) {
      if (num < existingUserScores[i]) {
        rank++;
      }
    }
    return `${rank}${getOrdinalSuffix(rank)}`;
  }

  function getOrdinalSuffix(rank) {
    if (rank === 1) return "st";
    if (rank === 2) return "nd";
    if (rank === 3) return "rd";
    return "th";
  }

  const myRank = getRank(score);

  const pieState = {
    labels: [
      "Correct Question",
      "Incorrect Question",
      "Right Mark",
      "Negative Mark",
    ],
    datasets: [
      {
        label: "Question & Mark Report",
        data: [correctAnswer, wrongAnswer, rightMark, negativeMark],
        backgroundColor: [
          "rgba(255, 99, 132)",
          "rgba(54, 162, 235)",
          "rgba(255, 206, 86)",
          "#f44336",
        ],
        borderWidth: 1,
      },
    ],
  };

  const barState = {
    labels: ["Correct Question", "Incorrect Question"],
    datasets: [
      {
        label: "Student Performance",
        data: [correctAnswer, wrongAnswer],
        backgroundColor: ["rgba(255, 99, 132)", "rgba(54, 162, 235)"],
        borderWidth: 1,
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
    },
  };

  return (
    <div className={styles.profileBox}>
      <header>
        <div>
          <h4>Score Card For</h4>
          <span>Demo Exam</span>
        </div>
        <button onClick={() => setShowQuiz((prev) => !prev)}>Quiz</button>
      </header>

      <div className={styles.tableWrapper}>
        <table>
          <tbody>
            <tr>
              <td>Total No. of Student</td>
              <td className={styles.true}>{existingUser.length + 1}</td>
              <td>My Marks</td>
              <td className={styles.true}>{score}.00</td>
              <td>Correct Question</td>
              <td className={styles.true}>{correctAnswer}</td>
              <td>Incorrect Question</td>
              <td className={styles.falsy}>{wrongAnswer}</td>
            </tr>
            <tr>
              <td>Total Marks. of Test</td>
              <td className={styles.true}>{totalMarks}.00</td>
              <td>My Percentage</td>
              <td className={styles.true}>{percentage.toFixed(2)}%</td>
              <td>Right Marks</td>
              <td className={styles.true}>{rightMark}.00</td>
              <td>Negative Marks</td>
              <td className={styles.falsy}>{negativeMark}.00</td>
            </tr>
            <tr>
              <td>Total Question in Test</td>
              <td className={styles.true}>{totalQuestions}</td>
              <td>Total Answered Question in Test</td>
              <td className={styles.true}>{totalAnsweredQuestion}</td>
              <td>Left Question</td>
              <td className={styles.falsy}>{notAnsweredQuestion}</td>
              <td>Left Question Marks</td>
              <td className={styles.falsy}>0</td>
            </tr>
            <tr>
              <td>Total Time of Test</td>
              <td className={styles.true}>{defaultOption.time} Minutes</td>
              <td>My Time</td>
              <td className={styles.true}>{myTime}</td>
              <td>My rank</td>
              <td className={styles.true}>{myRank}</td>
              <td>Result</td>
              <td className={styles.result}>
                <span className={isPassed ? styles.passed : styles.failed}>
                  {isPassed ? "Passed" : "Failed"}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={styles.chartWrapper}>
        <div className={styles.barBox}>
          <div className={styles.heading}>
            <strong>Performance Report For</strong>
            <span>Demo Exam</span>
          </div>
          <div className={styles.barChart}>
            <MyBarChartComponent data={barState} />
          </div>
        </div>
        <div className={styles.pieBox}>
          <div className={styles.heading}>
            <strong>Question & Marks Wise Report For</strong>
            <span>Demo Exam</span>
          </div>
          <div className={styles.pieChart}>
            <Pie data={pieState} options={pieOptions} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScoreCard;
