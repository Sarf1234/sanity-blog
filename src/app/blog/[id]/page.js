import React from 'react';
import { client } from '../../../sanity/lib/client';
import { singlePostQuery } from '@/lib/queries';
import { urlFor } from '../../../sanity/lib/imageUrl'
import { PortableText } from '@portabletext/react';  // <-- for rendering Sanity body content
import Image from 'next/image';

export const dynamicParams = true;

const PostPage = async ({ params }) => {
  const { id } = params;

  const post = await client.fetch(singlePostQuery, { slug: id });
  console.clear()
  console.log(post)

  if (!post) {
    return <div>Post not found!</div>;
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="max-w-4xl mx-auto">
        {/* Post Title */}
        <h1 className="text-4xl font-bold mb-4 text-center">{post.title}</h1>

        {/* Author and Date */}
        <div className="flex justify-center items-center text-sm text-gray-500 mb-6">
          <span>By {post.authorName}</span>
          <span className="mx-2">|</span>
          <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
        </div>

        {/* Main Image */}
        {post.mainImage && (
          <div className="mb-8">
            <img
              src={urlFor(post.mainImage).url()} 
              alt={post.title}
              className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-md"
            />
          </div>
        )}

        {/* Categories */}
        {post.categories && post.categories.length > 0 && (
          <div className="mb-6 flex flex-wrap justify-center">
            {post.categories.map((category) => (
              <span
                key={category._id}
                className="bg-purple-200 text-purple-700 px-3 py-1 rounded-full text-sm mx-1 mb-2"
              >
                {category.title}
              </span>
            ))}
          </div>
        )}

        {/* Body Content */}
        <div className="prose lg:prose-xl max-w-none mx-auto">
          <PortableText value={post.body} />
        </div>
      </div>
    </div>
  );
};

export default PostPage;
