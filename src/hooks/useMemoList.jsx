import { useEffect, useState } from "react";
import * as firestore from "../modules/memoFirestore.js";

export function useMemoList() {
  const [memos, setMemos] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    const loadMemo = async () => {
      const memos = await firestore.getMemos();
      setMemos(memos);
    };
    loadMemo();
  }, []);

  async function handleAdd() {
    const content = "新しいメモ";
    const { newMemoId } = await firestore.addMemo(content);
    setMemos((prevMemos) => [
      ...prevMemos,
      {
        id: newMemoId,
        content,
      },
    ]);
    setSelectedId(newMemoId);
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
    setSelectedId(null);
  }

  async function handleDestroy() {
    await firestore.destroyMemo(selectedId);
    const newMemos = memos.filter((memo) => memo.id !== selectedId);
    setMemos(newMemos);
    setSelectedId(null);
  }

  return {
    memos,
    selectedId,
    setSelectedId,
    handleAdd,
    handleUpdate,
    handleDestroy,
  };
}
