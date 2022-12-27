const Button = ({ text, newChar }) => {
  if (text === "C") {
    return (
      <button
        className="button"
        style={{ background: "red" }}
        onClick={newChar}
      >
        <p>{text}</p>
      </button>
    );
  }
  return (
    <button className="button" onClick={newChar}>
      <p>{text}</p>
    </button>
  );
};

export default Button;
