const imgWrapper = {
  position: "relative",
  width: "32px",
};

const activeNumber = {
  position: "absolute",
  color: " black",
  left: "50%",
  top: "50%",
  fontSize: " 13px",
  transform: "translate(-64%, -65%)",
};

function NotVisited({ children }) {
  return (
    <div style={imgWrapper}>
      <img src="/images/notVisited.png" alt="notVisited" />
      <span style={activeNumber}>{children}</span>
    </div>
  );
}

export default NotVisited;
