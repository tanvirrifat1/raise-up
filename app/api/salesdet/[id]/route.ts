import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../prisma/prisma";

export async function GET(req: NextRequest, { params }) {
  try {
    const id = parseInt(params.id);

    if (!id) {
      return NextResponse.json(
        {
          message: "ID is required!",
        },
        { status: 500 }
      );
    }

    const result = await prisma.ecomsalesdet.findUnique({
      where: {
        xecomdetsl: id,
      },
      include: {
        seitem: true,
        secus: true,
      },
    });

    return NextResponse.json({
      result,
    });
  } catch (error) {
    console.error("Error fetching items:", error);
    return NextResponse.json(
      {
        message: "Error fetching items",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

export async function PATCH(req: NextRequest, { params }) {
  try {
    const id = parseInt(params.id);
    if (!id) {
      return NextResponse.json(
        {
          message: "ID is required!",
        },
        { status: 500 }
      );
    }

    const data = await req.json();

    const updateData = {
      bizid: Number(data.bizid) || undefined,
      xcus: data.xcus || undefined,
      zemail: data.zemail || undefined,

      xpaymethod: data.xpaymethod || undefined,
      xrow: data.xrow || undefined,

      xqty: Number(data.xqty) || undefined,
      xcost: Number(data.xcost) || undefined,
      xrate: Number(data.xrate) || undefined,
      xpoint: Number(data.xpoint) || undefined,

      xstatus: data.xstatus || undefined,
    };

    const result = await prisma.ecomsalesdet.update({
      where: {
        xecomdetsl: id,
      },
      data: updateData,
    });

    return NextResponse.json({
      message: "salesdet updated successfully",
      role: result,
    });
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
  const id = parseInt(params.id);

  try {
    const result = await prisma.ecomsalesdet.delete({
      where: {
        xecomdetsl: id,
      },
    });

    return NextResponse.json({
      message: "salesdet delete successfully",
      result,
    });
  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json(
      {
        message: "Error fetching user",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
