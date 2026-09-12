import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { Readable } from "stream";

export async function GET() {
  const primaryPath = path.join(process.cwd(), "public", "downloads", "StudyWithGaurav.apk");
  const fallbackPath = path.join(process.cwd(), "public", "StudyWithGaurav.apk");

  const targetPath = fs.existsSync(primaryPath) ? primaryPath : fallbackPath;

  if (!fs.existsSync(targetPath)) {
    return new NextResponse("APK package not found on server", { status: 404 });
  }

  try {
    const stats = fs.statSync(targetPath);
    const nodeStream = fs.createReadStream(targetPath);
    const webStream = Readable.toWeb(nodeStream);

    return new NextResponse(webStream as unknown as ReadableStream, {
      headers: {
        "Content-Type": "application/vnd.android.package-archive",
        "Content-Disposition": 'attachment; filename="StudyWithGaurav.apk"',
        "Content-Length": stats.size.toString(),
        "Cache-Control": "public, max-age=86400, s-maxage=604800, stale-while-revalidate=86400",
        "Accept-Ranges": "bytes",
      },
    });
  } catch (error) {
    console.error("Error streaming APK download:", error);
    return new NextResponse("Internal server error streaming APK", { status: 500 });
  }
}
