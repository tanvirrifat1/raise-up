import prisma from "../../../../prisma/prisma";
import { NextRequest, NextResponse } from "next/server";
export async function POST(request: NextRequest) {
  try {
    const datas = await request.json();
    const products = await prisma.seitem.findMany({
      where: {
        xitemid: {
          in: datas.productsId,
        },
      },
    });
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
