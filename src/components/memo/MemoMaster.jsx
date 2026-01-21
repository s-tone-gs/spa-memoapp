import List from "./List.jsx";
import AddTrigger from "./AddTrigger.jsx";

export default function MemoMaster({ memos, handleSelect, handleAdd }) {
  return (
    <div>
      <List memos={memos} handleSelect={handleSelect} />
      <AddTrigger handleAdd={handleAdd} />
    </div>
  );
}
