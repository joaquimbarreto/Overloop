import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './Content.scss'

const Content = ({ children, className }) => (
  <div
    className={cx(styles.component, {
      [className]: className
    })}>
    {children}
  </div>
)

Content.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

export default Content
