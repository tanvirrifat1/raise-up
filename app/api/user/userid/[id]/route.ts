import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../prisma/prisma";


export async function GET(request: NextRequest, { params }) {

    const id = params.id as { id: string }

    try {
        const user = await prisma.zuser.findFirst({
            where: {
                xuserid: Number(id),

            },
            select: {
                zrole: {
                    select: {
                        xrole: true,
                        xroledt: true
                    }
                }
            },

        });

        if (!user) {
            return NextResponse.json({ error: 'user are not found' }, { status: 400 })
        }

        const menuArray = JSON.parse(user.zrole.xroledt);
        return NextResponse.json(menuArray);

    } catch (error) {

        return NextResponse.json(
            {
                message: "Error fetching user",
                error: error.message,
            },
            { status: 500 }
        );
    }
}