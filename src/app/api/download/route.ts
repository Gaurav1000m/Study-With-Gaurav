import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const filePath = path.join(process.cwd(), "public", "downloads", "StudyWithGaurav.apk");
  const fallbackPath = path.join(process.cwd(), "public", "StudyWithGaurav.apk");

  const targetPath = fs.existsSync(filePath) ? filePath : fallbackPath;

  if (!fs.existsSync(targetPath)) {
    return new NextResponse("APK file not found", { status: 404 });
  }

  const fileBuffer = fs.readFileSync(targetPath);

  return new NextResponse(fileBuffer, {
    headers: {
      "Content-Type": "application/vnd.android.package-archive",
      "Content-Disposition": 'attachment; filename="StudyWithGaurav.apk"',
      "Content-Length": fileBuffer.length.toString(),
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
