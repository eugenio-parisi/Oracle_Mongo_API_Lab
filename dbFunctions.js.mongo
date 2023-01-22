const { ObjectId } = require("mongodb")
const dbName = "lab_workshop" // MongoDb
const coll = "names"  // MongoDb

//const dbName = "appl1" // Oracle
//const coll = "names"   // Oracle

let db

module.exports = {

	getDb: async (client) => {
		db = await client.db(dbName)
	},

	getAllDocs: async () => {
		return await db.collection(coll).find().toArray()
	},
	
	addDoc: async (doc) => {
		return await db.collection(coll).insertOne(doc)
	},
	
	deleteDoc: async (id) => {
		const filter = { _id: new ObjectId(id) }
		return await db.collection(coll).deleteOne(filter)
	}
}
