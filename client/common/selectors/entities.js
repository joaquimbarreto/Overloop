import { createSelector } from 'reselect'
import { denormalize } from 'normalizr'
import * as schemas from 'schemas'

export const getEntities = state => state.entities

export const getArticles = state => state.entities.get('articles')
export const getAuthors = state => state.entities.get('authors')

export const getIsArticlesLoaded = state =>
  state.entities.get('isArticlesLoaded')

export const getIsAuthorsLoaded = state => state.entities.get('isAuthorsLoaded')

export const getArticle = articleId =>
  createSelector(
    [getArticles, getEntities],
    (articles, entities) => {
      const article = articles.get(articleId)

      if (!article) {
        return null
      }

      return denormalize(article, schemas.article, entities)
    }
  )
export const getAuthor = authorId =>
  createSelector(
    [getAuthors, getEntities],
    (authors, entities) => {
      const author = authors.get(authorId)

      if (!author) {
        return null
      }

      return denormalize(author, schemas.author, entities)
    }
  )
