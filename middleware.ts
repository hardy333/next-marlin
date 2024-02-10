import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
// console.log("Helllooooo");

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // console.log("request -------: ", request.nextUrl.pathname);
  // console.log(request.cookies.has("username"));
  // console.log(request.cookies.get("username"));
  // return NextResponse.redirect(new URL("/en/blog", request.url));
}
