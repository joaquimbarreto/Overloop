import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import AuthorListView from '../components/AuthorListView'
import { getAuthors, getIsAuthorsLoaded } from 'common/selectors/entities'
import { loadAllAuthors } from 'common/actions/authors'

class AuthorList extends Component {
  static propTypes = {
    loadAllAuthors: PropTypes.func.isRequired
  }

  componentWillMount () {
    this.props.loadAllAuthors()
  }

  render () {
    return <AuthorListView {...this.props} />
  }
}

const mapStateToProps = state => ({
  authors: getAuthors(state),
  isLoaded: getIsAuthorsLoaded(state)
})

const mapActionsToProps = {
  loadAllAuthors
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(AuthorList)
