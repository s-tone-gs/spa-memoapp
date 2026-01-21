function Memo({ id, content, handleSelect }) {
  const firstLine = content.split("\n")[0];
  return (
    <button className="memo" onClick={() => handleSelect(id)}>
      {firstLine}
    </button>
  );
}

export default Memo;
