import { NextAuthOptions } from "next-auth";
import Google from "next-auth/providers/google";
import LinkedIn from "next-auth/providers/linkedin";

export default {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    LinkedIn({
      clientId: process.env.Apple_CLIENT_ID as string,
      clientSecret: process.env.Apple_CLIENT_SECRET as string,
    }),
  ],
} satisfies NextAuthOptions;
