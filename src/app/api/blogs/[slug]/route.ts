import { NextRequest, NextResponse } from 'next/server';
import { fetchBlogPostFromDB } from '@/lib/api-server';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;

    if (!slug) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: 'INVALID_SLUG',
            message: 'Blog post slug is required',
          },
          timestamp: new Date().toISOString(),
        },
        { status: 400 }
      );
    }

    // Fetch the blog post (will only return marketing blogs)
    const response = await fetchBlogPostFromDB(slug);

    return NextResponse.json(response);
  } catch (error) {
    console.error('Blog post API error:', error);

    if (error instanceof Error && error.message.includes('not found')) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: 'NOT_FOUND',
            message: 'Blog post not found',
          },
          timestamp: new Date().toISOString(),
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        error: {
          code: 'FETCH_ERROR',
          message: error instanceof Error ? error.message : 'Failed to fetch blog post',
        },
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}
