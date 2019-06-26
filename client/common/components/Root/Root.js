import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import createRoutes from 'pages/router'
import { hot } from 'react-hot-loader'

class Root extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired
  };

  render () {
    const {
      store,
      history
    } = this.props

    return (
      <Provider store={store}>
        <Router
          history={history}
          routes={createRoutes(store)} />
      </Provider>
    )
  }
}

export default hot(module)(Root)
