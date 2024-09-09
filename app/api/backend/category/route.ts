import prisma from "../../../../prisma/prisma";
import { NextRequest, NextResponse } from "next/server";
import { validateJSON } from "../../../../utils/formValidation";
import { validateUser } from "../../../handler/validateUser";

export async function GET(): Promise<NextResponse> {
  try {
    const result = await prisma.category.findMany({
      include: {
        subcategory: true,
        zbusiness: true,
      },
    });
    return NextResponse.json({
      result,
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error fetching category",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest, { params }) {
  try {
    const datas = await request.json();

    const { businessId, name, ...data } = datas;

    if (datas.xcat === "") {
      return NextResponse.json(
        {
          error: "Category name is required",
        },
        { status: 400 }
      );
    }

    const userInfo = await validateUser(businessId, name);

    const isValid = validateJSON(data);

    if (isValid === true) {
      if (userInfo) {
        const result = await prisma.category.create({
          data: {
            bizid: businessId,
            xcat: data?.xcat,
          },
        });
        return NextResponse.json({
          message: "Category created successfully",
          result,
        });
      }
    } else {
      return NextResponse.json(
        {
          error: "Filed is missing!!",
        },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Error creating category:", error);
    return NextResponse.json(
      {
        message: "Error creating category",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
