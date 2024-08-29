import Lightbox from 'src/lightbox/lightbox'
import styles from './projects.module.css'
import { useState } from 'react'
import ProjectHeader from 'src/projects/project-header'

export default function Projects({ data }) {
  const [lboxImages, setLboxImages] = useState(null)

  const getDescription = entry => {
    if (entry.description) {
      return (
        <div className={styles.SubSection}>
          <h4 className={styles.SubHeader}>Beschreibung</h4>
          <div className={styles.Description}>{entry.description}</div>
        </div>
      )
    }
  }

  const getLists = (entry, prop, title) => {
    if (entry[prop]) {
      return (
        <div className={styles.SubSection}>
          <h4 className={styles.SubHeader}>{title}</h4>
          <ul className={styles.ListItems}>
            {entry[prop].map(item => (
              <li className={styles.ListItem} key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )
    }
  }

  const showImage = (title, image) => {
    setLboxImages([image])
  }

  const getGallery = entry => {
    return (
      <div className={styles.SubSection}>
        <div className={styles.Gallery}>
          {f.map(image => {
            return (
              <a target='blank' key={image} onClick={() => this.showImage(entry.title, image)}>
                <img className={styles.GalleryImg} src={image} alt='' />
              </a>
            )
          }, entry.images)}
        </div>
      </div>
    )
  }

  const getCompanyById = cId => {
    return f.flow(f.get('jobs'), f.find({ cId: cId }), f.get('company'))(this.props.data)
  }

  const list = f.flow(
    f.get('data.projects'),
    f.filter(project => !f.get('exclude', project))
  )(this.props)

  return (
    <div className={styles.Projects}>
      <Lightbox images={lboxImages}></Lightbox>
      <h2>Projekte</h2>
      <div className={styles.Container}>
        {f.map(
          entry => (
            <div
              className={styles.Project}
              id={`Project_${entry.title}`}
              key={entry.cId + entry.title}>
              <ProjectHeader
                title={entry.title}
                web={entry.web}
                cId={entry.cId}
                company={getCompanyById(entry.cId)}></ProjectHeader>
              {getDescription(entry)}
              {getLists(entry, 'technology', 'Technologie')}
              {getLists(entry, 'responsibilities', 'Aufgaben')}
              {getGallery(entry)}
            </div>
          ),
          list
        )}
      </div>
    </div>
  )
}
