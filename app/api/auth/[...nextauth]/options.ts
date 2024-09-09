import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "../../../../prisma/prisma";
import bcrypt from "bcrypt";
import { JWT } from "next-auth/jwt";
import { NextAuthOptions } from "next-auth";

export enum Role {
  Admin = "ADMIN",
  User = "USER",
  // Add other roles as needed
}

declare module "next-auth" {
  interface User {
    role: Role;
    xuserid: number;
    bizid: number;
    xcusid: number;
  }
}

declare module "next-auth" {
  interface Session {
    user: {
      role: Role;
      email: string;
      name: string;
      password: string;
      xuserid: number;
      bizid: number;
      xcusid: number;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    bizid?: number;
    xuserid?: number;
    xcusid?: number;
  }
}

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        xuseremail: {
          label: "Email:",
          type: "email",
          placeholder: "your-Email",
        },
        xmobile: {
          label: "mobile number:",
          type: "text",
          placeholder: "your mobile numer",
        },
        xpassword: {
          label: "password:",
          type: "password",
          placeholder: "your-password",
        },
        for: {
          label: "for",
          type: "text",
          value: "customer",
        },
      },

      async authorize(
        credentials: Record<
          "xuseremail" | "xpassword" | "xmobile" | "for",
          string
        >
      ) {
        if (!credentials) return null;

        const { xuseremail, xpassword, xmobile } = credentials;

        console.log(credentials);

        if (credentials.for == "customer") {
          const customUser = await prisma.secus.findFirst({
            where: { xmobile: xmobile },
          });

          console.log(customUser);

          if (!customUser) {
            return Promise.reject(new Error("Mobile Number are not valid"));
          }

          const validPassword = await bcrypt.compare(
            xpassword,
            customUser?.xpassword
          );

          if (!validPassword) {
            return Promise.reject(new Error("Invalid password "));
          }

          return Promise.resolve({
            email: customUser?.zemail,
            name: customUser?.xcus,
            role: "user",
            xcusid: customUser?.xcusid,
            bizid: customUser?.bizid,
          });
        }

        try {
          const foundUser = await prisma.zuser.findFirst({
            where: { xuseremail: xuseremail },
            select: {
              xusername: true,
              xuserid: true,
              xrole: true,
              xuseremail: true,
              xpassword: true,
              bizid: true,
            },
          });

          const user = {
            email: foundUser?.xuseremail,
            name: foundUser?.xusername,
            role: foundUser?.xrole,
            xuserid: foundUser?.xuserid,
            bizid: foundUser?.bizid,
          };
          if (!foundUser)
            return Promise.reject(new Error("Email are not valid"));
          if (foundUser) {
            const validPassword = await bcrypt.compare(
              xpassword,
              foundUser?.xpassword
            );

            if (!validPassword) {
              return Promise.reject(new Error("Password Invalid"));
            }

            return Promise.resolve(user);
          } else {
            return Promise.resolve(null);
          }
        } catch (error) {
          console.log(error);
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const role = "role" in user ? user.role : "defaultRole";
        token.role = role;
        token.xuserid = user?.xuserid;
        token.bizid = user.bizid;
        token.xcusid = user.xcusid;
      }
      return token;
    },

    async session({ session, token }) {
      if (session?.user) {
        const role =
          "role" in token ? (token.role as Role) : ("defaultRole" as Role);
        session.user.role = role;
        session.user.xuserid = token?.xuserid;
        session.user.bizid = token?.bizid;
        session.user.xcusid = token?.xcusid;
      }
      return session;
    },
  },
  // pages: {
  //   signIn: ["/admin/login", "/login"],
  // },
};
