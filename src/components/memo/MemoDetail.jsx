import { useState } from "react";
import { useContext } from "react";
import { LoginContext } from "../../loginContext.jsx";

export default function MemoDetail({ content, handleUpdate, handleDestroy }) {
  const login = useContext(LoginContext);
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
      {login && (
        <div>
          <button className="triggerButton" type="submit">
            更新
          </button>
          <button
            className="triggerButton"
            type="button"
            onClick={handleDestroy}
          >
            削除
          </button>
        </div>
      )}
    </form>
  );
}
