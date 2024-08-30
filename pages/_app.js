import Head from 'next/head'
import { useRouter } from 'next/router'
import 'public/app.css'

export default function MyApp({ Component, pageProps }) {
  const router = useRouter()

  if (router.asPath === '/401') {
    return <Component {...pageProps} />
  }

  return (
    <div>
      <Head>
        <link rel='manifest' href='/manifest.json' />
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}
