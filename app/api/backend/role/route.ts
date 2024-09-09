import prisma from "../../../../prisma/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const result = await prisma.zrole.findMany();
    return NextResponse.json({
      result,
    });
  } catch (error) {
    console.error("Error fetching roles:", error);
    return NextResponse.json(
      {
        message: "Error fetching roles",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const { xrole, xroledt, businessId, email } = await request.json();

    const result = await prisma.zrole.create({
      data: {
        zemail: email,
        xrole,
        xroledt: JSON.stringify(xroledt),
        bizid: Number(businessId),
      },
    });

    return NextResponse.json(
      {
        message: "Role created successfully",
        result,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating role:", error);
    return NextResponse.json(
      {
        message: "Error creating role",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
