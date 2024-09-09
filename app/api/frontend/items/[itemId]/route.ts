import prisma from "../../../../../prisma/prisma";
import { NextRequest, NextResponse } from "next/server";

// Prisma model
type Seitem = {
  xitemid: number;
  ztime: Date;
  bizid: number;
  xitemcode: string;
  xdesc: string;
  xlongdesc: string;
  xcat: string;
  xtype?: string | null;
  xbrand?: string | null;
  ximage?: string | null;
  ximage_details?: string | null;
  xgitem?: string | null;
  xcitem?: string | null;
  xsupport?: string | null;
  xsup?: string | null;
  xunitpur?: string | null;
  xunitsale?: string | null;
  xunitstk?: string | null;
  xconversionstk: number;
  xconversionsell: number;
  xmandatorybatch?: string | null;
  xserialconf: string;
  xtypestk: string;
  xreorder: number;
  xcur?: string | null;
  xpricepur?: number | null;
  xstdcost?: number | null;
  xmrp?: number | null;
  xstdprice: number;
  xstock: number;
  xdisc: number;
  xhscode?: string | null;
  xweight: number;
  xvatpct: number;
  zactive: number;
  xfeature?: string | null;
  ximages?: string | null;
  xusername: string;
};
export async function GET(request: NextRequest, { params }) {
  const id = parseInt(params.itemId);
  try {
    const item = await prisma.seitem.findUnique({
      where: {
        xitemid: id,
      },
    });
    if (item === null) {
      return NextResponse.json({
        message: `The ${id} no id item is not available`,
      });
    }

    return NextResponse.json({
      message: "single item fetched successfully",
      item,
    });
  } catch (error) {
    console.error("Error fetching item:", error);
    return NextResponse.json(
      {
        message: "Error fetching item",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
