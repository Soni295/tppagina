function Spinner({ size }) {
  if (!size) size = 34;

  return (
    <div
      style={{
        width: size + "px",
        height: size + "px",
      }}
      className="spinner"
    ></div>
  );
}
export default Spinner;
