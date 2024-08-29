import React, { Component } from 'react'
import './style.css'

import CV from '../cv/cv-component'
import { dehashActive } from 'src/config-cv/config-service'
import { loadData } from 'src/custom-cv/custom-cv-service'

export default class CustomCV extends Component {
  constructor(props) {
    super(props)
    const config = dehashActive(this.props.match.params.config)
    this.state = { active: config.active, dataUrl: config.dataUrl }
  }

  componentDidMount() {
    loadData(this.state.dataUrl).then(data => this.setState({ data: data }))
  }

  render() {
    const { data, active } = this.state
    return <div className='CustomCV'>{data && <CV data={data} active={active} />}</div>
  }
}
