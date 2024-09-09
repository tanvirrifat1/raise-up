import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const previousItem = await req.json();

  try {
    return NextResponse.json({ message: "ok." });
  } catch (error) {
    return NextResponse.json(
      { message: "error from server", error },
      { status: 500 }
    );
  }
}
