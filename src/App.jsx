import "./App.css";
import { useMemoList } from "./hooks/useMemoList.jsx";
import AuthProvider from "./contexts/auth/AuthProvider.jsx";
import MemoMaster from "./components/memo/MemoMaster.jsx";
import MemoDetail from "./components/memo/MemoDetail.jsx";

function App() {
  const {
    memos,
    selectedId,
    setSelectedId,
    handleAdd,
    handleUpdate,
    handleDestroy,
  } = useMemoList();

  return (
    <AuthProvider>
      <div className="body">
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
      </div>
    </AuthProvider>
  );
}

export default App;
