import fs from "fs";
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { setvectorStore } from "./vectorstore";

export async function processPDF(filePath: string) {
    const loader = new PDFLoader(filePath);
    const docs = await loader.load();

    const embeddings = new GoogleGenerativeAIEmbeddings({
         model: "embedding-001",
         apiKey: process.env.GEMINI_API_KEY!,

    });

    const vectorstore = await MemoryVectorStore.fromDocuments(docs,embeddings);
        setvectorStore(vectorstore)

        fs.unlinkSync(filePath);



}

