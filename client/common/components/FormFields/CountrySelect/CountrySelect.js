import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Multiselect from '../Multiselect'
import Loader from 'common/components/Loader'
import { getCountries } from 'api/countries'

export default class CountrySelect extends Component {
  static propTypes = {
    input: PropTypes.object.isRequired
  }

  state = {
    isLoaded: false,
    countries: null
  }

  loadCountries () {
    getCountries().then(countries => {
      this.setState({
        countries,
        isLoaded: true
      })
    })
  }

  componentWillMount () {
    this.loadCountries()
  }

  render () {
    const { isLoaded, countries } = this.state

    if (!isLoaded) {
      return (
        <Loader primary />
      )
    }

    return (
      <Multiselect
        defaultValue={this.props.input.value}
        allowCreate={false}
        data={countries}
        {...this.props} />
    )
  }
}
