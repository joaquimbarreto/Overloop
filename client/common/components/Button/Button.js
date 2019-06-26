import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './Button.scss'

const Button = ({
  children,
  className,
  disabled,
  primary,
  secondary,
  error,
  type = 'button',
  ...props
}) => {
  return (
    <button
      className={cx(styles.component, {
        [styles.primary]: primary,
        [className]: className,
        [styles.disabled]: disabled,
        [styles.secondary]: secondary,
        [styles.error]: error
      })}
      disabled={disabled}
      type={type}
      {...props}>
      <div className={styles.content}>
        {children}
      </div>
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  primary: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  secondary: PropTypes.bool,
  error: PropTypes.bool,
  type: PropTypes.string
}

export default Button
