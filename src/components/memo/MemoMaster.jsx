import { useContext } from "react";
import { LoginContext } from "../../LoginContext.jsx";
import AddMemoButton from "./AddMemoButton.jsx";
import List from "./List.jsx";

export default function MemoMaster({ memos, handleSelect, handleAdd }) {
  const login = useContext(LoginContext);
  return (
    <div>
      <List memos={memos} handleSelect={handleSelect} />
      {login && <AddMemoButton handleAdd={handleAdd} />}
    </div>
  );
}
