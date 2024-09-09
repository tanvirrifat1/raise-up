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

    // const existingCus = await prisma.secus.findUnique({
    //   where: {
    //     xcusid: id,
    //     zemail:
    //   },
    // });

    const result = await prisma.ecomsalesmst.findUnique({
      where: {
        xecomsl: id,
      },
      include: {
        ecomsalesdet: true,
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
      businessId: Number(data.bizid) || undefined,
      xcus: data.xcus || undefined,
      zemail: data.zemail || undefined,
      xdate: data.xdate || undefined,
      xpaymethod: data.xpaymethod || undefined,
      xgrossdisc: Number(data.xgrossdisc) || undefined,
      xstatus: data.xstatus || undefined,
      xrecflag: data.xrecflag || undefined,
      xyear: Number(data.xyear),
      xper: Number(data.xper),
    };

    const result = await prisma.ecomsalesmst.update({
      where: {
        xecomsl: id,
      },
      data: updateData,
    });

    return NextResponse.json({
      message: "Item updated successfully",
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
    const result = await prisma.ecomsalesmst.delete({
      where: {
        xecomsl: id,
      },
    });

    return NextResponse.json({
      message: "salesmst delete successfully",
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
