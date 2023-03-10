const { MongoClient } = require("mongodb")
const uri = "mongodb://localhost:27017" // MongoDb
//const uri = "mongodb://appl1:DataBase__21c@localhost:27018/?authMechanism=PLAIN&authSource=external&retryWrites=false&loadBalanced=true&tls=true&tlsAllowInvalidCertificates=true" // Oracle

const opts = { useUnifiedTopology: true }

const connect = async () => {
	try {
		console.log("# Connecting to database server...")
		const client = await MongoClient.connect(uri, opts)
		console.log("# Connected")
		return client
	}
	catch(err) {
		console.error("# Database connection error")
		throw err
	}
}

module.exports = connect;
