import {defineField, defineType} from 'sanity'

export const blogBanner = defineType({
  name: 'blogBanner',
  title: 'Blog Banner',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Banner Title',
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Short Description',
      rows: 3,
      description: 'Brief text to display on the banner.',
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Banner Image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'linkType',
      type: 'string',
      title: 'Link Type',
      options: {
        list: [
          {title: 'Internal (Post)', value: 'internal'},
          {title: 'External URL', value: 'external'},
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'internalLink',
      type: 'reference',
      title: 'Internal Post Link',
      to: [{type: 'post'}],
      hidden: ({parent}) => parent?.linkType !== 'internal',
    }),
    defineField({
      name: 'externalUrl',
      type: 'url',
      title: 'External URL',
      hidden: ({parent}) => parent?.linkType !== 'external',
    }),
    defineField({
      name: 'isActive',
      type: 'boolean',
      title: 'Show Banner?',
      initialValue: true,
    }),
  ],
})
