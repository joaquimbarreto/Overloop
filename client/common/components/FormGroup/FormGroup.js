import React from 'react'
import PropTypes from 'prop-types'
import styles from './FormGroup.scss'

const FormGroup = ({ children }) => (
  <div className={styles.component}>
    {children}
  </div>
)

FormGroup.propTypes = {
  children: PropTypes.node.isRequired
}

export default FormGroup
