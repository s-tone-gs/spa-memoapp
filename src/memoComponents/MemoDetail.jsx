import { useState } from "react";
import Button from "./Button.jsx";

export default function MemoDetail({
  content,
  handleUpdateMemo,
  handleDeleteMemo,
}) {
  const [text, setText] = useState(content);
  function handleChange(e) {
    setText(e.target.value);
  }
  return (
    <form
      className="editForm"
      onSubmit={(e) => {
        e.preventDefault();
        handleUpdateMemo(text);
      }}
    >
      <textarea
        className="contentArea"
        value={text}
        onChange={handleChange}
      ></textarea>
      <div>
        <Button type="submit" label="更新" />
        <Button
          type="button"
          label="削除"
          onClick={() => handleDeleteMemo(text)}
        />
      </div>
    </form>
  );
}
