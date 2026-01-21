import List from "./List.jsx";
import AddMemoButton from "./AddMemoButton.jsx";

export default function MemoMaster({ memos, handleSelect, handleAdd }) {
  return (
    <div>
      <List memos={memos} handleSelect={handleSelect} />
      <AddMemoButton handleAdd={handleAdd} />
    </div>
  );
}
