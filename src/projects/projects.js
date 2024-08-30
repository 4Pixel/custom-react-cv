import Lightbox from 'src/lightbox/lightbox'
import styles from './projects.module.css'
import { useState } from 'react'
import ProjectHeader from 'src/projects/project-header'

export default function Projects({ data, sections }) {
  const [lboxImages, setLboxImages] = useState(null)

  const Description = ({ project }) =>
    project.description ? (
      <div className={styles.SubSection}>
        <h4 className={styles.SubHeader}>Beschreibung</h4>
        <div className={styles.Description}>{project.description}</div>
      </div>
    ) : null

  const List = ({ list, title }) =>
    list ? (
      <div className={styles.SubSection}>
        <h4 className={styles.SubHeader}>{title}</h4>
        <ul className={styles.ListItems}>
          {list.map(item => (
            <li className={styles.ListItem} key={item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    ) : null

  const showImage = (image, title) => {
    setLboxImages([image])
  }

  const Gallery = ({ project }) => {
    return (
      <div className={styles.SubSection}>
        <div className={styles.Gallery}>
          {project.images.map(image => (
            <a target='blank' key={image} onClick={() => showImage(image, project.title)}>
              <img className={styles.GalleryImg} src={image} alt='' />
            </a>
          ))}
        </div>
      </div>
    )
  }

  const getCompanyById = cId => data.jobs.find(job => job.cId === cId)?.company

  return (
    <div className={styles.Projects}>
      <Lightbox images={lboxImages}></Lightbox>
      <h2>Projekte</h2>
      <div className={styles.Container}>
        {data.projects
          .filter(p => !p.shouldExclude)
          .map(project => (
            <div
              className={styles.Project}
              id={`Project_${project.title}`}
              key={project.cId + project.title}>
              <ProjectHeader
                title={project.title}
                web={project.web}
                cId={project.cId}
                company={getCompanyById(project.cId)}></ProjectHeader>
              <Description project={project} />
              <List list={project.technology} title='Technologie' />
              <List list={project.responsibilities} title='Aufgaben' />
              <Gallery project={project} />
            </div>
          ))}
      </div>
    </div>
  )
}
