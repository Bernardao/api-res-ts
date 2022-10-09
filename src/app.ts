import "dotenv/config"
import express from "express"
import cors from "cors"
import { router } from "./routes"
import db from "./config/mongo"

const app = express()
const PORT = process.env.PORT || 3001;
app.use(cors())
app.use(express.json())
app.use(router)
console.log("1")
db()
  .then(() => console.log("Conexxion ready"))
  .catch(() => console.log("ERRRFallos mongo"))
  .finally(() => console.log("F1222allos mongo"))

console.log("2")

app.listen(PORT, () => console.log(`Listo por el puerto ${PORT}`))