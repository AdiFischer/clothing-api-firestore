
import express from "express"
import { createClothing, getAllClothing, UpdateClothing} from "./src/clothing.js"

const app = express()
app.use(express.json())

app.post('/clothing', createClothing)
app.get('/clothing', getAllClothing)
app.patch('/clothing/:uid', UpdateClothing)


app.listen(3036, () => console.log("listening on http://localhost:3036..."))
