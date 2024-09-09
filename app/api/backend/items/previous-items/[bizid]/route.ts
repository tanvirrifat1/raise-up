import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../../prisma/prisma";
import { incrementId } from "../../../../../middleware/generateUniqueID";

export async function GET(req: NextRequest, { params }) {
  const bizid = params.bizid;

  try {
    if (!bizid) {
      return NextResponse.json({ message: "bussiness id must required" });
    }

    const bussiness = await prisma.zbusiness.findFirst({
      where: { bizid: Number(bizid) },
    });

    if (!bussiness) {
      return NextResponse.json({
        message: "bussiness id are not valid, or bussiness not found",
      });
    }

    const findItemsByBIZID = await prisma.seitem.findMany({
      where: { bizid: Number(bizid) },
      select: {
        xdesc: true,
        xitemcode: true,
        xitemid: true,
        bizid: true,
      },
    });

    return NextResponse.json(findItemsByBIZID);
  } catch (error) {
    return NextResponse.json(
      { message: "error from server", error },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest, { params }) {
  const bizid = params.bizid as { bizid: string };
  const { items } = await req.json();

  try {
    if (items.length == 0) {
      return NextResponse.json(
        { error: "Please add minimum one item" },
        { status: 401 }
      );
    }

    const mainPosts = await prisma.seitem.findMany();

    var filtered = mainPosts.filter(
      (item) => items.indexOf(item.xitemid) !== -1
    );

    const createditems = [];

    const faileditems = [];

    const incrementName = "ITEM";

    const xitemcode = await incrementId(
      prisma.seitem,
      "xitemid",
      incrementName,
      Number(bizid)
    );

    for (const item of filtered) {
      const existingitem = await prisma.seitem.findFirst({
        where: {
          bizid: Number(bizid),
          xitemcode: item.xitemcode,
        },
      });

      if (existingitem) {
        // If item already exists, add it to faileditems array
        faileditems.push({ bizid: Number(bizid), xitemcode: item.xitemcode });
      } else {
        // If item doesn't exist, create a new one
        const createditem = await prisma.seitem.create({
          data: {
            zemail: item.zemail,
            bizid: Number(bizid),
            xitemcode: item.xitemcode,
            xdesc: item.xdesc,
            xlongdesc: item.xlongdesc,
            xcatsl: item.xcatsl,
            xcat: item.xcat,
            xsubcatsl: item.xsubcatsl,
            xsubcat: item.xsubcat,
            xtype: item.xtype,
            xbrand: item.xbrand,
            xgitem: item.xgitem,
            xcitem: item.xcitem,
            xsupport: item.xsupport,
            xsup: item.xsup,
            xunitpur: item.xunitpur,
            xunitsale: item.xunitsale,
            xunitstk: item.xunitstk,
            xconversionstk: item.xconversionstk,
            xconversionsell: item.xconversionsell,
            xmandatorybatch: item.xmandatorybatch,
            xserialconf: item.xserialconf,
            xtypestk: item.xtypestk,
            xreorder: item.xreorder,
            xcur: item.xcur,
            xpricepur: item.xpricepur,
            xstdcost: item.xstdcost,
            xmrp: item.xmrp,
            xstdprice: item.xstdprice,
            xstock: item.xstock,
            xdisc: item.xdisc,
            xhscode: item.xhscode,
            xweight: item.xweight,
            xvatpct: item.xvatpct,
            zactive: item.zactive,
            xfeature: item.xfeature,
            ximages: item.ximages,
          },
        });

        createditems.push(createditem);
      }
    }

    if (faileditems.length > 0) {
      return NextResponse.json(
        {
          error: "Some items were not created because they already exist",

          faileditems,
        },
        { status: 401 }
      );
    }

    return NextResponse.json(
      {
        message: "items created successfully",

        createditems,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "error from server ",

        error,
      },
      { status: 500 }
    );
  }
}
