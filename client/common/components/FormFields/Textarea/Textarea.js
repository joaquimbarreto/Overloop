import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './Textarea.scss'
import FormLabel from 'common/components/FormLabel'
import ReactTextarea from 'react-textarea-autosize'

const Textarea = ({
  className,
  input,
  placeholder,
  noErrors,
  meta,
  maxLength,
  minLength,
  label,
  onKeyUp,
  isRequired,
  onKeyDown,
  rootClassName
}) => {
  const touched = meta && meta.touched
  const error = meta && meta.error
  const hasError = !noErrors && touched && error

  const inputState = cx(styles.component, {
    [className]: className,
    [styles.hasError]: hasError
  })

  return (
    <div
      className={cx({
        [rootClassName]: rootClassName,
        [styles.isRequired]: isRequired,
        [styles.hasError]: hasError
      })}>
      {label && (
        <FormLabel className={styles.label}>
          {label}
        </FormLabel>
      )}
      <div className={styles.container}>
        <ReactTextarea
          onKeyUp={onKeyUp}
          onKeyDown={onKeyDown}
          minRows={3}
          maxLength={maxLength}
          minLength={minLength}
          placeholder={placeholder}
          className={inputState}
          {...input} />
      </div>
      {hasError && (
        <div className={styles.error}>
          <small>{error}</small>
        </div>
      )}
    </div>
  )
}

Textarea.propTypes = {
  /** Redux form Field object */
  input: PropTypes.object.isRequired,
  /** Placeholder text */
  placeholder: PropTypes.string,
  /** Override the className of the textarea */
  className: PropTypes.string,
  /** Override the className of the container */
  rootClassName: PropTypes.string,
  /** Disable noErrors */
  noErrors: PropTypes.bool,
  /** Show required visualizations (Asterix + styling */
  isRequired: PropTypes.bool,
  /** Minimum length */
  minLength: PropTypes.number,
  /** Number of max rows until the textarea is no longer autosizing
  maxRows: PropTypes.number,
  /** Show a label at the top of the input */
  label: PropTypes.string,
  maxLength: PropTypes.number,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string
  }),
  rows: PropTypes.number,
  cols: PropTypes.number,
  onKeyUp: PropTypes.func,
  onKeyDown: PropTypes.func
}

export default Textarea
