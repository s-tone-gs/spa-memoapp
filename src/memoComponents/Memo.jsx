function Memo({ id, content, handleSelect }) {
  const firstLine = content.split("\n")[0];
  return (
    <>
      <a onClick={() => handleSelect(id)}>{firstLine}</a>
    </>
  );
}

export default Memo;
