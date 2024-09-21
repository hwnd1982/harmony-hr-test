import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import Cors from "cors";
import { NextApiRequest, NextApiResponse } from "next";
import { AxiosSession } from "./app/actions";
import { decrypt, encrypt } from "./shared/lib";

export const cors = Cors({
  methods: ["POST", "GET", "HEAD"],
});

export async function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const pathname = request.nextUrl.pathname;
  const session = request.cookies.get("sessionId");
  const isAuth = !!session && session.value !== "deleted";

  if (isAuth && pathname === "/auth") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (!isAuth && pathname === "/") {
    return NextResponse.redirect(new URL("/auth", request.url));
  }

  requestHeaders.set("x-pathname", pathname);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  if (session) {
    const parsed = await decrypt(session?.value || "");
    const sessionCookie = {
      name: "sessionId",
      value: "deleted",
      httpOnly: true,
      path: "/",
      expires: new Date(-1),
    };

    if (parsed) {
      const date = new Date(Date.now() + 600 * 1000);

      parsed.expires = date;
      sessionCookie.value = await encrypt(parsed);
      sessionCookie.expires = date;
    }

    response.cookies.set(sessionCookie);
  }

  return response;
}

type Callback = <T>(req: NextApiRequest, res: NextApiResponse, fn: <T>(result: T) => void) => Promise<T>;

export async function corsMiddleware(req: NextApiRequest, res: NextApiResponse, fn: Callback) {
  return new Promise((resolve, reject) => {
    fn<Error | AxiosSession>(req, res, result => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|images|fonts|favicon.svg).*)"],
};
