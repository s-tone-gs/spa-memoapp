import "./App.css";
import { useState } from "react";
import { useMemoList } from "./hooks/useMemoList.jsx";
import { LoginContext } from "./LoginContext.jsx";
import MemoMaster from "./components/memo/MemoMaster.jsx";
import MemoDetail from "./components/memo/MemoDetail.jsx";
import Button from "./components/Button.jsx";

function App() {
  const [login, setLogin] = useState(false);
  function handleLogin() {
    setLogin(true);
  }
  function handleLogout() {
    setLogin(false);
  }
  const {
    memos,
    selectedId,
    setSelectedId,
    handleAdd,
    handleUpdate,
    handleDestroy,
  } = useMemoList();

  return (
    <>
      <div className="login">
        {login ? (
          <Button label="ログアウト" onClick={handleLogout} />
        ) : (
          <Button label="ログイン" onClick={handleLogin} />
        )}
      </div>
      <div className="body">
        <LoginContext.Provider value={login}>
          <MemoMaster
            memos={memos}
            handleSelect={setSelectedId}
            handleAdd={handleAdd}
          />
          {selectedId !== null && (
            <MemoDetail
              {...memos.find((memo) => memo.id === selectedId)}
              handleUpdate={handleUpdate}
              handleDestroy={handleDestroy}
              key={selectedId}
            />
          )}
        </LoginContext.Provider>
      </div>
    </>
  );
}

export default App;
