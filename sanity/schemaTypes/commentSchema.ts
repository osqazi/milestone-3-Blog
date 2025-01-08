import { defineType } from 'sanity';

// Define a comment schema as a reusable object type
export const commentSchema = defineType({
    name: 'comment',  // Name for the comment schema
    type: 'object',
    title: 'Comment',
    fields: [
      { name: 'name', type: 'string', title: 'Name' },
      { name: 'date', type: 'date', title: 'Date' },
      { name: 'content', type: 'text', title: 'Content' },
    ],
  });
  
