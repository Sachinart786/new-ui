import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const isAlbumPage = request.nextUrl.pathname.startsWith("/album/");

  if (isAlbumPage && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/album/:path*"],
};

// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export function middleware(request: NextRequest) {
//   const path = request.nextUrl.pathname;
//   const isPublicpath = path === "/login" || path === "/register";
//   const token = request.cookies.get("token")?.value ?? null;
//   if (isPublicpath && token) {
//     return NextResponse.redirect(new URL("/", request.url));
//   }
//   if (!isPublicpath && !token) {
//     return NextResponse.redirect(new URL("/login", request.url));
//   }
//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/", "/login", "/register", "/product", "/sell"],
// };
