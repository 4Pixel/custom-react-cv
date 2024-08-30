import styles from './cv.module.css'
import Education from 'src/education/education'
import PersonalData from 'src/personal-data/personal-data'
import Skills from 'src/skills/skills'
import Projects from 'src/projects/projects'
import Profile from 'src/profile/profile'
import ProfileFoto from 'src/profile-foto/profile-foto'
import Jobs from 'src/jobs/jobs'

const components = [ProfileFoto, Education, PersonalData, Profile, Skills, Jobs, Projects]

export default function CV({ data, sections }) {
  const renderComponent = (Component, idx) => {
    return <Component data={data} key={idx} sections={sections} />
  }

  return (
    <div className={styles.CV}>
      <div className={styles.Sections}>
        {components.map((component, idx) => renderComponent(component, idx))}
      </div>
    </div>
  )
}
