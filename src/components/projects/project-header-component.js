import React, { Component } from 'react'
import './project-header.css'
import Ico from '../ico'

export default class ProjectHeader extends Component {
  getCompany = () => (
    <a
      href={`#${this.props.cId}`}
      title='zur Jobbeschreibung'
      className='ProjectHeader-CompanyLink'>
      <span className='ProjectHeader-CompanyTag'>@{this.props.company}</span>
      <div className='ProjectHeader-Link'>
        <Ico icon='arrow-up' className='ProjectHeader-IconUp' />
      </div>
    </a>
  )

  getLink = () =>
    this.props.web && (
      <a
        href={this.props.web.link}
        target='_blank'
        title={this.props.web.title}
        className='ProjectHeader-Link'>
        <Ico icon='external-link' className='ProjectHeader-IconLink' />
      </a>
    )

  render() {
    return (
      <div className='ProjectHeader-CompanyTitle'>
        <h3 className='ProjectHeader-CompanyName'>{this.props.title}</h3>
        {this.getLink()}
        {this.getCompany()}
      </div>
    )
  }
}
