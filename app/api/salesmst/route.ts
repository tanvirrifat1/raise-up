import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../prisma/prisma";

export async function POST(req: NextRequest) {
  try {
    const {
      bizid,
      xdate,
      xcus,
      zemail,
      xpaymethod,
      xgrossdisc,
      xstatus,
      xrecflag,
      xyear,
      xper,
      businessId,
    } = await req.json();

    const formattedDate = new Date(xdate).toISOString();

    const result = await prisma.ecomsalesmst.create({
      data: {
        bizid: Number(bizid),
        xcus: xcus,
        zemail: zemail,
        xdate: formattedDate,
        xpaymethod: xpaymethod,
        xgrossdisc: Number(xgrossdisc),
        xstatus: xstatus,
        xrecflag: xrecflag,
        xyear: Number(xyear),
        xper: Number(xper),
      },
    });

    return NextResponse.json(
      {
        message: "salesmst create successfully",
        result,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating codes:", error);
    return NextResponse.json(
      {
        message: "Error creating codes",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const result = await prisma.ecomsalesmst.findMany({
      include: {
        ecomsalesdet: true,
        secus: true,
      },
    });

    return NextResponse.json(
      {
        message: "salesmst fetched successfully",
        result,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating customer:", error);
    return NextResponse.json(
      {
        message: "Error creating customer",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
