import styles from './profile-foto.module.css'

export default function ProfileFoto({ data }) {
  return data?.personalData?.images?.length ? (
    <div className={styles.ProfileFoto}>
      <img className={styles.Img} src={data.personalData.images[0]} alt='Profile Foto' />
    </div>
  ) : null
}
