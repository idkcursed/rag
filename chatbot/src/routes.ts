import { Router } from "express";
import multer from "multer";
import { processPDF } from "./embeddings";

const upload = multer({ dest: "uploads/" });

const router = Router();

router.post("/upload", upload.single("file"), async (req, res) => {
    try{
        if(!req.file){
            return res.status(400).send("No file uploaded");
        }
        await processPDF(req.file.path);
        res.send("File uploaded successfully");
    } catch (error) {
        res.status(500).send("Error uploading file");
    }
});
router.post("/query", (req, res) => {
    try{
    const {question} = req.body;
    if(!question) return res.status(400).send("No question provided");
    } catch (error) {
        res.status(500).send("Error processing query");
    }
});
export default router;