import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import { client } from './client' // jo tu already bana chuka hai

const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}
