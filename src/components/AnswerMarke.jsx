const imgWrapper = {
  position: "relative",
  width: "32px",
};

const activeNumber = {
  position: "absolute",
  color: " #fff",
  left: "50%",
  top: "50%",
  fontSize: " 13px",
  transform: "translate(-65%, -75%)",
};

function AnswerMarke({ children }) {
  return (
    <div style={imgWrapper}>
      <img src="/images/answerMarke.png" alt="answerMarke" />
      <span style={activeNumber}>{children}</span>
    </div>
  );
}

export default AnswerMarke;
