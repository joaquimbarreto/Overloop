import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import createStore from 'utils/createStore'
import Root from 'common/components/Root'
import sagas from 'common/sagas'

const store = createStore({}, browserHistory)
const history = syncHistoryWithStore(browserHistory, store)

store.runSaga(sagas)

export const rootElement = document.getElementById('root')

render((
  <Root
    store={store}
    history={history} />
), rootElement)
