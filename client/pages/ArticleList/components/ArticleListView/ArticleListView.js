import React from 'react'
import PropTypes from 'prop-types'
import styles from './ArticleListView.scss'
import { Map } from 'immutable'
import Article from 'common/components/Article'
import Button from 'common/components/Button'
import * as Routes from 'constants/Routes'
import { Link, formatPattern } from 'react-router'
import Loader from 'common/components/Loader'

const sortArticles = articles => articles.sort((a, b) => {
  return (new Date(b.get('created')) - new Date(a.get('created')))
})

const ArticleListView = ({ articles, isLoaded }) => {
  const sortedArticles = sortArticles(articles)

  const content = isLoaded ? articles.size === 0 ? (
    <div className={styles.empty}>
      No articles yet, let's create one first ;)
    </div>
  ) : sortedArticles.valueSeq().map(a => (
    <Article
      article={a}
      key={a.get('_id')} />
  )) : (
    <div className={styles.loader}>
      <Loader primary />
    </div>
  )

  return (
    <div className={styles.component}>
      <h1 className={styles.title}>
        Articles
      </h1>
      <div className={styles.controls}>
        <Link
          to={formatPattern(Routes.ARTICLE)}>
          <Button primary>
            Create a new article
          </Button>
        </Link>
      </div>
      {content}
    </div>
  )
}

ArticleListView.propTypes = {
  articles: PropTypes.instanceOf(Map).isRequired,
  isLoaded: PropTypes.bool.isRequired
}

export default ArticleListView
