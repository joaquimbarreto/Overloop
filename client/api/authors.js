import request from 'utils/request'

export const getAllAuthors = () => request('authors')
export const getAuthorById = id => request(`authors/${id}`)

export const createAuthor = data =>
  request('authors', {
    method: 'POST',
    data
  })

export const updateAuthor = (id, data) =>
  request(`authors/${id}`, {
    method: 'PUT',
    data
  })

export const deleteAuthor = id =>
  request(`authors/${id}`, {
    method: 'DELETE'
  })
