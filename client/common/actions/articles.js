import { createAction, createRequestTypes, createRequestAction } from 'utils'

export const LOAD_ALL_ARTICLES = '@articles/LOAD_ALL_ARTICLES'
export const LOAD_ALL_ARTICLES_REQUEST = createRequestTypes('@articles/LOAD_ALL_ARTICLES_REQUEST')
export const LOAD_ARTICLE = '@articles/LOAD_ARTICLE'
export const LOAD_ARTICLE_REQUEST = createRequestTypes('@articles/LOAD_ARTICLE_REQUEST')
export const EDIT_ARTICLE = '@articles/EDIT_ARTICLE'
export const EDIT_ARTICLE_REQUEST = createRequestTypes('@articles/EDIT_ARTICLE_REQUEST')
export const REMOVE_ARTICLE = '@articles/REMOVE_ARTICLE'
export const REMOVE_ARTICLE_REQUEST = createRequestTypes('@articles/REMOVE_ARTICLE_REQUEST')
export const CREATE_ARTICLE = '@articles/CREATE_ARTICLE'
export const CREATE_ARTICLE_REQUEST = createRequestTypes('@articles/CREATE_ARTICLE_REQUEST')

export const constants = {
  LOAD_ALL_ARTICLES,
  LOAD_ALL_ARTICLES_REQUEST,
  LOAD_ARTICLE,
  LOAD_ARTICLE_REQUEST,
  EDIT_ARTICLE,
  EDIT_ARTICLE_REQUEST,
  REMOVE_ARTICLE,
  REMOVE_ARTICLE_REQUEST,
  CREATE_ARTICLE,
  CREATE_ARTICLE_REQUEST
}

export const loadAllArticles = createAction(LOAD_ALL_ARTICLES)
export const loadAllArticlesRequest = createRequestAction(LOAD_ALL_ARTICLES_REQUEST)
export const loadArticle = createAction(LOAD_ARTICLE)
export const loadArticleRequest = createRequestAction(LOAD_ARTICLE_REQUEST)
export const editArticle = createAction(EDIT_ARTICLE)
export const editArticleRequest = createRequestAction(EDIT_ARTICLE_REQUEST)
export const removeArticle = createAction(REMOVE_ARTICLE)
export const removeArticleRequest = createRequestAction(REMOVE_ARTICLE_REQUEST)
export const createArticle = createAction(CREATE_ARTICLE)
export const createArticleRequest = createRequestAction(CREATE_ARTICLE_REQUEST)

export default {
  loadAllArticles,
  loadAllArticlesRequest,
  loadArticle,
  loadArticleRequest,
  editArticle,
  editArticleRequest,
  removeArticle,
  removeArticleRequest,
  createArticle,
  createArticleRequest
}
