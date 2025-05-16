// lib/mongodb.ts
import { MongoClient } from 'mongodb';

// Ensure the URI is defined at runtime
const uri = process.env.MONGO_URI;

if (!uri) {
  throw new Error('Please add your Mongo URI to .env.local');
}

// Declare variables with proper types
let client: MongoClient;
let clientPromise: Promise<MongoClient>;

// Extend global type for MongoClient promise
interface GlobalWithMongo extends Global {
  _mongoClientPromise?: Promise<MongoClient>;
}

const globalWithMongo = global as GlobalWithMongo;

// Handle connection logic based on environment
if (process.env.NODE_ENV === 'development') {
  // Use global variable to persist connection across hot reloads
  if (!globalWithMongo._mongoClientPromise) {
    client = new MongoClient(uri);
    globalWithMongo._mongoClientPromise = client.connect().then((client) => {
      console.log('MongoDB connection established successfully');
      return client;
    }).catch((err) => {
      console.error('MongoDB connection failed:', err);
      throw err;
    });
  }
  clientPromise = globalWithMongo._mongoClientPromise;
} else {
  // In production, create a new connection
  client = new MongoClient(uri);
  clientPromise = client.connect().then((client) => {
    console.log('MongoDB connection established successfully');
    return client;
  }).catch((err) => {
    console.error('MongoDB connection failed:', err);
    throw err;
  });
}

export default clientPromise;