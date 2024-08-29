import styles from './cv.module.css'
import ProfileFoto from 'src/profile-foto/profile-foto'
import Education from 'src/education/education'
import PersonalData from 'src/personal-data/personal-data'
import Skills from 'src/skills/skills'
import Jobs from 'src/jobs/jobs'
import Projects from 'src/projects/projects'
import Profile from 'src/profile/profile'

const components = {
  profileFoto: ProfileFoto,
  education: Education,
  personalData: PersonalData,
  profile: Profile,
  skills: Skills,
  jobs: Jobs,
  projects: Projects,
}

export default function CV({ data, active }) {
  const renderComponent = (activeKey, idx) => {
    const Component = components[activeKey]
    return <Component data={data} key={idx} />
  }

  const actives = []
  f.mapKeys(activeKey => active[activeKey] && actives.push(activeKey), active)
  return (
    <div className={styles.CV}>
      <div className={styles.Sections}>
        {actives.map((activeKey, idx) => renderComponent(activeKey, idx))}
      </div>
    </div>
  )
}
