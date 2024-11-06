import { NextApiResponse } from "next";
import { BASE_URL } from "@/lib/constants/constants";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: NextApiResponse) {
  try {
    const { refresh } = await req.json(); // Extract refresh token form request body

    const refreshResponse = await fetch(`${BASE_URL}/auth/token/refresh/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refresh }),
    });

    if (refreshResponse.ok) {
      const { access } = await refreshResponse.json();
      return NextResponse.json(
        { message: "successfully", new_access: access },
        { status: refreshResponse.status }
      );
    } else {
      return NextResponse.json(
        { message: refreshResponse.statusText },
        { status: refreshResponse.status }
      );
    }
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
