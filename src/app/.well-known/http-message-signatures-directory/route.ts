import { NextResponse } from "next/server";

export async function GET() {
  const jwks = {
    keys: [
      {
        kty: "OKP",
        crv: "Ed25519",
        x: "prEdSBc0Eeb_zdVCHzASvJ7-L1JtzRSLnwOZ7Qnn_gg",
        kid: "studywithgaurav-bot-2026",
        use: "sig",
        alg: "EdDSA",
      },
    ],
  };

  return new NextResponse(JSON.stringify(jwks, null, 2), {
    status: 200,
    headers: {
      "Content-Type": "application/jwk-set+json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
