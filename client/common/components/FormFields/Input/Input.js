import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './Input.scss'
import FormLabel from 'common/components/FormLabel'

const Input = ({
  className,
  input,
  placeholder,
  type = 'text',
  noErrors,
  meta,
  maxLength,
  minLength,
  label,
  disabled,
  required,
  readOnly
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
        [styles.readOnly]: readOnly,
        [styles.required]: required,
        [styles.hasError]: hasError
      })}>
      {label && (
        <FormLabel className={styles.label}>
          {label}
        </FormLabel>
      )}
      <div className={styles.container}>
        <input
          readOnly={readOnly}
          disabled={disabled}
          {...input}
          maxLength={maxLength}
          minLength={minLength}
          type={type}
          placeholder={placeholder}
          className={inputState} />
      </div>
      {hasError && (
        <div className={styles.error}>
          <small>{error}</small>
        </div>
      )}
    </div>
  )
}

Input.propTypes = {
  /** This is the structure used by `redux-form` Fields: https://redux-form.com/7.2.3/docs/api/field.md/#input-props */
  input: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func
  }),
  /** A placeholder string */
  placeholder: PropTypes.string,
  /** Override the className, this is for the actual input, not the containers */
  className: PropTypes.string,
  /** Input type: text, password, email etc. */
  type: PropTypes.string,
  /** When noErrors is true, we don't display error states and messages */
  noErrors: PropTypes.bool,
  /** Minimum length */
  minLength: PropTypes.number,
  /** This is a label at the top of the input */
  label: PropTypes.string,
  /** Max length */
  maxLength: PropTypes.number,
  /** Redux-form Field meta data */
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string
  }),
  /** You can mark an input as required, to add asterix + styling */
  required: PropTypes.bool,
  /** Readonly */
  readOnly: PropTypes.bool,
  /** Disable the input field */
  disabled: PropTypes.bool
}

export default Input
