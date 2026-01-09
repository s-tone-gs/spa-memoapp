function Memo({ id, content, handleSelectMemo }) {
  return (
    <>
      <a onClick={() => handleSelectMemo(id)}>{content.split("\n")[0]}</a>
    </>
  );
}

export default Memo;
