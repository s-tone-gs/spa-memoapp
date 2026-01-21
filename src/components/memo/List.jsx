import Memo from "./Memo.jsx";

function List({ memos, handleSelect }) {
  const memoList = memos.map((memo) => {
    return (
      <li key={memo.id}>
        <Memo {...memo} handleSelect={handleSelect} />
      </li>
    );
  });
  return (
    <>
      <ul>{memoList}</ul>
    </>
  );
}

export default List;
