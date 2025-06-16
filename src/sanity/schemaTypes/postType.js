import { DocumentTextIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: { source: 'title', maxLength: 96 },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'summary',
      type: 'text',
      title: 'Summary',
      description: 'Short summary for meta description and cards',
      rows: 3,
    }),
    defineField({
      name: 'author',
      type: 'reference',
      to: { type: 'author' },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'mainImage',
      type: 'image',
      title: 'Main Image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        })
      ],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'categories',
      type: 'array',
      of: [defineArrayMember({ type: 'reference', to: { type: 'category' } })],
      validation: Rule => Rule.required().min(1)
    }),
    defineField({
      name: 'tags',
      type: 'array',
      title: 'Tags',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published At',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'readingTime',
      type: 'number',
      title: 'Reading Time (minutes)',
    }),
    defineField({
      name: 'featured',
      type: 'boolean',
      title: 'Featured Post',
      initialValue: false,
    }),
    // Main Body with Portable Text Customizations
    defineField({
      name: 'body',
      type: 'array',
      title: 'Post Body',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H1', value: 'h1' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'Quote', value: 'blockquote' },
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Numbered', value: 'number' }
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Underline', value: 'underline' },
              { title: 'Highlight', value: 'highlight' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'External Link',
                fields: [
                  { name: 'href', type: 'url', title: 'URL' }
                ]
              }
            ]
          }
        },
        { type: 'image', options: { hotspot: true } }
      ]
    }),
    // SEO Fields
    defineField({
      name: 'seoTitle',
      type: 'string',
      title: 'SEO Title',
    }),
    defineField({
      name: 'seoDescription',
      type: 'text',
      title: 'SEO Description',
    }),
    defineField({
      name: 'seoKeywords',
      type: 'array',
      title: 'SEO Keywords',
      of: [{ type: 'string' }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
      featured: 'featured'
    },
    prepare(selection) {
      const { author, featured } = selection
      return {
        ...selection,
        subtitle: `${author ? `by ${author}` : ''} ${featured ? '🌟 Featured' : ''}`
      }
    }
  }
})
