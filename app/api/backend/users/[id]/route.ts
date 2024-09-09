import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../prisma/prisma";
import bcrypt from "bcrypt";

export async function GET(request: NextRequest, { params }) {
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

    const result = await prisma.zuser.findUnique({
      where: {
        xuserid: id,
      },
    });
    return NextResponse.json(
      {
        message: "Role with the provided ID not found!",
        result,
      },
      { status: 404 }
    );
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      {
        message: "Error fetching user",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

export async function PATCH(request: NextRequest, { params }) {
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

    const {
      businessId,
      xaddress1,
      xrole,
      xpassword,
      xuseremail,
      xusermobile,
      xfullname,
      zactive,
    } = await request.json();
    const hashedPassword = await bcrypt.hash(xpassword, 10);
    const result = await prisma.zuser.update({
      where: {
        xuserid: id,
      },
      data: {
        bizid: Number(businessId) || undefined,
        xusername: xfullname || undefined,
        xpassword: hashedPassword || undefined,
        xfullname: xfullname || undefined,
        xrole: xrole || undefined,
        xaddress1: xaddress1 || undefined,
        xuseremail,
        xusermobile: xusermobile || undefined,
        zactive: zactive || undefined,
      },
    });

    return NextResponse.json(
      {
        message: "User updated successfully",
        role: result,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error updating user:", error);
    return NextResponse.json(
      {
        message: "Error updating user",
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

    const result = await prisma.zuser.delete({
      where: {
        xuserid: id,
      },
    });

    return NextResponse.json({
      message: "User deleted successfully",
      role: result,
    });
  } catch (error) {
    console.error("Error deleting user:", error);
    return NextResponse.json(
      {
        message: "Error deleting user",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
