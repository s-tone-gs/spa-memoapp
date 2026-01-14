import List from "./List.jsx";
import AddMemoButton from "./AddMemoButton.jsx";
import { useContext } from "react";
import { LoginContext } from "../../LoginContext.jsx";

export default function MemoMaster({ memos, handleSelect, handleAdd }) {
  const login = useContext(LoginContext);
  return (
    <div>
      <List memos={memos} handleSelect={handleSelect} />
      {login && <AddMemoButton handleAdd={handleAdd} />}
    </div>
  );
}
