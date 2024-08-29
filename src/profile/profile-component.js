import React, { Component } from 'react'
import './style.css'
import f from 'lodash/fp'
import { i18n } from '../locale'

export default class ProfileFoto extends Component {
  render() {
    const { data } = this.props
    const intro = f.get('profile', data)

    return (
      <div className='Profile'>
        <h2>{i18n('profile')}</h2>
        <div className='Profile-Row'>
          <div className='Profile-Title'></div>
          <div>{intro}</div>
        </div>
      </div>
    )
  }
}
