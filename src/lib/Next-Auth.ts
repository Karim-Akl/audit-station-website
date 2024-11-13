import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import AppleProvider  from "next-auth/providers/apple";
import { BASE_URL } from "@/lib/actions/user";
import { setSession } from "@/app/[locale]/actions/setSession";

interface User {
  name: string;
  email: string;
  image: string;
  id: string | number;
}

interface UserDetails {
  full_name: string;
  username: string;
  email: string;
  password: string;
  gender: string;
  mobile_number: string;
  auth_provider: string | null;
}

function createUserData(user: User, authProvider: string | null) {
  return {
    full_name: user.name,
    username: user.name,
    email: user.email,
    password: "Bronto@123",
    gender: "male",
    mobile_number: "1234567890",
    auth_provider: authProvider,
  };
}

async function registerUserWithSSoProvider(userData: UserDetails) {
  const response: Response = await fetch(BASE_URL + "/auth/social_auth/user", {
    method: "POST",
    body: JSON.stringify(userData),
    headers: { "Content-Type": "application/json" },
  });

  let data;
  if (response.ok) {
    data = await response.json();
  }
  return { response, data };
}

const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    AppleProvider({
      clientId: process.env.Apple_CLIENT_ID as string,
      clientSecret: process.env.Apple_CLIENT_SECRET as string,
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    async signIn({ user, account }) {
      const userData = createUserData(
        user as User,
        account ? account.provider : null
      );
      const { response, data } = await registerUserWithSSoProvider(userData);
      if (response.status === 201 || response.status === 200) {
        setSession(data);
        return true;
      } else {
        throw new Error(
          data?.email?.[0] || response.statusText || "Something went wrong"
        );
      }
    },
  },
  debug: process.env.NODE_ENV !== "production",
  secret: process.env.AUTH_SECRET,
  pages: {
    error: "/authError",
  },
};

export default authOptions;
