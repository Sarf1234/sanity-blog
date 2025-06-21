import { defineType, defineField } from 'sanity'

export const quoteSlider = defineType({
  name: 'quoteSlider',
  title: 'Quote Slider',
  type: 'document',
  fields: [
    defineField({
      name: 'quotes',
      title: 'Quotes',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Quote',
          fields: [
            defineField({
              name: 'text',
              type: 'text',
              title: 'Quote Text',
              rows: 4,
              validation: (Rule) => Rule.required().min(20),
            }),
            defineField({
              name: 'buttonText',
              type: 'string',
              title: 'Button Text',
              description: 'Optional (e.g. Read More, Learn More)',
            }),
            defineField({
              name: 'linkType',
              title: 'Link Type',
              type: 'string',
              options: {
                list: [
                  { title: 'None', value: 'none' },
                  { title: 'Internal', value: 'internal' },
                  { title: 'External', value: 'external' },
                ],
                layout: 'radio',
              },
              initialValue: 'none',
            }),
            defineField({
              name: 'internalLink',
              title: 'Internal Link (Page/Slug)',
              type: 'reference',
              to: [{ type: 'post' }], // adjust based on your slugs
              hidden: ({ parent }) => parent?.linkType !== 'internal',
            }),
            defineField({
              name: 'externalUrl',
              title: 'External URL',
              type: 'url',
              hidden: ({ parent }) => parent?.linkType !== 'external',
            }),
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
})
