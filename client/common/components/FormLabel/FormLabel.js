import React from 'react'
import PropTypes from 'prop-types'
import styles from './FormLabel.scss'
import cx from 'classnames'

const FormLabel = ({
  children,
  className
}) => (
  <div
    className={cx(styles.component, {
      [className]: className
    })}>
    {children}
  </div>
)

FormLabel.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}

export default FormLabel
