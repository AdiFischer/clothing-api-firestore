
import express from "express"
import { createClothing, getAllClothing} from "./src/clothing.js"

const app = express()
app.use(express.json())

app.post('/clothing', createClothing)
// app.post('/clothing', )
app.get('/clothing', getAllClothing)


app.listen(3036, () => console.log("listening on http://localhost:3036..."))
