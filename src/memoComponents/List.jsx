import Memo from "./Memo.jsx";

function List({ memos, handleSelectMemo }) {
  const memoList = memos.map((memo) => {
    return (
      <li key={memo.id}>
        <Memo {...memo} handleSelectMemo={handleSelectMemo} />
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
