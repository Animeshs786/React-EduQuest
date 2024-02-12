import { useState } from "react";

import ExamPage from "./pages/ExamPage";
import { Provider } from "react-redux";
import store from "./store";
import ProfilePage from "./pages/ProfilePage";

function App() {
  const [showQuiz, setShowQuiz] = useState(true);
  return (
    <>
      <Provider store={store}>
        {showQuiz ? (
          <ExamPage setShowQuiz={setShowQuiz} />
        ) : (
          <ProfilePage setShowQuiz={setShowQuiz} />
        )}
      </Provider>
    </>
  );
}

export default App;
