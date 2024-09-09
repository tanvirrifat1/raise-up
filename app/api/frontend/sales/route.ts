import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../prisma/prisma";

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
      secus,
      orderProducts,
    } = await req.json();
    const formattedDate = new Date(xdate).toISOString();
    const result = await prisma.ecomsalesmst.create({
      data: {
        bizid: Number(bizid),
        xcus: secus?.xcus,
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

    const orderProductsArr = [];
    let xrowCounter = 1;

    if (result) {
      for (const item of orderProducts) {
        const product = await prisma.ecomsalesdet.create({
          data: {
            bizid: Number(bizid),
            xcus: xcus,
            zemail: zemail,
            xdate: formattedDate,
            xpaymethod: xpaymethod,
            xecomsl: Number(result.xecomsl),
            xstatus: xstatus,
            xitemcode: item.code,
            xrow: xrowCounter,
            xyear: Number(xyear),
            xper: Number(xper),
            xqty: Number(item.quantity),
            xcost: Number(item?.cst),
            xrate: 3.4,
            xpoint: 3.1,
            xexch: 2.3,
            xdisc: Number(item?.disc),
            xtaxrate: 3.54,
            xcur: item.cur,
          },
        });

        orderProductsArr.push(product);

        xrowCounter++;
      }
    }

    return NextResponse.json(
      {
        message: "salsemst & salesdet created successfully",
        orderProductsArr,
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
