import { NextRequest, NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";
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

    const existingRole = await prisma.zrole.findUnique({
      where: {
        xroleid: id,
      },
    });

    if (!existingRole) {
      return NextResponse.json(
        {
          message: "ID Not Matched!",
        },
        { status: 404 }
      );
    }

    const result = await prisma.zrole.findUnique({
      where: {
        xroleid: id,
      },
    });
    return NextResponse.json({
      result,
    });
  } catch (error) {
    console.error("Error fetching roles:", error);
    return NextResponse.json(
      {
        message: "Error fetching roles",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

export async function PATCH(req:NextRequest, { params }) {
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

    const existingRole = await prisma.zrole.findUnique({
      where: {
        xroleid: id,
      },
    });

    if (!existingRole) {
      return NextResponse.json(
        {
          message: "Role with the provided ID not found!",
        },
        { status: 404 }
      );
    }

    const data = await req.json();

    const result = await prisma.zrole.update({
      where: {
        xroleid: id,
      },
      data: {
        zemail: data.zemail || undefined,
        xrole: data.xrole || undefined,
        xroledt: JSON.stringify(data.xroledt) || undefined,
        bizid: data.businessId || undefined,
      },
    });

    return NextResponse.json(
      {
        message: "Role updated successfully",
        role: result,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error updating role:", error);
    return NextResponse.json(
      {
        message: "Error updating role",
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

    const existingRole = await prisma.zrole.findUnique({
      where: {
        xroleid: id,
      },
    });

    if (!existingRole) {
      return NextResponse.json(
        {
          message: "ID Not Matched!",
        },
        { status: 404 }
      );
    }

    const result = await prisma.zrole.delete({
      where: {
        xroleid: id,
      },
    });

    return NextResponse.json({
      message: "Role deleted successfully",
      role: result,
    });
  } catch (error) {
    console.error("Error deleting role:", error);
    return NextResponse.json(
      {
        message: "Error deleting role",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
