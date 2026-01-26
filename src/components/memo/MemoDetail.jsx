import { useState } from "react";
import useAuth from "../../contexts/auth/useAuth.js";
import Button from "../Button.jsx";

export default function MemoDetail({ content, handleUpdate, handleDestroy }) {
  const { isLoggedIn } = useAuth();
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
      {isLoggedIn && (
        <div>
          <Button label="更新" type="submit" />
          <Button label="削除" onClick={handleDestroy} />
        </div>
      )}
    </form>
  );
}
