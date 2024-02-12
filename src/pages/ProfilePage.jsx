import { useState } from "react";

import QuestionReport from "../components/QuestionReport";
import ScoreCard from "../components/ScoreCard";
import styles from "./ProfilePage.module.css";

function ProfilePage({ setShowQuiz }) {
  const [tab, setTab] = useState("Score Card");

  const tabHandler = (val) => {
    setTab(val);
  };

  return (
    <div className={styles.profilePageWrapper}>
      <div className={styles.tabWrapper}>
        <ul>
          <li
            onClick={() => tabHandler("Score Card")}
            className={`${tab === "Score Card" ? styles.active : ""}`}
          >
            Score Card
          </li>
          <li
            className={`${tab === "Question Report" ? styles.active : ""}`}
            onClick={() => tabHandler("Question Report")}
          >
            Question Report
          </li>
        </ul>
      </div>
      {tab === "Score Card" && <ScoreCard setShowQuiz={setShowQuiz} />}
      {tab === "Question Report" && <QuestionReport />}
    </div>
  );
}

export default ProfilePage;
