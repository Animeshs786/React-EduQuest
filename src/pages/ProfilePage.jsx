import ScoreCard from "../components/ScoreCard";
import styles from "./ProfilePage.module.css";

function ProfilePage({setShowQuiz}) {
  return (
    <div className={styles.profilePageWrapper}>
      <div className={styles.tabWrapper}>
        <ul>
          <li className={styles.active}>Score Card</li>
          <li>Question Report</li>
        </ul>
      </div>
      <ScoreCard setShowQuiz={setShowQuiz} />
    </div>
  );
}

export default ProfilePage;
