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
          error: "Category ID must be a number",
        },
        { status: 400 }
      );
    }

    if (id < 1) {
      return NextResponse.json(
        {
          error: "Category ID must be a positive number",
        },
        { status: 400 }
      );
    }

    const result = await prisma.category.findUniqueOrThrow({
      where: {
        xcatsl: id,
      },
      include: {
        subcategory: true,
        zbusiness: true,
      },
    });

    return NextResponse.json({
      result,
    });
  } catch (error) {
    console.error("Error fetching category:", error);
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2025"
    ) {
      return NextResponse.json(
        {
          message: "Category not found",
          error: error.message,
        },
        { status: 404 }
      );
    }
    return NextResponse.json(
      {
        message: "Error fetching category",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

export async function PATCH(req: NextRequest, { params }) {
  try {
    console.log(params);
    const id = parseInt(params.id);

    console.log(id);

    if (isNaN(id)) {
      return NextResponse.json(
        {
          error: "Category ID must be a number",
        },
        { status: 400 }
      );
    }

    const datas = await req.json();
    const { businessId, name, ...data } = datas;

    const userInfo = await validateUser(businessId, name);

    const updateData = {
      bizid: businessId,
      xcat: data.xcat || undefined,
    };

    if (userInfo) {
      const result = await prisma.category.update({
        where: {
          xcatsl: id,
        },
        data: updateData,
      });

      return NextResponse.json({
        message: "Item updated successfully",
        role: result,
      });
    }
  } catch (error) {
    console.error("Error updating item:", error);
    return NextResponse.json(
      {
        message: "Error updating item",
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
          error: "Category ID must be a number",
        },
        { status: 400 }
      );
    }

    if (id < 1) {
      return NextResponse.json(
        {
          error: "Category ID must be a positive number",
        },
        { status: 400 }
      );
    }

    const result = await prisma.category.delete({
      where: {
        xcatsl: id,
      },
    });

    return NextResponse.json({
      message: "Item deleted successfully",
      role: result,
    });
  } catch (error) {
    console.error("Error deleting item:", error);
    return NextResponse.json(
      {
        message: "Error deleting item",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
