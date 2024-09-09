
import { withAuth } from "next-auth/middleware";
import { NextRequest, NextResponse } from "next/server";

export default withAuth(
  async function middleware(req) {
    if (
      req.nextUrl.pathname.startsWith("/dashboard") &&
      req.nextauth.token.role != "admin"
    ) {
      return NextResponse.rewrite(new URL("/denied", req.url));
    } else if (
      req.nextUrl.pathname.startsWith("/customer-dashboard") &&
      req.nextauth.token.role !== "user"
    ) {
      return NextResponse.rewrite(new URL("/denied/customer", req.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = {
  matcher: ["/dashboard/:path*", "/customer-dashboard/:path*"],
};
