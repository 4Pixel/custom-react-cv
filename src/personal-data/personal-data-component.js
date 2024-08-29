import React, { Component } from 'react'
import './style.css'
import f from 'lodash/fp'
import { i18n } from '../locale'

export default class PersonalData extends Component {
  render() {
    const { data } = this.props
    const list = f.flow(
      f.get('personalData'),
      f.pick(['name', 'phone', 'email', 'website', 'nationality', 'strengths'])
    )(data)

    return (
      <div className='PersonalData'>
        <h2>{i18n('personalData')}</h2>
        {Object.keys(list).map(key => (
          <div className='PersonalData-Row' key={key}>
            <div className='PersonalData-Title'>{i18n(`personal.${key}`)}</div>
            <div>{list[key]}</div>
          </div>
        ))}
      </div>
    )
  }
}
