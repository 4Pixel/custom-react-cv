import styles from './profile.module.css'
import f from 'lodash/fp'
import { i18n } from 'src/locale'

export default function Profile({ data }) {
  const intro = f.get('profile', data)

  return (
    <div className={styles.Profile}>
      <h2>{i18n('profile')}</h2>
      <div className={styles.Row}>
        <div className={styles.Title}></div>
        <div>{intro}</div>
      </div>
    </div>
  )
}
