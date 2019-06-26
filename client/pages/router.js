import AppLayout from 'common/components/AppLayout'
import ArticleList from 'pages/ArticleList'
import Article from 'pages/Article'
import AuthorList from 'pages/AuthorList'
import Author from 'pages/Author'

import * as Routes from 'constants/Routes'

export default store => ({
  component: AppLayout,
  childRoutes: [
    {
      path: '/',
      indexRoute: {
        onEnter: (nextState, replace) => replace(Routes.ARTICLES)
      }
    },
    ArticleList(store),
    Article(store),
    AuthorList(store),
    Author(store)
  ]
})
