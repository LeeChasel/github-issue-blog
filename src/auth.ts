import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  trustHost: true,
  providers: [
    GitHub({
      authorization: {
        params: { scope: ["read:user", "public_repo"] },
      },
    }),
  ],

  // from jwt pass the token and login username to the session
  callbacks: {
    jwt({ token, account, profile }) {
      if (account) {
        token.token = account.access_token;
      }
      if (profile) {
        token.username = profile.login;
      }
      return token;
    },
    session({ session, token }) {
      session.user.username = token.username;
      session.token = token.token;
      return session;
    },
  },
});
