import { useQuizResult } from "../hooks/useQuizResult";
import styles from "./QuestionReport.module.css";
function QuestionReport() {
    const {quizQuestion}= useQuizResult();
  return (
    <div className={styles.questionMainWrapper}>
      {Object.keys(quizQuestion).map((subjectName, index) => (
        <div key={index}>
          <h2 className={styles.subjectName}>{subjectName}</h2>
          {quizQuestion[subjectName].questions.map(
            (question, questionIndex) => (
              <div key={questionIndex} className={styles.questionList}>
                <div className={styles.questionBox}>
                  <span>{questionIndex + 1}.</span>
                  <p>{question.question}</p>
                </div>
                <div className={styles.answerBox}>
                  <div>
                    <span>Correct Answer:</span>{" "}
                    <span>{question.options[question.correctOption]}</span>
                  </div>
                  <div>
                    <span>Given Answer:</span>{" "}
                    <span>
                      {question.selectedOption !== ""
                        ? question.options[question.selectedOption]
                        : "Not answered"}
                    </span>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      ))}
    </div>
  );
}

export default QuestionReport;
