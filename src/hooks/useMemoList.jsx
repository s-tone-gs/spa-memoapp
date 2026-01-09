import { useState } from "react";

const initialMemos = [
  {
    id: 0,
    content: "test\ntesttest",
  },
  {
    id: 1,
    content: "1111111\n2222",
  },
  {
    id: 2,
    content: "22222222\n3333",
  },
];

let nextId = 3;

export function useMemoList() {
  const [memos, setMemos] = useState(initialMemos);
  const [selectedId, setSelectedId] = useState(null);
  function handleSelect(id) {
    setSelectedId(id);
  }
  function handleDeselect() {
    setSelectedId(null);
  }

  function handleAdd() {
    setMemos([
      ...memos,
      {
        id: nextId,
        content: "新しいメモ",
      },
    ]);
    handleSelect(nextId);
    nextId++;
  }

  function handleUpdate(text) {
    const newMemos = memos.map((memo) => {
      if (memo.id === selectedId) {
        return {
          ...memo,
          content: text,
        };
      } else {
        return memo;
      }
    });
    setMemos(newMemos);
    handleDeselect();
  }

  function handleDestroy() {
    const newMemos = memos.filter((memo) => memo.id !== selectedId);
    setMemos(newMemos);
    handleDeselect();
  }

  return [
    memos,
    selectedId,
    handleSelect,
    handleAdd,
    handleUpdate,
    handleDestroy,
  ];
}
