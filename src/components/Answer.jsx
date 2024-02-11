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
  transform: " translate(-50%, -62%)",
};

function Answer({ children }) {
  return (
    <div style={imgWrapper}>
      <img src="/images/answer.png" alt="answer" />
      <span style={activeNumber}>{children}</span>
    </div>
  );
}

export default Answer;
