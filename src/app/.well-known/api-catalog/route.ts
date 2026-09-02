import { NextResponse } from "next/server";

export async function GET() {
  const catalog = {
    linkset: [
      {
        anchor: "https://studywithgaurav.cc.cd/",
        "api-catalog": [
          {
            href: "https://studywithgaurav.cc.cd/.well-known/api-catalog",
            type: "application/linkset+json",
          },
        ],
        "service-doc": [
          {
            href: "https://studywithgaurav.cc.cd/llms.txt",
            type: "text/markdown",
            title: "Study with Gaurav LLM Context & Directory Index",
          },
          {
            href: "https://studywithgaurav.cc.cd/llms-full.txt",
            type: "text/markdown",
            title: "Study with Gaurav Comprehensive Resource Catalog",
          },
        ],
        describedby: [
          {
            href: "https://studywithgaurav.cc.cd/llms.txt",
            type: "text/markdown",
            title: "Machine-readable context for AI agents",
          },
        ],
      },
    ],
  };

  return new NextResponse(JSON.stringify(catalog, null, 2), {
    status: 200,
    headers: {
      "Content-Type": "application/linkset+json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
      Link: '</.well-known/api-catalog>; rel="self"; type="application/linkset+json", </llms.txt>; rel="describedby"; type="text/markdown", </llms-full.txt>; rel="service-doc"',
    },
  });
}
