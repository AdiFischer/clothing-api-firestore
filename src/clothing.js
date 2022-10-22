import dbConnect from "./dbConnect.js";
export function createClothing(req,res) {
    const db = dbConnect()
    db.collection('clothing').add(req.body)
    .then(doc => res.status(210).send({ success: true, message: "Clothing created: " + doc.id}))
    .catch(err => res.status(500).send({ success: false, message: err}))
}
export function getAllClothing(req,res) {
    const db = dbConnect()
    db.collection('clothing').get()
    .then(collection => {
        const clothingList = collection.docs.map(doc => doc.data())
        res.send(clothingList)
    }) 
    .catch(err => res.status(500).send({ success: false, message: err}))
}
export async function UpdateClothing(req,res){
    const { clothingId } =req.params
    const db = dbConnect()
    await db.collection('clothing')
    .findOneAndUpdate({ _id: new ObjectId(clothingId) }, { $set: req.body })
    .catch(err => {
        res.status(500).send(err)
        return
    })
    res.status(200).send({ message: "updated"})

}

