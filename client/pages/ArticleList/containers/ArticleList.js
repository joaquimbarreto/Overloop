import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ArticleListView from '../components/ArticleListView'
import { getArticles, getIsArticlesLoaded } from 'common/selectors/entities'
import { loadAllArticles } from 'common/actions/articles'

class ArticleList extends Component {
  static propTypes = {
    loadAllArticles: PropTypes.func.isRequired
  }

  componentWillMount () {
    this.props.loadAllArticles()
  }

  render () {
    return (
      <ArticleListView {...this.props} />
    )
  }
}

const mapStateToProps = state => ({
  articles: getArticles(state),
  isLoaded: getIsArticlesLoaded(state)
})

const mapActionsToProps = {
  loadAllArticles
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(ArticleList)
