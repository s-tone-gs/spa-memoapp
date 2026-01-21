export default function AddMemoButton({ handleAdd }) {
  return (
    <div className="addMemoButton">
      <a onClick={handleAdd}>+</a>
    </div>
  );
}
