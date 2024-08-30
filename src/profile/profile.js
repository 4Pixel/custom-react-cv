import styles from './profile.module.css'
import { i18n } from 'src/locale'

export default function Profile({ data, sections }) {
  return (
    <div className={styles.Profile}>
      <h2>{i18n('profile')}</h2>
      <div className={styles.Row}>
        <div className={styles.Title}></div>
        <div>{data?.profile.intro}</div>
      </div>
    </div>
  )
}
