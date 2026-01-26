import useAuth from "../../contexts/auth/useAuth.js";
import AddMemoButton from "./AddMemoButton.jsx";
import List from "./List.jsx";

function MemoMaster({ memos, handleSelect, handleAdd }) {
  const { isLoggedIn } = useAuth();
  return (
    <div>
      <List memos={memos} handleSelect={handleSelect} />
      {isLoggedIn && <AddMemoButton handleAdd={handleAdd} />}
    </div>
  );
}

export default MemoMaster;
