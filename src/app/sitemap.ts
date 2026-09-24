import { MetadataRoute } from 'next'
import connectDB from '@/lib/mongodb'
import BlogPost from '@/lib/models/BlogPost'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://altiorainfotech.ca'
  // Fixed date for static pages so lastmod reflects the last real content update,
  // not the moment each sitemap request happens to run.
  const staticPagesLastModified = new Date('2026-09-11')

  // Static pages with updated priorities and change frequencies
  const staticPages: MetadataRoute.Sitemap = [
    // Main pages
    {
      url: baseUrl,
      lastModified: staticPagesLastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: staticPagesLastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: staticPagesLastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: staticPagesLastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },

    // Digital Marketing Services
    {
      url: `${baseUrl}/services/digital-marketing`,
      lastModified: staticPagesLastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/paid-advertisement-services`,
      lastModified: staticPagesLastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/seo`,
      lastModified: staticPagesLastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/aeo-geo`,
      lastModified: staticPagesLastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/social-media-management`,
      lastModified: staticPagesLastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/search-engine-marketing`,
      lastModified: staticPagesLastModified,
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/services/digital-marketing-strategy`,
      lastModified: staticPagesLastModified,
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/services/influencer-ugc-marketing`,
      lastModified: staticPagesLastModified,
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/services/branding`,
      lastModified: staticPagesLastModified,
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/services/graphic-design`,
      lastModified: staticPagesLastModified,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/video-production`,
      lastModified: staticPagesLastModified,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/business-consulting`,
      lastModified: staticPagesLastModified,
      changeFrequency: 'weekly',
      priority: 0.7,
    },

    // Website & App Development
    {
      url: `${baseUrl}/services/website-development-services`,
      lastModified: staticPagesLastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/mobile-app-development`,
      lastModified: staticPagesLastModified,
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    // Industry-Specific Pages
    {
      url: `${baseUrl}/services/real-estate-marketing-agency-in-canada`,
      lastModified: staticPagesLastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/digital-marketing-for-immigration-consultants-in-canada`,
      lastModified: staticPagesLastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/dental-marketing-services-in-canada`,
      lastModified: staticPagesLastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/how-real-estate-agents-generate-leads-in-canada`,
      lastModified: staticPagesLastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/digital-marketing-for-restaurants-in-canada`,
      lastModified: staticPagesLastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/digital-marketing-for-ecommerce-businesses-in-canada`,
      lastModified: staticPagesLastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/digital-marketing-for-healthcare-providers-in-canada`,
      lastModified: staticPagesLastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/google-my-business-management-services`,
      lastModified: staticPagesLastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/shopify-seo-services-canada`,
      lastModified: staticPagesLastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/shopify-services`,
      lastModified: staticPagesLastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/email-marketing-services-canada`,
      lastModified: staticPagesLastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/ai-marketing-services-in-canada`,
      lastModified: staticPagesLastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/saas-marketing-services-in-canada`,
      lastModified: staticPagesLastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/seo-services-for-law-firms-in-canada`,
      lastModified: staticPagesLastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/ai-development-company-canada`,
      lastModified: staticPagesLastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/ai-automation-services-canada`,
      lastModified: staticPagesLastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/machine-learning-development-company`,
      lastModified: staticPagesLastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/custom-crm-development`,
      lastModified: staticPagesLastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/erp-software-development`,
      lastModified: staticPagesLastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/mobile-app-development-company-canada`,
      lastModified: staticPagesLastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/local-seo-services-in-canada`,
      lastModified: staticPagesLastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    // Location Pages (Canada)
    {
      url: `${baseUrl}/services/digital-marketing-company-in-toronto`,
      lastModified: staticPagesLastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/digital-marketing-company-in-ottawa`,
      lastModified: staticPagesLastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/digital-marketing-company-in-oakville`,
      lastModified: staticPagesLastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/digital-marketing-company-in-montreal`,
      lastModified: staticPagesLastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/digital-marketing-company-in-hamilton`,
      lastModified: staticPagesLastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/digital-marketing-company-in-winnipeg`,
      lastModified: staticPagesLastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/digital-marketing-company-in-victoria`,
      lastModified: staticPagesLastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/digital-marketing-company-in-halifax`,
      lastModified: staticPagesLastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/digital-marketing-company-in-markham`,
      lastModified: staticPagesLastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/digital-marketing-company-in-mississauga`,
      lastModified: staticPagesLastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/digital-marketing-company-in-brampton`,
      lastModified: staticPagesLastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/digital-marketing-company-in-edmonton`,
      lastModified: staticPagesLastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/digital-marketing-company-in-kelowna`,
      lastModified: staticPagesLastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/digital-marketing-company-in-whistler`,
      lastModified: staticPagesLastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/digital-marketing-company-in-vancouver`,
      lastModified: staticPagesLastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/digital-marketing-company-in-surrey`,
      lastModified: staticPagesLastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/digital-marketing-company-in-abbotsford`,
      lastModified: staticPagesLastModified,
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/services/digital-marketing-company-in-Calgary`,
      lastModified: staticPagesLastModified,
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/services/digital-marketing-company-in-burnaby`,
      lastModified: staticPagesLastModified,
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/services/digital-marketing-company-in-richmond`,
      lastModified: staticPagesLastModified,
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/services/digital-marketing-company-in-langley`,
      lastModified: staticPagesLastModified,
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/services/digital-marketing-company-in-kerrville`,
      lastModified: staticPagesLastModified,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/digital-marketing-company-in-indigenous`,
      lastModified: staticPagesLastModified,
      changeFrequency: 'weekly',
      priority: 0.7,
    },

    // Legal Pages
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: staticPagesLastModified,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms-conditions`,
      lastModified: staticPagesLastModified,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ]

  try {
    // Connect to MongoDB and fetch published blog posts
    await connectDB()

    const excludedBlogSlugs = [
      '/blog/ai-ml-2030-everyday-things',
      '/blog/hyperautomation-ai-ml',
      '/blog/ai-workflows-small-enterprises',
    ]

    const blogPosts = await BlogPost.find({
      status: 'published',
      blogType: 'marketing',
      href: { $nin: excludedBlogSlugs },
    })
      .select('href date updatedAt')
      .sort({ date: -1 })
      .lean()

    // Add blog post URLs with appropriate priority based on recency
    const blogUrls: MetadataRoute.Sitemap = blogPosts.map((post, index) => {
      // Recent posts get higher priority
      let priority = 0.6
      if (index < 5) priority = 0.75
      else if (index < 10) priority = 0.7

      return {
        url: `${baseUrl}${post.href}`,
        lastModified: new Date(post.updatedAt || post.date),
        changeFrequency: 'monthly' as const,
        priority,
      }
    })

    // Combine and return
    return [...staticPages, ...blogUrls]
  } catch (error) {
    console.error('Error generating sitemap:', error)
    // Return static pages only if database connection fails
    return staticPages
  }
}