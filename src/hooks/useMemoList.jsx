import { useState } from "react";
import * as firestore from "../modules/memoFirestore.js";

export function useMemoList() {
  const [memos, setMemos] = useState(firestore.initializeMemos);
  const [selectedId, setSelectedId] = useState(null);
  function handleSelect(id) {
    setSelectedId(id);
  }
  function handleDeselect() {
    setSelectedId(null);
  }

  async function handleAdd() {
    const content = "新しいメモ";
    const { newMemoId } = await firestore.addMemo(content);
    setMemos([
      ...memos,
      {
        id: newMemoId,
        content,
      },
    ]);
    handleSelect(newMemoId);
  }

  async function handleUpdate(content) {
    await firestore.updateMemo(selectedId, content);
    const newMemos = memos.map((memo) => {
      if (memo.id === selectedId) {
        return {
          ...memo,
          content,
        };
      } else {
        return memo;
      }
    });
    setMemos(newMemos);
    handleDeselect();
  }

  async function handleDestroy() {
    await firestore.destroyMemo(selectedId);
    const newMemos = memos.filter((memo) => memo.id !== selectedId);
    setMemos(newMemos);
    handleDeselect();
  }

  return {
    memos,
    selectedId,
    handleSelect,
    handleAdd,
    handleUpdate,
    handleDestroy,
  };
}
