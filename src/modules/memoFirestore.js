// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
const env = import.meta.env;

const firebaseConfig = {
  apiKey: env.VITE_FIREBASE_API_KEY,
  authDomain: env.VITE_AUTH_DOMAIN,
  projectId: env.VITE_PROJECT_ID,
  storageBucket: env.VITE_STORAGE_BUCKET,
  messagingSenderId: env.VITE_MESSAGING_SENDER_ID,
  appId: env.VITE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const collection_name = env.VITE_FIRESTORE_COLLECTION_NAME;

export async function getMemos() {
  const memosRef = collection(db, collection_name);
  const memos = await getDocs(memosRef);
  return memos.docs.map((memo) => {
    return {
      id: memo.id,
      content: memo.data().content,
    };
  });
}

export async function addMemo(content) {
  const memoRef = await addDoc(collection(db, collection_name), {
    content,
  });
  return { newMemoId: memoRef.id };
}

export async function updateMemo(id, content) {
  const memoRef = doc(db, collection_name, id);
  await updateDoc(memoRef, {
    content,
  });
}

export async function destroyMemo(id) {
  const memoRef = doc(db, collection_name, id);
  await deleteDoc(memoRef);
}
