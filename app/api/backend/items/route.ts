import prisma from "../../../../prisma/prisma";
import { NextRequest, NextResponse } from "next/server";
import { incrementId } from "../../../middleware/generateUniqueID";
import { ITEM_PREFIX } from '../../../constant';


export async function GET(): Promise<NextResponse> {
  try {
    const result = await prisma.seitem.findMany();
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

export async function POST(request: NextRequest) {
  try {
    const {
      zemail,
      xdesc,
      xlongdesc,
      xunitpur,
      xunitsale,
      xtypestk,
      xcur,
      xpricepur,
      xstdcost,
      xmrp,
      xstdprice,
      xdisc,
      xvatpct,
      xcatsl,
      xsubcatsl,
      zactive,
      businessId,
    } = await request.json();

    console.log({
      zemail,
      xdesc,
      xlongdesc,
      xunitpur,
      xunitsale,
      xtypestk,
      xcur,
      xpricepur,
      xstdcost,
      xmrp,
      xstdprice,
      xdisc,
      xvatpct,
      xcatsl,
      xsubcatsl,
      zactive,
      businessId,
    });

    
    if (!businessId || businessId == 0) {
      return NextResponse.json(
        {
          error: "Business Id is required",
        },
        { status: 400 }
      );
    } else if (!zemail || zemail == "") {
      return NextResponse.json(
        {
          error: "Email is required",
        },
        { status: 400 }
      );
    } else if (!xcatsl || xcatsl == 0) {
      return NextResponse.json(
        {
          error: "Category is required",
        },
        { status: 400 }
      );
    } else if (!xsubcatsl || xsubcatsl == 0) {
      return NextResponse.json(
        {
          error: "Sub Category is required",
        },
        { status: 400 }
      );
    } else if (!xdesc || xdesc == "") {
      return NextResponse.json(
        {
          error: "Description is required",
        },
        { status: 400 }
      );
    } else if (xdesc.length >= 500) {
      return NextResponse.json(
        {
          error: "Description must be less than 500 characters",
        },
        {
          status: 400,
        }
      );
    } else if (!xlongdesc || xlongdesc == "") {
      return NextResponse.json(
        {
          error: "Long Description is required",
        },
        { status: 400 }
      );
    } else if (xlongdesc.length >= 1500) {
      return NextResponse.json(
        {
          error: "Long Description must be less than 1500 characters",
        },
        {
          status: 400,
        }
      );
    } else if (!xstdcost || xstdcost == 0) {
      return NextResponse.json(
        {
          error: "Standard Cost is required",
        },
        { status: 400 }
      );
    } else if (!xstdprice || xstdprice == 0) {
      return NextResponse.json(
        {
          error: "Standard Price is required",
        },
        { status: 400 }
      );
    } else if (!xmrp || xmrp == 0) {
      return NextResponse.json(
        {
          error: "MRP is required",
        },
        { status: 400 }
      );
    } else if (!xpricepur || xpricepur == 0) {
      return NextResponse.json(
        {
          error: "Purchase Price is required",
        },
        { status: 400 }
      );
    } else if (!xunitpur || xunitpur == 0) {
      return NextResponse.json(
        {
          error: "Purchase Unit is required",
        },
        { status: 400 }
      );
    } else if (!xunitsale || xunitsale == 0) {
      return NextResponse.json(
        {
          error: "Sale Unit is required",
        },
        { status: 400 }
      );
    } else if (!xcur || xcur == "") {
      if (xcur.length == 3) {
        return NextResponse.json(
          {
            error: "Currency must be 3 characters",
          },
          {
            status: 400,
          }
        );
      }
      return NextResponse.json(
        {
          error: "Currency is required",
        },
        { status: 400 }
      );
    } else if (!xvatpct || xvatpct == 0) {
      return NextResponse.json(
        {
          error: "VAT Percentage is required",
        },
        { status: 400 }
      );
    } else if (!xtypestk || xtypestk == "") {
      return NextResponse.json(
        {
          error: "Type of Stock is required",
        },
        { status: 400 }
      );
    }

    const xitemcode = await incrementId(
      prisma.seitem,
      "xitemcode",
      ITEM_PREFIX,
      businessId
    );

    const findCat = await prisma.category.findFirst({
      where: {
        xcatsl: Number(xcatsl),
      },
    });
    const findSubCat = await prisma.subcategory.findFirst({
      where: {
        xsubcatsl: Number(xsubcatsl),
      },
    });

    const result = await prisma.seitem.create({
      data: {
        zemail,
        xdesc,
        xlongdesc,
        xunitpur,
        xunitsale,
        xtypestk,
        xcur,
        xpricepur,
        xmrp,
        xstdprice: xstdprice,
        xdisc,
        xvatpct,
        xsubcatsl: Number(xsubcatsl),
        xcatsl: Number(xcatsl),
        bizid: Number(businessId),
        xitemcode: xitemcode,
        zactive: Number(zactive),
        xstdcost: Number(xstdcost),
        xcat: findCat?.xcat,
        xsubcat: findSubCat?.xsubcat,
      },
    });

    return NextResponse.json({
      message: "Item created successfully",
      result,
    });
  } catch (error) {
    console.error("Error creating item:", error);
    return NextResponse.json(
      {
        message: "Error creating item",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
