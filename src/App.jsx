import "./App.css";
import { useMemoList } from "./hooks/useMemos.jsx";
import MemoMaster from "./memoComponents/MemoMaster.jsx";
import MemoDetail from "./memoComponents/MemoDetail.jsx";

function App() {
  const [
    memos,
    selectedId,
    handleSelect,
    handleAdd,
    handleUpdate,
    handleDestroy,
  ] = useMemoList();
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
      }}
    >
      <MemoMaster
        memos={memos}
        handleSelectMemo={handleSelect}
        handleAddMemo={handleAdd}
      />
      {selectedId !== null && (
        <MemoDetail
          {...memos.find((memo) => memo.id === selectedId)}
          handleUpdateMemo={handleUpdate}
          handleDeleteMemo={handleDestroy}
          key={selectedId}
        />
      )}
    </div>
  );
}

export default App;
