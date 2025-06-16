import { TagIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export const categoryType = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      description: 'Brief description for category listing page'
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image (for Category Landing Page)',
      type: 'image',
      description: 'Used as banner on category detail page',
      options: { hotspot: true },
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'image',
      description: 'Small icon to show on category list if needed',
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      description: 'Custom title for Google Search',
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      description: 'Custom description for Google Search',
    }),
    defineField({
      name: 'seoKeywords',
      title: 'SEO Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Optional keywords for search engines',
    }),
    defineField({
      name: 'priority',
      title: 'Priority (Ordering)',
      type: 'number',
      initialValue: 1,
    }),
    defineField({
      name: 'isActive',
      title: 'Is Active?',
      type: 'boolean',
      initialValue: true,
    }),
  ],

  orderings: [
    {
      title: 'Priority',
      name: 'priorityAsc',
      by: [{ field: 'priority', direction: 'asc' }],
    },
  ],
});
