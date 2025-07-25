import { NextResponse } from "next/server";
import { authenticateUser } from "../register/route";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const user = await authenticateUser(email, password);

  if (!user) {
    return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
  }

  return NextResponse.json({ message: 'Success', user });
}