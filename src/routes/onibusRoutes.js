import express from "express"
import{ getAll, getByID, createOnibus } from "../controllers/onibusController.js"

const router = express.Router()

router.get("/", getAll)
router.get("/:id", getByID)
router.post("/", createOnibus)



export default router