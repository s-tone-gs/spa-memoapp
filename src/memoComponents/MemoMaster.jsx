import List from "./List.jsx";
import AddTrigger from "./AddTrigger.jsx";

export default function MemoMaster({ memos, handleSelectMemo, handleAddMemo }) {
  return (
    <div>
      <List memos={memos} handleSelectMemo={handleSelectMemo} />
      <AddTrigger handleAdd={handleAddMemo} />
    </div>
  );
}
