import { defineField, defineType } from 'sanity';

  export const blogSchema = defineType({
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields: [
      defineField({
        name: 'title',
        type: 'string',
        title: 'Title',
      }),
      defineField({
        name: 'author',
        type: 'string',
        title: 'Author',
      }),
      defineField({
        name: 'date',
        type: 'date',
        title: 'Date',
      }),
      defineField({
        name: 'pic',
        type: 'image',
        title: 'Picture',
      }),
      defineField({
        name: 'comments',
        type: 'array',
        title: 'Comments',
        of: [
          { type: 'comment' },  // Use the newly defined 'comment' schema here
        ],
      }),
      defineField({
        name: 'content',
        type: 'object',
        title: 'Content',
        fields: [
          {
            name: 'introduction',
            type: 'text',
            title: 'Introduction',
          },
          {
            name: 'what_it_is',
            type: 'text',
            title: 'What it is',
          },
          {
            name: 'core_features',
            type: 'array',
            title: 'Core Features',
            of: [{ type: 'string' }],
          },
          {
            name: 'benefits',
            type: 'array',
            title: 'Benefits',
            of: [{ type: 'string' }],
          },
          {
            name: 'use_cases',
            type: 'array',
            title: 'Use Cases',
            of: [{ type: 'string' }],
          },
          {
            name: 'getting_started',
            type: 'text',
            title: 'Getting Started',
          },
          {
            name: 'conclusion',
            type: 'text',
            title: 'Conclusion',
          },
        ],
      }),
    ],
  });
  