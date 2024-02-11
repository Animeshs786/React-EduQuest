import AnswerList from "./AnswerList";
import styles from "./Question.module.css";
import { useQuizQuestion } from "../hooks/useQuizQuestion";

function Question() {
  const { index, questions } = useQuizQuestion();
  console.log(questions);
  return (
    <div className={styles.questionContent}>
      <div className={styles.question}>
        <p>{questions[index].question}</p>
      </div>
      <AnswerList
        selectedOption={questions[index].selectedOption}
        options={questions[index].options}
      />
    </div>
  );
}

export default Question;
