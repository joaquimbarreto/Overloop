import React from 'react'
import Loader from 'common/components/Loader'
import styles from './PageLoader.scss'

const PageLoader = () => (
  <div className={styles.component}>
    <div className={styles.loader}>
      <Loader primary />
    </div>
  </div>
)

export default PageLoader
