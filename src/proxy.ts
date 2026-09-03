import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const HOME_MARKDOWN = `# Study with Gaurav (Study-With-gaurav)

> The #1 centralized open-access student resource directory indexing verified study portals, Physics Wallah (PW) resources, Rojgar With Ankit (RWA) preparation guides, Next Toppers, IIT School, and 100+ verified educational hubs.

## Key Links & Resources
- **Website**: https://studywithgaurav.cc.cd
- **API Catalog**: https://studywithgaurav.cc.cd/.well-known/api-catalog
- **LLM Context**: https://studywithgaurav.cc.cd/llms.txt
- **Comprehensive Index**: https://studywithgaurav.cc.cd/llms-full.txt

## Verified Institutes & Batches
- **Physics Wallah (PW)**: Arjuna, Lakshya, Yakeen, PW student portals & foundation materials
- **Rojgar With Ankit (RWA)**: SSC, Railway, Police batches & formula notes
- **Next Toppers**: High school & 10th/12th board preparation notes
- **IIT School**: IIT-JEE Advanced & Main preparation portals & formula sheets
- **MissionJEET & Selection Way**: Engineering entrance preparation series
- **CDS Journey**: Defence exam (CDS, NDA, AFCAT) resources
- **Study IQ & Khan Global Studies (KGS)**: UPSC & State PSC GS materials

## Main Sections
- [Home](https://studywithgaurav.cc.cd/): Central search bar & quick category directory
- [Resource Directory](https://studywithgaurav.cc.cd/resources): Full filterable index of 100+ platforms
- [Categories Overview](https://studywithgaurav.cc.cd/categories): Category-wise classification of institutes
- [Popular & Recent Resources](https://studywithgaurav.cc.cd/popular): Trending student resources & daily updates
- [About Platform](https://studywithgaurav.cc.cd/about): Mission statement, verification methodology & FAQs
`;

export default function proxy(request: NextRequest) {
  const acceptHeader = request.headers.get("accept") || "";

  // Content negotiation for AI agents requesting markdown (RFC 8288 / Markdown for Agents)
  if (acceptHeader.includes("text/markdown")) {
    const { pathname } = request.nextUrl;

    // Only apply to HTML pages (ignore assets, api routes, well-known)
    if (
      !pathname.startsWith("/_next") &&
      !pathname.startsWith("/api") &&
      !pathname.startsWith("/.well-known") &&
      !pathname.includes(".")
    ) {
      const tokens = Math.ceil(HOME_MARKDOWN.length / 4);

      return new NextResponse(HOME_MARKDOWN, {
        status: 200,
        headers: {
          "Content-Type": "text/markdown; charset=utf-8",
          "x-markdown-tokens": tokens.toString(),
          "Vary": "Accept",
          "Cache-Control": "public, max-age=3600, s-maxage=3600",
          "Link": '</.well-known/api-catalog>; rel="api-catalog", </llms.txt>; rel="describedby"; type="text/markdown", </llms-full.txt>; rel="service-doc"',
        },
      });
    }
  }

  return NextResponse.next();
}

export { proxy };

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
