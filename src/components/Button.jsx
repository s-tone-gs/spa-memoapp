function Button({ label, type = "button", onClick }) {
  return (
    <button className="triggerButton" type={type} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
