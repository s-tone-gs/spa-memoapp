import { useState } from "react";

export default function MemoDetail({ content, handleUpdate, handleDestroy }) {
  const [text, setText] = useState(content);
  function handleChange(e) {
    setText(e.target.value);
  }
  return (
    <form
      className="editForm"
      onSubmit={(e) => {
        e.preventDefault();
        handleUpdate(text);
      }}
    >
      <textarea
        className="contentArea"
        value={text}
        onChange={handleChange}
      ></textarea>
      <div>
        <button className="triggerButton" type="submit">
          更新
        </button>
        <button className="triggerButton" type="button" onClick={handleDestroy}>
          削除
        </button>
      </div>
    </form>
  );
}
