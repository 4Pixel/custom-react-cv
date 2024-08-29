import { useRouter } from 'next/router'
import 'public/app.css'

export default function MyApp({ Component, pageProps }) {
  const router = useRouter()

  if (router.asPath === '/401') {
    return <Component {...pageProps} />
  }

  return (
    <div>
      <Component {...pageProps} />
    </div>
  )
}
