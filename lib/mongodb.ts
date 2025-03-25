// lib/mongodb.ts
import { MongoClient } from "mongodb"

// Ensure the URI is defined at runtime
const uri = process.env.MONGO_URI

if (!uri) {
  throw new Error("Please add your Mongo URI to .env.local")
}

// Declare variables with proper types
let client: MongoClient
let clientPromise: Promise<MongoClient>

// Extend global type inline with type assertion
const globalWithMongo = global as typeof global & {
  _mongoClientPromise?: Promise<MongoClient>
}

// Handle connection logic based on environment
if (process.env.NODE_ENV === "development") {
  // Use the global variable to persist connection across hot reloads
  if (!globalWithMongo._mongoClientPromise) {
    client = new MongoClient(uri)
    globalWithMongo._mongoClientPromise = client.connect()
  }
  clientPromise = globalWithMongo._mongoClientPromise
} else {
  // In production, create a new connection
  client = new MongoClient(uri)
  clientPromise = client.connect()
}

export default clientPromise

