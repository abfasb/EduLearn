import { NextResponse, NextRequest } from 'next/server'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET as string

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname
  const isPublicPath = path === '/login'

  if (isPublicPath) {
    return NextResponse.next()
  }

  const token = request.cookies.get('authToken')?.value

  if (!token) {
    return NextResponse.redirect(new URL('/login', request.nextUrl))
  }

  try {
    jwt.verify(token, JWT_SECRET)
    return NextResponse.next()
  } catch (error) {
    return NextResponse.redirect(new URL('/login', request.nextUrl))
  }
}

export const config = {
  matcher: [
    '/courses',
    '/main-courses',
    '/dashboard'
  ],
}