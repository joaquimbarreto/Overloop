import { put, call, takeLatest, all } from 'redux-saga/effects'
import * as schemas from 'schemas'
import { normalize } from 'normalizr'
import actions, { constants } from '../actions/authors'
import * as api from 'api/authors'
import { push as pushHistory } from 'react-router-redux'
import * as Routes from 'constants/Routes'

function * onLoadAll () {
  yield put(actions.loadAllAuthorsRequest.start())

  try {
    const authors = yield call(api.getAllAuthors)
    const norm = yield call(normalize, authors, [schemas.author])
    yield put(actions.loadAllAuthorsRequest.success(norm))
  } catch (error) {
    yield put(actions.loadAllAuthorsRequest.failure(error))
  }
}

function * onLoad ({ payload: id }) {
  yield put(actions.loadAuthorRequest.start())

  try {
    const author = yield call(api.getAuthorById, id)
    const norm = yield call(normalize, author, schemas.author)
    yield put(actions.loadAuthorRequest.success(norm))
  } catch (error) {
    yield put(actions.loadAuthorRequest.failure(error))
  }
}

function * onCreate ({ payload: data }) {
  yield put(actions.createAuthorRequest.start())

  try {
    const author = yield call(api.createAuthor, data)
    const norm = yield call(normalize, author, schemas.author)
    yield put(actions.createAuthorRequest.success(norm))
    yield put(pushHistory(Routes.AUTHORS))
  } catch (error) {
    yield put(actions.createAuthorRequest.failure(error))
  }
}

function * onEdit ({ payload: { data, id } }) {
  yield put(actions.editAuthorRequest.start())

  try {
    const author = yield call(api.updateAuthor, id, data)
    const norm = yield call(normalize, author, schemas.author)
    yield put(actions.editAuthorRequest.success(norm))
    yield put(pushHistory(Routes.AUTHORS))
  } catch (error) {
    yield put(actions.editAuthorRequest.failure(error))
  }
}

export default function * watchUser () {
  yield all([
    takeLatest(constants.CREATE_AUTHOR, onCreate),
    takeLatest(constants.EDIT_AUTHOR, onEdit),
    takeLatest(constants.LOAD_AUTHOR, onLoad),
    takeLatest(constants.LOAD_ALL_AUTHORS, onLoadAll)
  ])
}
