import express from "express";
import dotenv from "dotenv";
import onibusRoutes from "./src/routes/onibusRoutes.js"

const app = express()
app.use(express.json())

dotenv.config()
const serverPort = process.env.Port || 3001

app.get("/", (req, res) => {
    res.send("Servidor Funcionando")
})

app.use("/onibus", onibusRoutes)


app.listen(serverPort, () => {
    console.log(`servidor rodando em http://localhost:${serverPort}`)
})