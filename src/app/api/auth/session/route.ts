import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET as string

export async function GET() {
  const token = cookies().get('authToken')?.value

  if (!token) {
    return NextResponse.json({ user: null })
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as any
    return NextResponse.json({
      user: {
        id: decoded.id,
        name: decoded.name,
        email: decoded.email,
        role: decoded.role
      }
    })
  } catch (error) {
    return NextResponse.json({ user: null })
  }
}