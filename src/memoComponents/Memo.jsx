function Memo({ id, content, handleSelectMemo }) {
  const firstLine = content.split("\n")[0];
  return (
    <>
      <a onClick={() => handleSelectMemo(id)}>{firstLine}</a>
    </>
  );
}

export default Memo;
