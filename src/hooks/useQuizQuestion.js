import { useSelector } from "react-redux";
import { useQuizResult } from "./useQuizResult";

export const useQuizQuestion = () => {
  const {currentSubject} = useQuizResult();
  return useSelector((state) => state.quiz.quizQuestion[currentSubject]);
};
