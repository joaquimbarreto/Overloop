import React from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import { Input, Textarea, CountrySelect } from 'common/components/FormFields'
import Button from 'common/components/Button'
import FormGroup from 'common/components/FormGroup'
import FormLabel from 'common/components/FormLabel'
import styles from './ArticleForm.scss'

export const FORM_ID = 'article'

export const validate = values => {
  const errors = {}
  const required = [
    'title',
    'content'
  ]

  required.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  })

  return errors
}

export const ArticleForm = ({
  handleSubmit,
  isEditing,
  title,
  onBlur
}) => {
  return (
    <form
      className={styles.component}
      onSubmit={handleSubmit}>
      <h1>
        {isEditing ? `Editing ${title}` : `Creating article ${title || ''}`}
      </h1>
      <FormGroup>
        <Field
          name='title'
          component={Input}
          placeholder='Title'
          label='Title' />
      </FormGroup>
      <FormGroup>
        <Field
          name='content'
          component={Textarea}
          placeholder='Content'
          label='Content' />
      </FormGroup>
      <FormGroup>
        <FormLabel>
          Available In
        </FormLabel>
        <Field
          name='availableIn'
          component={CountrySelect}
          onBlur={() => onBlur()} />
      </FormGroup>
      <Button
        primary
        type='submit'>
        {isEditing ? 'Save' : 'Create'} article
      </Button>
    </form>
  )
}

ArticleForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  isEditing: PropTypes.bool.isRequired,
  title: PropTypes.string,
  onBlur: PropTypes.func.isRequired
}

export default reduxForm({
  form: FORM_ID,
  validate
})(ArticleForm)
