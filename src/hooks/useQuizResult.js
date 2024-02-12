import { useSelector } from "react-redux";

export const useQuizResult = () => {
  return useSelector((state) => state.quiz);
};
