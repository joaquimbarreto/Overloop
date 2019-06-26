import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import createSagaMiddleware, { END } from 'redux-saga'
import makeRootReducer from 'common/reducers'

export default function (initialState = {}, history) {
  const sagaMiddleware = createSagaMiddleware()

  const middleware = [
    sagaMiddleware,
    routerMiddleware(history)
  ]

  const enhancers = []

  if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.devToolsExtension

    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension())
    }
  }

  const store = createStore(
    makeRootReducer(),
    initialState,
    compose(
      applyMiddleware(...middleware),
      ...enhancers
    )
  )

  store.sagaMiddleware = sagaMiddleware
  store.runSaga = sagaMiddleware.run
  store.close = () => store.dispatch(END)

  return store
}
