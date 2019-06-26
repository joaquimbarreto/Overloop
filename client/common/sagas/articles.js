import { put, call, takeLatest, all } from 'redux-saga/effects'
import * as schemas from 'schemas'
import { normalize } from 'normalizr'
import actions, { constants } from '../actions/articles'
import * as api from 'api/articles'
import { push as pushHistory } from 'react-router-redux'
import * as Routes from 'constants/Routes'

function * onLoadAll () {
  yield put(actions.loadAllArticlesRequest.start())

  try {
    const articles = yield call(api.getAllArticles)
    const norm = yield call(normalize, articles, [schemas.article])
    yield put(actions.loadAllArticlesRequest.success(norm))
  } catch (error) {
    yield put(actions.loadAllArticlesRequest.failure(error))
  }
}

function * onLoad ({ payload: id }) {
  yield put(actions.loadArticleRequest.start())

  try {
    const article = yield call(api.getArticleById, id)
    const norm = yield call(normalize, article, schemas.article)
    yield put(actions.loadArticleRequest.success(norm))
  } catch (error) {
    yield put(actions.loadArticleRequest.failure(error))
  }
}

function * onCreate ({ payload: data }) {
  yield put(actions.createArticleRequest.start())

  try {
    const article = yield call(api.createArticle, data)
    const norm = yield call(normalize, article, schemas.article)
    yield put(actions.createArticleRequest.success(norm))
    yield put(pushHistory(Routes.ARTICLES))
  } catch (error) {
    yield put(actions.createArticleRequest.failure(error))
  }
}

function * onEdit ({ payload: { data, id } }) {
  yield put(actions.editArticleRequest.start())

  try {
    const article = yield call(api.updateArticle, id, data)
    const norm = yield call(normalize, article, schemas.article)
    yield put(actions.editArticleRequest.success(norm))
    yield put(pushHistory(Routes.ARTICLES))
  } catch (error) {
    yield put(actions.editArticleRequest.failure(error))
  }
}

export default function * watchUser () {
  yield all([
    takeLatest(constants.CREATE_ARTICLE, onCreate),
    takeLatest(constants.EDIT_ARTICLE, onEdit),
    takeLatest(constants.LOAD_ARTICLE, onLoad),
    takeLatest(constants.LOAD_ALL_ARTICLES, onLoadAll)
  ])
}
