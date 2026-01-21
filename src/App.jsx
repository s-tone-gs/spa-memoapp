import "./App.css";
import { useMemoList } from "./hooks/useMemoList.jsx";
import MemoMaster from "./components/memo/MemoMaster.jsx";
import MemoDetail from "./components/memo/MemoDetail.jsx";

function App() {
  const {
    memos,
    selectedId,
    handleSelect,
    handleAdd,
    handleUpdate,
    handleDestroy,
  } = useMemoList();
  return (
    <div className="app">
      <MemoMaster
        memos={memos}
        handleSelect={handleSelect}
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
  );
}

export default App;
