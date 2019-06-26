import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Multiselect from '../Multiselect'
import Loader from 'common/components/Loader'
import { getAllAuthors } from 'api/authors'

export default class AuthorSelect extends Component {
  static propTypes = {
    input: PropTypes.object.isRequired
  }

  state = {
    isLoaded: false,
    authors: null
  }

  loadAuthors () {
    getAllAuthors().then(authors => {
      this.setState({
        authors,
        isLoaded: true
      })
    })
  }

  componentWillMount () {
    this.loadAuthors()
  }

  render () {
    const { isLoaded, authors } = this.state

    if (!isLoaded) {
      return <Loader primary />
    }

    return (
      <Multiselect
        defaultValue={this.props.input.value}
        allowCreate={false}
        data={authors}
        {...this.props}
      />
    )
  }
}
