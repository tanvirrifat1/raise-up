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
      xper,
      xecomsl,
      xrow,
      xitemcode,
      xqty,
      xcost,
      xpoint,
      xexch,
      xrate,
      xcur,
      xdisc,
      xtaxrate,
      xyear,
    } = await req.json();

    const formattedDate = new Date(xdate).toISOString();

    const result = await prisma.ecomsalesdet.create({
      data: {
        bizid: Number(bizid),
        xcus: xcus,
        zemail: zemail,
        xdate: formattedDate,
        xpaymethod: xpaymethod,
        xecomsl: Number(xecomsl),
        xstatus: xstatus,
        xitemcode: xitemcode,
        xrow: Number(xrow),
        xyear: Number(xyear),
        xper: Number(xper),
        xqty: Number(xqty),
        xcost: Number(xcost),
        xrate: Number(xrate),
        xpoint: Number(xpoint),
        xexch: Number(xexch),
        xdisc: Number(xdisc),
        xtaxrate: Number(xtaxrate),
        xcur: xcur,
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
    const result = await prisma.ecomsalesdet.findMany({
      include: {
        secus: true,
        seitem: true,
      },
    });

    return NextResponse.json(
      {
        message: "ecomsalesdet fetched successfully",
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
