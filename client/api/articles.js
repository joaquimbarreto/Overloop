import request from 'utils/request'

export const getAllArticles = () => request('articles')
export const getArticleById = id => request(`articles/${id}`)

export const createArticle = data => request('articles', {
  method: 'POST',
  data
})

export const updateArticle = (id, data) => request(`articles/${id}`, {
  method: 'PUT',
  data
})

export const deleteArticle = id => request(`articles/${id}`, {
  method: 'DELETE'
})
