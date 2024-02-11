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
  transform: "translate(-64%, -65%)",
};

function Marke({ children }) {
  return (
    <div style={imgWrapper}>
      <img src="/images/marke.png" alt="marke" />
      <span style={activeNumber}>{children}</span>
    </div>
  );
}

export default Marke;
