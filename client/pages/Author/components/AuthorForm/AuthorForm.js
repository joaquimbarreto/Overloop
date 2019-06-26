import React from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import { Input } from 'common/components/FormFields'
import Button from 'common/components/Button'
import FormGroup from 'common/components/FormGroup'
import styles from './ArticleForm.scss'

export const AUTHOR_ID = 'name'

export const validate = values => {
  const errors = {}
  const required = ['name']

  required.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  })

  return errors
}

export const AuthorForm = ({ handleSubmit, isEditing, name }) => {
  return (
    <form className={styles.component} onSubmit={handleSubmit}>
      <h1>{isEditing ? `Editing ${name}` : `Creating author ${name || ''}`}</h1>
      <FormGroup>
        <Field name='name' component={Input} placeholder='Name' label='Name' />
      </FormGroup>
      <Button primary type='submit'>
        {isEditing ? 'Save' : 'Create'} author
      </Button>
    </form>
  )
}

AuthorForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  isEditing: PropTypes.bool.isRequired,
  name: PropTypes.string
}

export default reduxForm({
  author: AUTHOR_ID,
  validate
})(AuthorForm)
