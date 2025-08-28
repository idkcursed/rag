import { MemoryVectorStore } from "langchain/vectorstores/memory";

let vectorStore: MemoryVectorStore | null = null;

export function setvectorStore(store: MemoryVectorStore) {
    vectorStore = store;
}
export function getVectorStore(): MemoryVectorStore {
  if (!vectorStore) throw new Error("No vector store available. Upload a PDF first.");
  return vectorStore;
}