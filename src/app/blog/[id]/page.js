import React from 'react';
import { client } from '../../../sanity/lib/client';
import { singlePostQuery, categoriesQuery } from '@/lib/queries';
import { urlFor } from '../../../sanity/lib/imageUrl';
import { PortableText } from '@portabletext/react';
import Link from 'next/link';

export const dynamicParams = true;

const PostPage = async ({ params }) => {
  const { id } = params;

  const post = await client.fetch(singlePostQuery, { slug: id });
  const categories = await client.fetch(categoriesQuery, {}, { cache: 'no-store' });

  if (!post) return <div className="text-center py-10">Post not found!</div>;

  return (
    <section className="min-h-screen w-full bg-[#fefce8] py-10 px-4 md:px-10 pt-28 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Main Blog Post Area */}
        <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            {post.title}
          </h1>

          {/* Author & Date */}
          <div className="text-sm text-gray-500 mb-4">
            By <span className="font-medium text-gray-700">{post.authorName}</span> |{" "}
            {new Date(post.publishedAt).toLocaleDateString()}
          </div>

          {/* Image */}
          {post.mainImage && (
            <div className="mb-6">
              <img
                src={urlFor(post.mainImage).url()}
                alt={post.title}
                className="rounded-lg w-full max-h-[400px] object-cover shadow"
              />
            </div>
          )}

          {/* Categories */}
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

          {/* Content */}
          <div className="prose prose-sm md:prose lg:prose-lg max-w-none prose-p:text-gray-700">
            <PortableText value={post.body} />
          </div>
        </div>

        {/* Sidebar: Category Table */}
        <aside className="bg-white rounded-lg shadow-md p-5 h-fit sticky top-24">
          <h3 className="text-lg font-bold text-gray-800 mb-4">All Categories</h3>
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
    </section>
  );
};

export default PostPage;
