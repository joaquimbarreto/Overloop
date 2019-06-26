import React from 'react'
import styles from './Header.scss'
import * as Routes from 'constants/Routes'
import { Link } from 'react-router'
import Content from 'common/components/Content'

const Header = () => (
  <div className={styles.component}>
    <Content className={styles.content}>
      <Link
        to={Routes.ARTICLES}
        className={styles.logo}>
        Overloop
      </Link>
      <div className={styles.navigation}>
        <Link
          className={styles.navigationItem}
          to={Routes.ARTICLES}>
          Articles
        </Link>
      </div>
    </Content>
  </div>
)

export default Header
