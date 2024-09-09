import prisma from "../../../../prisma/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const data = await request.json();
  try {
    // Use Prisma create method with the correct data structure
    const item = await prisma.seitem.create({
      data,
    });

    return NextResponse.json({
      message: "Item created successfully",
      item,
    });
  } catch (error) {
    console.error("Error creating item:", error);
    return NextResponse.json(
      {
        message: "Error creating item",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const products = await prisma.seitem.findMany({
      where: {
        bizid: 1,
      },
    });
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
