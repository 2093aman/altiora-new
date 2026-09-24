import { NextRequest, NextResponse } from 'next/server';
import { fetchBlogPostsFromDB } from '@/lib/api-server';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const category = searchParams.get('category') || undefined;
    const search = searchParams.get('search') || undefined;
    
    // Always fetch marketing blogs for this website
    const response = await fetchBlogPostsFromDB({
      page,
      limit,
      category,
      search,
      blogType: 'marketing'
    });

    return NextResponse.json(response);
  } catch (error) {
    console.error('Blog API error:', error);
    return NextResponse.json(
      {
        success: false,
        error: {
          code: 'FETCH_ERROR',
          message: error instanceof Error ? error.message : 'Failed to fetch blog posts',
        },
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}