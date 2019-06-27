import React from 'react'
import PropTypes from 'prop-types'
import styles from './AuthorListView.scss'
import { Map } from 'immutable'
import Author from 'common/components/Author'
import Button from 'common/components/Button'
import * as Routes from 'constants/Routes'
import { Link, formatPattern } from 'react-router'
import Loader from 'common/components/Loader'

// const sortAuthors = authors =>
//   authors.sort((a, b) => {
//     return new Date(b.get('created')) - new Date(a.get('created'))
//   })

const AuthorListView = ({ authors, isLoaded }) => {
  // const sortedAuthors = sortAuthors(authors)

  const content = isLoaded ? (
    authors.size === 0 ? (
      <div className={styles.empty}>
        No authors yet, let's create one first.
      </div>
    ) : (
      authors.valueSeq().map(a => <Author author={a} key={a.get('_id')} />)
    )
  ) : (
    <div className={styles.loader}>
      <Loader primary />
    </div>
  )

  return (
    <div className={styles.component}>
      <h1 className={styles.title}>Authors</h1>
      <div className={styles.controls}>
        <Link to={formatPattern(Routes.AUTHOR)}>
          <Button primary>Create a new author</Button>
        </Link>
      </div>
      {content}
    </div>
  )
}

AuthorListView.propTypes = {
  authors: PropTypes.instanceOf(Map).isRequired,
  isLoaded: PropTypes.bool.isRequired
}

export default AuthorListView
