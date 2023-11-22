import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const reqBody = await request.json()
  console.log(reqBody)
  return NextResponse.json({ status: 200, message: 'success' })
}
