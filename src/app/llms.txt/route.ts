import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'public', 'llms.txt');
    const fileContent = fs.readFileSync(filePath, 'utf8');
    return new NextResponse(fileContent, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'public, max-age=86400, s-maxage=86400',
      },
    });
  } catch {
    return new NextResponse('# Study with Gaurav\n\nVisit https://studywithgaurav.cc.cd for all free student resources.', {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
      },
    });
  }
}
