import React from 'react'
import PropTypes from 'prop-types'
import styles from './Message.scss'
import cx from 'classnames'

const Message = ({ title, className, children, error, success }) => (
  <div
    className={cx(styles.component, {
      [styles.error]: error,
      [styles.success]: success,
      [className]: className
    })}>
    {title && (
      <div className={styles.title}>
        {title}
      </div>
    )}
    <div className={styles.content}>
      {children}
    </div>
  </div>
)

Message.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  error: PropTypes.bool,
  success: PropTypes.bool
}

export default Message
