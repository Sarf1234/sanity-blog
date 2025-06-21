import Image from 'next/image';
import Link from 'next/link';
import { client } from '../../../sanity/lib/client';
import { singlePostQuery, categoriesQuery } from '@/lib/queries';
import { urlFor } from '../../../sanity/lib/imageUrl';
import { PortableText } from '@portabletext/react';

export const dynamicParams = true;

// ✅ SEO Metadata
export async function generateMetadata({ params }) {
  const post = await client.fetch(singlePostQuery, { slug: params.id });

  return {
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.summary || '',
    keywords: post.seoKeywords?.join(', ') || '',
    openGraph: {
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.summary || '',
      type: 'article',
      url: `https://yourdomain.com/blog/${params.id}`,
      images: [
        {
          url: post.mainImage ? urlFor(post.mainImage).url() : '',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.summary || '',
      images: [post.mainImage ? urlFor(post.mainImage).url() : ''],
    },
  };
}

const PostPage = async ({ params }) => {
  const post = await client.fetch(singlePostQuery, { slug: params.id });
  const categories = await client.fetch(categoriesQuery, {}, { cache: 'no-store' });

  if (!post) return <div className="text-center py-10">Post not found!</div>;

  const mainImageUrl = post.mainImage ? urlFor(post.mainImage).width(1200).height(630).url() : null;

  return (
    <main className="min-h-screen w-full bg-[#fefce8] py-10 px-4 md:px-10 pt-28">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Blog Post Content */}
        <article className="md:col-span-2 bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">{post.title}</h1>

          <div className="text-sm text-gray-500 mb-4">
            By <span className="font-medium text-gray-700">{post.authorName}</span> |{" "}
            {new Date(post.publishedAt).toLocaleDateString()}
          </div>

          {mainImageUrl && (
            <div className="mb-6 relative w-full aspect-[16/9]">
              <Image
                src={mainImageUrl}
                alt={post.title}
                fill
                className="rounded-lg object-cover shadow"
                sizes="(max-width: 768px) 100vw, 66vw"
                priority
              />
            </div>
          )}

          {post.categories?.length > 0 && (
            <div className="flex flex-wrap mb-6 gap-2">
              {post.categories.map((cat) => (
                <span
                  key={cat._id}
                  className="bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full"
                >
                  {cat.title}
                </span>
              ))}
            </div>
          )}

          <div className="prose prose-sm md:prose lg:prose-lg max-w-none prose-p:text-gray-700">
            <PortableText value={post.body} />
          </div>
        </article>

        {/* Sidebar */}
        <aside className="bg-white rounded-lg shadow-md p-5 h-fit sticky top-24">
          <h2 className="text-lg font-bold text-gray-800 mb-4">All Categories</h2>
          <ul className="space-y-3">
            {categories.map((item, idx) => (
              <li key={idx}>
                <Link
                  href={`/category/${item.slug.current}`}
                  className="block text-sm text-gray-600 hover:text-[#c8a96a] transition font-medium border-b pb-2"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </main>
  );
};

export default PostPage;
