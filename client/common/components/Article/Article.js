import React from 'react'
import PropTypes from 'prop-types'
import styles from './Article.scss'
import { Map } from 'immutable'
import * as Routes from 'constants/Routes'
import { Link, formatPattern } from 'react-router'
import moment from 'moment'

const Article = ({ article }) => {
  const date = moment(article.get('created'))

  return (
    <div className={styles.component}>
      <Link
        className={styles.title}
        to={formatPattern(Routes.ARTICLE, {
          id: article.get('_id')
        })}>
        {article.get('title')}
      </Link>
      <div className={styles.date}>
        {date.format('LLLL')}
      </div>
      <div className={styles.content}>
        {article.get('content')}
      </div>
    </div>
  )
}

Article.propTypes = {
  article: PropTypes.instanceOf(Map).isRequired
}

export default Article
