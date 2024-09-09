import { zbusiness } from "@prisma/client";
import prisma from "../../../../prisma/prisma";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

// zbusiness Prisma model
type ZBusiness = {
  bizid: number;
};

// Prisma model
type Secus = {
  zemail: string;
  xemail?: string | null;
  xcus: string;
  xcusid: number;
  ztime: Date;
  zutime?: Date | null;
  bizid: number;
  xshort?: string | null;
  xorg?: string | null;
  xaddress1?: string | null;
  xaddress2?: string | null;
  xcity?: string | null;
  xstate?: string | null;
  xcountry?: string | null;
  xcontact?: string | null;
  xphone?: string | null;
  xmobile?: string | null;
  xnid?: string | null;
  xtaxno?: string | null;
  xtaxscope?: string | null;
  xgcus?: string | null;
  xcustype?: string | null;
  xempclosed?: string | null;
  xdiscountpct?: number | null;
  xemp: string;
  xcreditlimit?: number | null;
  zactive?: number | null;
};

export async function POST(request: NextRequest) {
  const {
    zemail,

    xcus,

    xaddress1,

    xmobile,

    zactive,
    xpassword,
  } = await request.json();

  const hashedPassword = await bcrypt.hash(xpassword, 10);

  try {
    const result = await prisma.secus.create({
      data: {
        bizid: 1,
        zemail,
        xpassword: hashedPassword,
        xcus,
        xaddress1,
        xmobile: String(xmobile),
        xemp: "any",
        zactive: Number(zactive),
      },
    });

    return NextResponse.json({
      message: "Customer created successfully",
      result,
    });
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

export async function GET() {
  try {
    const result = await prisma.secus.findMany({
      include: {
        ecomsales_temp: true,
        ecomsalesdet: true,
        ecomsalesmst: true,
        zbusiness: true,
      },
    });
    return NextResponse.json({
      message: "All customers get successfully",
      result,
    });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
