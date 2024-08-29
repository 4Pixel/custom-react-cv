import React, { Component } from 'react'
import './projects.css'
import f from 'lodash/fp'
import ProjectHeader from './project-header-component'
import Lightbox from '../lightbox'

export default class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lboxImages: null,
    }
  }

  getDescription = entry => {
    if (entry.description) {
      return (
        <div className='Projects-SubSection'>
          <h4 className='Projects-SubHeader'>Beschreibung</h4>
          <div className='Projects-Description'>{entry.description}</div>
        </div>
      )
    }
  }

  getLists = (entry, prop, title) => {
    if (entry[prop]) {
      return (
        <div className='Projects-SubSection'>
          <h4 className='Projects-SubHeader'>{title}</h4>
          <ul className='Projects-ListItems'>
            {f.map(
              item => (
                <li className='Projects-ListItem' key={item}>
                  {item}
                </li>
              ),
              entry[prop]
            )}
          </ul>
        </div>
      )
    }
  }

  showImage = (title, image) => {
    this.setState({ lboxImages: [image] })
  }

  getGallery = entry => {
    return (
      <div className='Projects-SubSection'>
        <div className='Projects-Gallery'>
          {f.map(image => {
            return (
              <a target='blank' key={image} onClick={() => this.showImage(entry.title, image)}>
                <img className='Projects-GalleryImg' src={image} alt='' />
              </a>
            )
          }, entry.images)}
        </div>
      </div>
    )
  }

  getCompanyById = cId => {
    return f.flow(f.get('jobs'), f.find({ cId: cId }), f.get('company'))(this.props.data)
  }

  render() {
    const list = f.flow(
      f.get('data.projects'),
      f.filter(project => !f.get('exclude', project))
    )(this.props)

    return (
      <div className='Projects'>
        <Lightbox images={this.state.lboxImages}></Lightbox>
        <h2>Projekte</h2>
        <div className='Projects-Container'>
          {f.map(
            entry => (
              <div
                className='Projects-Project'
                id={`Project_${entry.title}`}
                key={entry.cId + entry.title}>
                <ProjectHeader
                  title={entry.title}
                  web={entry.web}
                  cId={entry.cId}
                  company={this.getCompanyById(entry.cId)}></ProjectHeader>
                {this.getDescription(entry)}
                {this.getLists(entry, 'technology', 'Technologie')}
                {this.getLists(entry, 'responsibilities', 'Aufgaben')}
                {this.getGallery(entry)}
              </div>
            ),
            list
          )}
        </div>
      </div>
    )
  }
}
