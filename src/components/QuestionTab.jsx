import { useDispatch, useSelector } from "react-redux";
import { currentSubjectHandler } from "../slice/quizSlice";

function QuestionTab() {
  const dispatch = useDispatch();

  const tabHandler = (subject) => {
    dispatch(currentSubjectHandler(subject));
  };

  const { currentSubject } = useSelector((state) => state.quiz);

  return (
    <div className="questionTabWrapper">
      <button
        className={`${currentSubject === "Chemistry" ? "active" : ""}`}
        onClick={() => tabHandler("Chemistry")}
      >
        Chemistry
      </button>
      <button
        className={`${currentSubject === "Physics" ? "active" : ""}`}
        onClick={() => tabHandler("Physics")}
      >
        Physics
      </button>
      <button
        className={`${currentSubject === "Maths" ? "active" : ""}`}
        onClick={() => tabHandler("Maths")}
      >
        Maths
      </button>
    </div>
  );
}

export default QuestionTab;
