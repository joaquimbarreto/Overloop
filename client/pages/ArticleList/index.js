import * as Routes from 'constants/Routes'
import ArticleList from './containers/ArticleList'

export default () => ({
  path: Routes.ARTICLES,
  component: ArticleList
})
