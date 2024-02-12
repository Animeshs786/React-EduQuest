import { initialState } from "../../data/constant";

const updateQuizQuestionState = (
  state,
  isLastQuestion,
  isCorrect,
  actionType
) => {
  const index = state.quizQuestion[state.currentSubject].index;
  const currentOption = state.currentOption;
  const questionState = state.quizQuestion[state.currentSubject];

  return {
    ...state,
    point: state.point + (currentOption === "" ? 0 : isCorrect ? 4 : -1),
    correctAnswer: state.correctAnswer + (isCorrect ? 1 : 0),
    wrongAnswer:
      currentOption === ""
        ? state.wrongAnswer
        : state.wrongAnswer + (!isCorrect ? 1 : 0),
    currentOption: "",
    quizQuestion: {
      ...state.quizQuestion,
      [state.currentSubject]: {
        ...questionState,
        notVisited: questionState.notVisited - 1,
        index: isLastQuestion ? index : index + 1,
        visitedAll: isLastQuestion ? true : false,
        [actionType === "quiz/markReview" ? "marked" : "notAnswered"]:
          currentOption === ""
            ? questionState[
                actionType === "quiz/markReview" ? "marked" : "notAnswered"
              ] + 1
            : questionState[
                actionType === "quiz/markReview" ? "marked" : "notAnswered"
              ],
        [actionType === "quiz/markReview" ? "markedAnswered" : "answered"]:
          currentOption === ""
            ? questionState[
                actionType === "quiz/markReview" ? "markedAnswered" : "answered"
              ]
            : questionState[
                actionType === "quiz/markReview" ? "markedAnswered" : "answered"
              ] + 1,
        questions: questionState.questions.map((question, i) => {
          if (i === index) {
            return {
              ...question,
              legend:
                actionType === "quiz/markReview"
                  ? currentOption === ""
                    ? "marked"
                    : "markedAnswered"
                  : currentOption === ""
                  ? "notAnswered"
                  : "answered",
              selectedOption: currentOption,
            };
          }
          return question;
        }),
      },
    },
  };
};

const quizReducer = (state = initialState, action) => {
  const isLastQuestion =
    state.quizQuestion[state.currentSubject].index ===
    state.quizQuestion[state.currentSubject].questions.length - 1;

  const currentQuestion =
    state.quizQuestion[state.currentSubject].questions[
      state.quizQuestion[state.currentSubject].index
    ];

  const isCorrect = state.currentOption === currentQuestion.correctOption;

  switch (action.type) {
    case "quiz/currentSubject":
      return { ...state, currentSubject: action.payload, currentOption: "" };

    case "quiz/setResponse":
      return { ...state, clearResponse: action.payload, currentOption: "" };

    case "quiz/currentOption":
      return { ...state, currentOption: action.payload };

    case "quiz/markReview":
      return updateQuizQuestionState(
        state,
        isLastQuestion,
        isCorrect,
        "quiz/markReview"
      );

    case "quiz/save":
      return updateQuizQuestionState(
        state,
        isLastQuestion,
        isCorrect,
        "quiz/save"
      );

    case "quiz/timeout":
      return { ...state, timeout: true };

    case "quiz/submit":
      return { ...state, completed: true };

    case "quiz/timetaken":
      return { ...state, timetaken:action.payload };

    default:
      return state;
  }
};

export default quizReducer;

//action creater

export const currentSubjectHandler = (subject) => {
  return { type: "quiz/currentSubject", payload: subject };
};

export const currentOptionHandler = (option) => {
  return { type: "quiz/currentOption", payload: option };
};

export const markReviewHandler = () => {
  return { type: "quiz/markReview" };
};

export const saveQuizHandler = () => {
  return { type: "quiz/save" };
};

export const timeoutHandler = () => {
  return { type: "quiz/timeout" };
};

export const quizSubmitHandler = () => {
  return { type: "quiz/submit" };
};

export const setResponseHandler = (res) => {
  return { type: "quiz/setResponse", payload: res };
};

export const setTimeTakenHandler = (res) => {
  return { type: "quiz/timetaken", payload: res };
};
