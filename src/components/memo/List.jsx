import Memo from "./Memo.jsx";

function List({ memos, handleSelect }) {
  return (
    <ul className="memoList">
      {memos.map((memo) => (
        <li key={memo.id}>
          <Memo {...memo} handleSelect={handleSelect} />
        </li>
      ))}
    </ul>
  );
}

export default List;
