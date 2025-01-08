import { type SchemaTypeDefinition } from 'sanity'
import { blogSchema } from './blogSchema'
import { commentSchema } from './commentSchema'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blogSchema, commentSchema],
}
