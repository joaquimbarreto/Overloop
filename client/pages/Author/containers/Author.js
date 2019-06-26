import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loadAuthor, createAuthor, editAuthor } from 'common/actions/articles'
import AuthorForm, { FORM_ID } from '../../Article/components/ArticleForm'
import { getArticle } from 'common/selectors/entities'
import { formValueSelector } from 'redux-form'
import PageLoader from 'common/components/PageLoader'
import { Map } from 'immutable'

class AuthorContainer extends Component {
  static propTypes = {
    loadAuthor: PropTypes.func.isRequired,
    editAuthor: PropTypes.func.isRequired,
    createAuthor: PropTypes.func.isRequired,
    params: PropTypes.object,
    title: PropTypes.string,
    isEditing: PropTypes.bool.isRequired,
    article: PropTypes.instanceOf(Map)
  }

  // TODO: should add an componentWillReceiveProps + loadAuthor with new ID when route changes to other article
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
    const { isEditing, article, title } = this.props

    if (isEditing && !article) {
      return <PageLoader />
    }

    const initialValues =
      isEditing && article
        ? {
          title: article.get('title'),
          content: article.get('content'),
          availableIn: article.get('availableIn').toArray()
        }
        : {}

    return (
      <AuthorForm
        title={title}
        isEditing={isEditing}
        initialValues={initialValues}
        onSubmit={this.handleSubmit}
      />
    )
  }
}

const valueSelector = formValueSelector(FORM_ID)

const mapStateToProps = (state, ownProps) => {
  const isEditing = !!ownProps.params.id

  return {
    article: getArticle(ownProps.params.id)(state),
    isEditing,
    title: valueSelector(state, 'title')
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
