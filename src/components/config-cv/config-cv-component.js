import React, { Component } from 'react'
import './style.css'
import f from 'lodash/fp'
import CV from '../cv/cv-component'
import Toolbar from '../toolbar/toolbar-component'
import store from 'store2'
import { loadData } from '../custom-cv/custom-cv-service'
import { hashActive } from './config-service'

const active = {
  profileFoto: true,
  education: true,
  personalData: true,
  profile: true,
  skills: true,
  jobs: true,
  projects: true,
}

const defaultDataUrl =
  'https://raw.githubusercontent.com/4Pixel/custom-react-cv/master/sample/data.json'

export default class ConfigCV extends Component {
  constructor(props) {
    super(props)

    const dataUrl = store.get('dataUrl') || defaultDataUrl

    this.state = {
      dataUrl: dataUrl,
      active: active,
      hash: hashActive(active, dataUrl),
      data: null,
    }
  }

  componentDidMount() {
    this.load()
  }

  onChangeActive = changeProp => {
    const changedActive = f.set(changeProp.value, !changeProp.active, this.state.active)
    this.setState({
      active: changedActive,
      hash: hashActive(changedActive, this.state.dataUrl),
    })
  }

  onDataUrlChange = dataUrl => {
    store.set('dataUrl', dataUrl)
    this.setState(
      {
        dataUrl: dataUrl,
        hash: hashActive(this.state.active, dataUrl),
      },
      this.load()
    )
  }

  load = () => {
    loadData(this.state.dataUrl)
      .then(data => this.setState({ data: data }))
      .catch(() => ({ data: null }))
  }

  render() {
    const { data, active } = this.state
    return (
      <div className='ConfigCV'>
        <Toolbar
          hash={this.state.hash}
          dataUrl={this.state.dataUrl}
          onChangeActive={this.onChangeActive}
          onDataUrlChange={this.onDataUrlChange}
        />
        {data && <CV data={data} active={active} />}
      </div>
    )
  }
}
