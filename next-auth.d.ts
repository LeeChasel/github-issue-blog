import NextAuth, { DefaultSession } from "next-auth";
import { type DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    token?: string;
    user: DefaultSession["user"] & {
      username?: string;
    };
  }
  interface Profile {
    login?: string;
  }
}

// will automatically be merged with the DefaultJWT interface
declare module "next-auth/jwt" {
  interface JWT {
    token?: string;
    username?: string;
  }
}
