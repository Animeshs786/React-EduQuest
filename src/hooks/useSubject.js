import { useSelector } from "react-redux";

export const useSubject = () => {
  const { currentSubject } = useSelector((state) => state.quiz);
  return currentSubject;
};
