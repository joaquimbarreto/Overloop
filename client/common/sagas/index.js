import { fork, all } from 'redux-saga/effects'

import watchArticles from './articles'

export default function * rootSaga () {
  yield all([
    fork(watchArticles)
  ])
}
