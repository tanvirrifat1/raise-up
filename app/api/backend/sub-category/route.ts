import prisma from "../../../../prisma/prisma";
import { NextRequest, NextResponse } from "next/server";
import { validateJSON } from "../../../../utils/formValidation";
import { validateUser } from "../../../handler/validateUser";

export async function GET(): Promise<NextResponse> {
  try {
    const result = await prisma.subcategory.findMany();
    return NextResponse.json({
      result,
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error fetching sub category",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const datas = await request.json();

    const { businessId, name, xsubcat, xcatsl } = datas;

    const userInfo = await validateUser(businessId, name);

    if (userInfo) {
      const result = await prisma.subcategory.create({
        data: {
          bizid: businessId,
          xsubcat: xsubcat,
          xcatsl: xcatsl,
        },
      });

      return NextResponse.json({
        message: "Sub Category created successfully",
        result,
      });
    }
  } catch (error) {
    console.error("Error creating sub category:", error);
    return NextResponse.json(
      {
        message: "Error creating sub category",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
