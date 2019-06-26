import React from 'react'
import PropTypes from 'prop-types'
import ReactWidgetMultiselect from 'react-widgets/lib/Multiselect'
import styles from './Multiselect.scss'
import 'react-widgets/dist/css/react-widgets.css'

const Multiselect = ({
  input,
  ...props
}) => {
  if (input.value === '') {
    input.value = []
  }

  return (
    <div className={styles.component}>
      <ReactWidgetMultiselect
        value={input.value}
        onChange={input.onChange}
        defaultValue={[]}
        {...props} />
    </div>
  )
}

Multiselect.propTypes = {
  input: PropTypes.object.isRequired
}

export default Multiselect
