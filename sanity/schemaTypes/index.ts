import { type SchemaTypeDefinition } from 'sanity'
import { blogSchema } from './blogSchema'
import { commentSchema } from './commentSchema'
import contact from './contact'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blogSchema, commentSchema, contact],
}
