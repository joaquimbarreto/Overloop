import React from 'react'
import PropTypes from 'prop-types'
import styles from './AppLayout.scss'
import Header from 'common/components/Header'
import Content from 'common/components/Content'

const AppLayout = ({ children }) => (
  <div className={styles.component}>
    <Header />
    <Content className={styles.content}>
      {children}
    </Content>
  </div>
)

AppLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default AppLayout
