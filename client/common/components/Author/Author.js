import React from 'react'
import PropTypes from 'prop-types'
import styles from './Author.scss'
import { Map } from 'immutable'
import * as Routes from 'constants/Routes'
import { Link, formatPattern } from 'react-router'

const Author = ({ author }) => {
  return (
    <div className={styles.component}>
      <Link
        className={styles.title}
        to={formatPattern(Routes.AUTHOR, {
          id: author.get('_id')
        })}
      >
        {author.get('NAME')}
      </Link>
    </div>
  )
}

Author.propTypes = {
  author: PropTypes.instanceOf(Map).isRequired
}

export default Author
