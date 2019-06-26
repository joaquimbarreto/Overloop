import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loadArticle, createArticle, editArticle } from 'common/actions/articles'
import ArticleForm, { FORM_ID } from '../components/ArticleForm'
import { getArticle } from 'common/selectors/entities'
import { formValueSelector } from 'redux-form'
import PageLoader from 'common/components/PageLoader'
import { Map } from 'immutable'

class ArticleContainer extends Component {
  static propTypes = {
    loadArticle: PropTypes.func.isRequired,
    editArticle: PropTypes.func.isRequired,
    createArticle: PropTypes.func.isRequired,
    params: PropTypes.object,
    title: PropTypes.string,
    isEditing: PropTypes.bool.isRequired,
    article: PropTypes.instanceOf(Map)
  }

  // TODO: should add an componentWillReceiveProps + loadArticle with new ID when route changes to other article
  componentWillMount () {
    const { isEditing, loadArticle, params } = this.props

    if (isEditing) {
      loadArticle(params.id)
    }
  }

  handleSubmit = data => {
    const {
      isEditing,
      params,
      editArticle,
      createArticle
    } = this.props

    if (isEditing) {
      return editArticle({
        id: params.id,
        data
      })
    }

    createArticle(data)
  }

  render () {
    const { isEditing, article, title } = this.props

    if (isEditing && !article) {
      return (
        <PageLoader />
      )
    }

    const initialValues = (isEditing && article) ? {
      title: article.get('title'),
      content: article.get('content'),
      availableIn: article.get('availableIn').toArray()
    } : {}

    return (
      <ArticleForm
        title={title}
        isEditing={isEditing}
        initialValues={initialValues}
        onSubmit={this.handleSubmit} />
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
  loadArticle,
  editArticle,
  createArticle
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(ArticleContainer)
