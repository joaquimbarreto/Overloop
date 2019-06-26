import { schema } from 'normalizr'

export const article = new schema.Entity('articles', {}, {
  idAttribute: '_id'
})
