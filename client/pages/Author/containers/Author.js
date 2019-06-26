import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loadAuthor, createAuthor, editAuthor } from 'common/actions/authors'
import AuthorForm, { AUFORM_ID } from '../../Author/components/AuthorForm'
import { getAuthor } from 'common/selectors/entities'
import { formValueSelector } from 'redux-form'
import PageLoader from 'common/components/PageLoader'
import { Map } from 'immutable'

class AuthorContainer extends Component {
  static propTypes = {
    loadAuthor: PropTypes.func.isRequired,
    editAuthor: PropTypes.func.isRequired,
    createAuthor: PropTypes.func.isRequired,
    params: PropTypes.object,
    name: PropTypes.string,
    isEditing: PropTypes.bool.isRequired,
    author: PropTypes.instanceOf(Map)
  }

  // TODO: should add an componentWillReceiveProps + loadAuthor with new ID when route changes to other author
  componentWillMount () {
    const { isEditing, loadAuthor, params } = this.props

    if (isEditing) {
      loadAuthor(params.id)
    }
  }

  handleSubmit = data => {
    const { isEditing, params, editAuthor, createAuthor } = this.props

    if (isEditing) {
      return editAuthor({
        id: params.id,
        data
      })
    }

    createAuthor(data)
  }

  render () {
    const { isEditing, author, name } = this.props

    if (isEditing && !author) {
      return <PageLoader />
    }

    const initialValues =
      isEditing && author
        ? {
          name: author.get('name')
        }
        : {}

    return (
      <AuthorForm
        name={name}
        isEditing={isEditing}
        initialValues={initialValues}
        onSubmit={this.handleSubmit}
      />
    )
  }
}

const valueSelector = formValueSelector(AUFORM_ID)

const mapStateToProps = (state, ownProps) => {
  const isEditing = !!ownProps.params.id

  return {
    author: getAuthor(ownProps.params.id)(state),
    isEditing,
    name: valueSelector(state, 'name')
  }
}

const mapActionsToProps = {
  loadAuthor,
  editAuthor,
  createAuthor
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(AuthorContainer)
