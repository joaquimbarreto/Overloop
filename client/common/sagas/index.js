import { fork, all } from 'redux-saga/effects'

import watchArticles from './articles'
import watchAuthors from './authors'

export default function * rootSaga () {
  yield all([fork(watchArticles), fork(watchAuthors)])
}
