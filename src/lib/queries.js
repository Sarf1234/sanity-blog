// /lib/queries.js

import { groq } from 'next-sanity'

// ✅ Menu Query
export const menuQuery = groq`
  *[_type == "menu"] | order(order asc) {
    _id,
    name,
    slug,
    isExternal
  }
`

// ✅ Categories Query
export const categoriesQuery = groq`
  *[_type == "category" && isActive == true] | order(priority asc){
    _id,
    title,
    slug,
    description,
    "iconUrl": icon.asset->url,
    "coverImageUrl": coverImage.asset->url,
    seoTitle,
    seoDescription,
    seoKeywords,
    priority
  }
`

// ✅ Post Fields (Reusable)
export const postFields = `
  _id,
  title,
  slug,
  publishedAt,
  summary,
  "authorName": author->name,
  "authorImage": author->image.asset->url,
  "mainImage": mainImage.asset->url,
  "categories": categories[]->{
    _id,
    title,
    slug
  },
  body
`

// ✅ All Posts (Full List)
export const allPostsQuery = groq`
  *[_type == "post"] | order(publishedAt desc){
    ${postFields}
  }
`

// ✅ Latest N Posts (for homepage or sidebar etc)
export const latestPostsQuery = groq`
  *[_type == "post"] | order(publishedAt desc)[0...10]{
    ${postFields}
  }
`

// ✅ Posts by Category
export const postsByCategoryQuery = groq`
  *[_type == "post" && references(*[_type=="category" && slug.current==$categorySlug]._id)] | order(publishedAt desc){
    ${postFields}
  }
`

// ✅ Single Post by Slug
export const singlePostQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    title,
    publishedAt,
    "authorName": author->name,
    mainImage,
    body
  }
`;

// banner for home page query

export const bannersQuery = groq`
  *[_type == "blogBanner" && isActive == true] | order(_createdAt desc) {
    _id,
    title,
    "smallDescription": description,
    "imageUrl": image.asset->url,
    linkType,
    internalLink->{
      slug
    },
    externalUrl
  }
`;

//for qoute of last page
export const quoteSliderQuery = groq`
  *[_type == "quoteSlider"][0]{
    quotes[]{
      text,
      buttonText,
      linkType,
      "internalLinkSlug": internalLink->slug.current,
      externalUrl
    }
  }
`

// ✅ Posts by multiple category slugs
// ✅ /lib/queries.js
export const postsByTwoCategoriesQuery = groq`
  *[
    _type == "post" &&
    references(*[_type == "category" && slug.current == $slug1][0]._id) ||
    references(*[_type == "category" && slug.current == $slug2][0]._id)
  ] | order(publishedAt desc) {
    ${postFields}
  }
`

