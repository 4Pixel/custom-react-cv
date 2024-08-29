import React, { Component } from 'react'
import './style.css'
import f from 'lodash/fp'

export default class ProfileFoto extends Component {
  render() {
    const { data } = this.props
    const url = f.get( 'profileFoto', data )

    return (
      <div className="ProfileFoto">
        <div className="ProfileFoto-Container">
          <img className="ProfileFoto-Img" src={ url } alt="Profile Foto" />
        </div>
      </div>
    )
  }
}