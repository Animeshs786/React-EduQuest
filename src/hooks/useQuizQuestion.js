import { useSelector } from "react-redux";
import { useSubject } from "./useSubject";

export const useQuizQuestion = () => {
  const currentSubject = useSubject();
  return useSelector((state) => state.quiz.quizQuestion[currentSubject]);
};
