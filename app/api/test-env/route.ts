import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    cloudinaryConfigured: {
      cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ? 'Set' : 'Not set',
      apiKey: process.env.CLOUDINARY_API_KEY ? 'Set' : 'Not set',
      apiSecret: process.env.CLOUDINARY_API_SECRET ? 'Set' : 'Not set',
    },
    databaseConfigured: {
      databaseUrl: process.env.DATABASE_URL ? 'Set' : 'Not set',
    },
    nodeEnv: process.env.NODE_ENV || 'Not set',
  });
} 