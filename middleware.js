import { NextResponse } from "next/server";

const BLOCKED_COUNTRY = "CZ";

export function middleware(request) {
  const country = request.geo.country || "US";
  let res = NextResponse.next();
  //   if (!req.cookies['country']) {
  res.cookies.set("op-country", country);
  //   }
  return res;
  //   const cookieWithOptions = response.cookie('hello', 'world', {
  //     path: '/',
  //     maxAge: 1000 * 60 * 60 * 24 * 7,
  //     httpOnly: true,
  //     sameSite: 'strict',
  //     domain: 'example.com',
  //   })
  // response.clearCookie('hello')
  // return response

  //   if (country === 'ES') {
  //     return NextResponse.redirect('/es')
  //     // return NextResponse.rewrite('/es') // what?
  //   } else if (country === 'TR') {
  //     return NextResponse.redirect('/tr')
  //   } else {
  //     const res = NextResponse.redirect('/nl')
  //     return res
  //   }

  // If the request is from the blocked country,
  // send back a response with a status code
  //   if (country === BLOCKED_COUNTRY) {
  //     return new Response('Blocked for legal reasons', { status: 451 })
  //   }

  //   // Otherwise, send a response with the country
  //   return new Response(`Greetings from ${country}, where you are not blocked.`)
}
