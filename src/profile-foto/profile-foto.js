import styles from './profile-foto.module.css'

export default function ProfileFoto({ data }) {
  return (
    <div className={styles.ProfileFoto}>
      <div className={styles.Container}>
        <img className={styles.Img} src={data?.profileFoto} alt='Profile Foto' />
      </div>
    </div>
  )
}
