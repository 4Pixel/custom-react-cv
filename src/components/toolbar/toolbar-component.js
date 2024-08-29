import React, { Component } from 'react'
import './style.css'
import Ico from '../ico'
import f from 'lodash/fp'
import { Link } from 'react-router-dom'
import { activeSections } from '../shared/common'

export default class Toolbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      dataUrl: props.dataUrl,
      hash: props.hash,
      sections: f.map(
        section => ({
          title: section.title,
          value: section.long,
          active: true,
        }),
        activeSections
      ),
    }
  }

  static getDerivedStateFromProps(props) {
    return { hash: props.hash, dataUrl: props.dataUrl }
  }

  onChangeActive = section => {
    this.setState(prevState => ({
      sections: prevState.sections.map(s => {
        if (s.value === section.value) {
          s.active = !section.active
        }
        return s
      }),
    }))
    this.props.onChangeActive(section)
  }

  onDataUrlChange = event => {
    this.props.onDataUrlChange(event.target.value)
  }

  onMenuToggle = () => {
    this.setState({ show: !this.state.show })
  }

  renderMenu = () => (
    <div className='Toolbar-Menu'>
      <div className='Toolbar-Menu-Container'>
        <ul>
          {f.values(this.state.sections).map(section => (
            <li key={section.value} className='Toolbar-MenuEntry'>
              <input
                className='Toolbar-Checkbox'
                type='checkbox'
                checked={section.active}
                onChange={() => this.onChangeActive(section)}
              />
              <span onClick={() => this.onChangeActive(section)}>{section.title}</span>
            </li>
          ))}
          <li className='Toolbar-MenuEntry Toolbar-MenuEntryDataLink'>
            <span className='Toolbar-DataLink'>
              Link zu Deinem JSON file (zB. Google Drive, DropBox,...)
            </span>
            <textarea type='text' value={this.state.dataUrl} onChange={this.onDataUrlChange} />
          </li>
          <li className='Toolbar-MenuEntry Toolbar-MenuEntryHash'>
            <Link className='Toolbar-Hash' to={'/custom/' + this.state.hash} target='_blank'>
              Share Link anzeigen<Ico icon='external-link'></Ico>
            </Link>
            <textarea
              type='text'
              value={window.location.host + '/custom/' + this.state.hash}
              readOnly
            />
          </li>
        </ul>
      </div>
    </div>
  )

  render() {
    return (
      <div className='Toolbar'>
        <div className='Toolbar-Bar'>
          <div className='Toolbar-Icon' onClick={this.onMenuToggle}>
            <Ico icon='navicon' />
          </div>
        </div>
        {this.state.show ? this.renderMenu() : ''}
      </div>
    )
  }
}
