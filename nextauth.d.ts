import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    auth_token: string;
  }
  
}
