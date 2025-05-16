import type { NextRequest } from "next/server"
import clientPromise from "@/lib/mongodb"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export async function POST(req: NextRequest) {
  const { email, password } = await req.json()

  if (!email || !password) {
    return new Response(JSON.stringify({ message: "Missing fields" }), { status: 400 })
  }

  try {
    const client = await clientPromise
    const db = client.db("builder_app")
    const users = db.collection("users")

    const user = await users.findOne({ email })
    if (!user) {
      return new Response(JSON.stringify({ message: "Invalid credentials" }), { status: 400 })
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
      return new Response(JSON.stringify({ message: "Invalid credentials" }), { status: 400 })
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET!, { expiresIn: "1h" })

    return new Response(JSON.stringify({ token }), { status: 200 })
  } catch (error) {
    console.error("Login error:", error)
    return new Response(JSON.stringify({ message: "Internal server error" }), { status: 500 })
  }
}