import { createAction, createRequestTypes, createRequestAction } from 'utils'

export const LOAD_ALL_AUTHORS = '@authors/LOAD_ALL_AUTHORS'
export const LOAD_ALL_AUTHORS_REQUEST = createRequestTypes(
  '@authors/LOAD_ALL_AUTHORS_REQUEST'
)
export const LOAD_AUTHOR = '@authors/LOAD_AUTHOR'
export const LOAD_AUTHOR_REQUEST = createRequestTypes(
  '@authors/LOAD_AUTHOR_REQUEST'
)
export const EDIT_AUTHOR = '@authors/EDIT_AUTHOR'
export const EDIT_AUTHOR_REQUEST = createRequestTypes(
  '@authors/EDIT_AUTHOR_REQUEST'
)
export const REMOVE_AUTHOR = '@authors/REMOVE_AUTHOR'
export const REMOVE_AUTHOR_REQUEST = createRequestTypes(
  '@authors/REMOVE_AUTHOR_REQUEST'
)
export const CREATE_AUTHOR = '@authors/CREATE_AUTHOR'
export const CREATE_AUTHOR_REQUEST = createRequestTypes(
  '@authors/CREATE_AUTHOR_REQUEST'
)

export const constants = {
  LOAD_ALL_AUTHORS,
  LOAD_ALL_AUTHORS_REQUEST,
  LOAD_AUTHOR,
  LOAD_AUTHOR_REQUEST,
  EDIT_AUTHOR,
  EDIT_AUTHOR_REQUEST,
  REMOVE_AUTHOR,
  REMOVE_AUTHOR_REQUEST,
  CREATE_AUTHOR,
  CREATE_AUTHOR_REQUEST
}

export const loadAllAuthors = createAction(LOAD_ALL_AUTHORS)
export const loadAllAuthorsRequest = createRequestAction(
  LOAD_ALL_AUTHORS_REQUEST
)
export const loadAuthor = createAction(LOAD_AUTHOR)
export const loadAuthorRequest = createRequestAction(LOAD_AUTHOR_REQUEST)
export const editAuthor = createAction(EDIT_AUTHOR)
export const editAuthorRequest = createRequestAction(EDIT_AUTHOR_REQUEST)
export const removeAuthor = createAction(REMOVE_AUTHOR)
export const removeAuthorRequest = createRequestAction(REMOVE_AUTHOR_REQUEST)
export const createAuthor = createAction(CREATE_AUTHOR)
export const createAuthorRequest = createRequestAction(CREATE_AUTHOR_REQUEST)

export default {
  loadAllAuthors,
  loadAllAuthorsRequest,
  loadAuthor,
  loadAuthorRequest,
  editAuthor,
  editAuthorRequest,
  removeAuthor,
  removeAuthorRequest,
  createAuthor,
  createAuthorRequest
}
