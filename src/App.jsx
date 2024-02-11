import ExamPage from "./pages/ExamPage";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <>
      <Provider store={store}>
        <ExamPage />
      </Provider>
    </>
  );
}

export default App;
