import * as Routes from 'constants/Routes'
import AuthorList from './containers/AuthorList'

export default () => ({
  path: Routes.AUTHORS,
  component: AuthorList
})
