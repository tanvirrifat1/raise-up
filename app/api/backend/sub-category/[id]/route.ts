import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../prisma/prisma";
import { Prisma } from "@prisma/client";
import { validateUser } from "../../../../handler/validateUser";

export async function GET(req: NextRequest, { params }) {
  try {
    const id = parseInt(params.id);

    if (isNaN(id)) {
      return NextResponse.json(
        {
          error: "Sub category ID must be a number",
        },
        { status: 400 }
      );
    }

    if (id < 1) {
      return NextResponse.json(
        {
          error: "Sub category  ID must be a positive number",
        },
        { status: 400 }
      );
    }

    const result = await prisma.subcategory.findUniqueOrThrow({
      where: {
        xsubcatsl: id,
      },
    });

    return NextResponse.json({
      result,
    });
  } catch (error) {
    console.error("Error fetching sub category:", error);
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2025"
    ) {
      return NextResponse.json(
        {
          message: "Sub category not found",
          error: error.message,
        },
        { status: 404 }
      );
    }
    return NextResponse.json(
      {
        message: "Error fetching sub category",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

export async function PATCH(req: NextRequest, { params }) {
  try {
    const id = parseInt(params.id);

    if (isNaN(id)) {
      return NextResponse.json(
        {
          error: "Sub category ID must be a number",
        },
        { status: 400 }
      );
    }

    if (id < 1) {
      return NextResponse.json(
        {
          error: "Sub category ID must be a positive number",
        },
        { status: 400 }
      );
    }

    const datas = await req.json();

    const { businessId, name, xcatsl, ...data } = datas;

    const userInfo = await validateUser(businessId, name);

    if (userInfo) {
      const result = await prisma.subcategory.update({
        where: {
          xsubcatsl: id,
        },
        data: {
          bizid: businessId || undefined,
          xsubcat: data.xsubcat || undefined,
          xgroup: data.xgroup || undefined,
          xcatsl: Number(datas.xcatsl) || undefined,
        },
      });

      return NextResponse.json({
        message: "Sub category updated successfully",
        role: result,
      });
    }
  } catch (error) {
    console.error("Error updating sub category:", error);
    return NextResponse.json(
      {
        message: "Error updating sub category",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest, { params }) {
  try {
    const id = parseInt(params.id);

    if (isNaN(id)) {
      return NextResponse.json(
        {
          error: "Sub category ID must be a number",
        },
        { status: 400 }
      );
    }

    if (id < 1) {
      return NextResponse.json(
        {
          error: "Sub category ID must be a positive number",
        },
        { status: 400 }
      );
    }

    const result = await prisma.subcategory.delete({
      where: {
        xsubcatsl: id,
      },
    });

    return NextResponse.json({
      message: "Sub category deleted successfully",
      role: result,
    });
  } catch (error) {
    console.error("Error deleting sub category:", error);
    return NextResponse.json(
      {
        message: "Error deleting sub category",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
