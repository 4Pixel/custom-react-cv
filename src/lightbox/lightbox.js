import { useEffect, useState } from 'react'
import styles from './lightbox.module.css'

export default function Lightbox({ images: lImages }) {
  const [images, setImages] = useState(lImages)

  useEffect(() => {
    setImages(lImages)
  }, [lImages])

  if (images) {
    return (
      <div className={styles.Lightbox} onClick={() => setImages(null)}>
        <img className={styles.Img} src={images?.[0]} alt='' />
      </div>
    )
  } else {
    return null
  }
}
