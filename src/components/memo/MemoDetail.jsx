import { useState } from "react";
import { useContext } from "react";
import { LoginContext } from "../../LoginContext.jsx";
import Button from "../Button.jsx";

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
          <Button label="更新" type="submit" />
          <Button label="削除" onClick={handleDestroy} />
        </div>
      )}
    </form>
  );
}
