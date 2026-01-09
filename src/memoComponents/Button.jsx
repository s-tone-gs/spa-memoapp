export default function Button({ type, label, onClick }) {
  return (
    <button className="button" type={type} onClick={onClick}>
      {label}
    </button>
  );
}
