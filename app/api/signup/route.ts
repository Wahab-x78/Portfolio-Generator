import type { NextRequest } from "next/server"
import clientPromise from "@/lib/mongodb"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export async function POST(req: NextRequest) {
  const { name, email, password } = await req.json()

  if (!name || !email || !password) {
    return new Response(JSON.stringify({ message: "Missing fields" }), { status: 400 })
  }

  if (password.length < 8) {
    return new Response(JSON.stringify({ message: "Password must be at least 8 characters long" }), { status: 400 })
  }

  try {
    const client = await clientPromise
    const db = client.db("builder_app")
    const users = db.collection("users")

    const existingUser = await users.findOne({ email })
    if (existingUser) {
      return new Response(JSON.stringify({ message: "User already exists" }), { status: 400 })
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = {
      name,
      email,
      password: hashedPassword,
      createdAt: new Date(),
    }

    const result = await users.insertOne(newUser)
    const token = jwt.sign({ userId: result.insertedId }, process.env.JWT_SECRET!, { expiresIn: "1h" })

    return new Response(JSON.stringify({ token }), { status: 201 })
  } catch (error) {
    console.error("Signup error:", error)
    return new Response(JSON.stringify({ message: "Internal server error" }), { status: 500 })
  }
}