import express from "express"
import{ getAll, getByID, createOnibus, deletaOnibus, updateOnibus } from "../controllers/onibusController.js"

const router = express.Router()

router.get("/", getAll)
router.get("/:id", getByID)
router.post("/", createOnibus)
router.delete("/:id", deletaOnibus)
router.put("/:id", updateOnibus)



export default router