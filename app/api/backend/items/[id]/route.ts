import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../prisma/prisma";

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

    const result = await prisma.seitem.findUnique({
      where: {
        xitemid: id,
      },
      include: {
        category: true,
        subcategory: true,
        ecomsales_temp: true,
        ecomsalesdet: true,
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

    const result = await prisma.seitem.update({
      where: {
        xitemid: id,
      },
      data: {
        bizid: data.businessId || undefined,
        xdesc: data.xdesc || undefined,
        xlongdesc: data.xlongdesc || undefined,
        xcat: data.xcat || undefined,
        xtype: data.xtype || undefined,
        xbrand: data.xbrand || undefined,
        xgitem: data.xgitem || undefined,
        xcitem: data.xcitem || undefined,
        xsupport: data.xsupport || undefined,
        xsup: data.xsup || undefined,
        xunitpur: data.xunitpur || undefined,
        xunitsale: data.xunitsale || undefined,
        xunitstk: data.xunitstk || undefined,
        xconversionstk: data.xconversionstk || undefined,
        xconversionsell: data.xconversionsell || undefined,
        xmandatorybatch: data.xmandatorybatch || undefined,
        xserialconf: data.xserialconf || undefined,
        xtypestk: data.xtypestk || undefined,
        xreorder: data.xreorder || undefined,
        xpricepur: data.xpricepur || undefined,
        xstdcost: data.xstdcost || undefined,
        xmrp: data.xmrp || undefined,
        xstdprice: data.xstdprice || undefined,
        xstock: data.xstock || undefined,
        xdisc: data.xdisc || undefined,
        xhscode: data.xhscode || undefined,
        xweight: data.xweight || undefined,
        xvatpct: data.xvatpct || undefined,
        xfeature: data.xfeature || undefined,
        // xsubcat: subCategoryInfo.xsubcat || undefined,
        // xsubcatsl: subCategoryInfo.xsubcatsl || undefined,
        // xcatsl: subCategoryInfo.category.xcatsl || undefined,
        ximages: data.ximages || undefined,
        xcur: data.xcur || undefined,
        zactive: Number(data?.zactive) || undefined,
      },
    });
    return NextResponse.json({
      message: "Item updated successfully",
      role: result,
    });
    // }
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
    if (!id) {
      return NextResponse.json(
        {
          message: "ID is required!",
        },
        { status: 500 }
      );
    }

    const result = await prisma.seitem.delete({
      where: {
        xitemid: id,
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
