import { NextResponse } from "next/server";
import prisma from "../../prisma/prisma";

export const validateUser = async (bizId: number, userName: string) => {
  if (!bizId) {
    return NextResponse.json(
      {
        error: "Business ID is not valid!!",
      },
      { status: 400 }
    );
  }

  if (!userName) {
    return NextResponse.json(
      {
        error: "Username is not valid!!",
      },
      { status: 400 }
    );
  }

  const validUser = await prisma.zuser.findFirst({
    where: {
      bizid: Number(bizId),
      xusername: userName,
    },
    include: {
      zbusiness: true,
      zrole: true,
    },
  });

  return validUser;
};
