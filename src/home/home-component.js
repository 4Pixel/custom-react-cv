import home from './home.module.css'
import Ico from 'src/ico/ico'

export default function Home() {
  return (
    <div className={home.Home}>
      <h1>Custom CV Engine</h1>
      <p>by</p>
      <h3>Markus Glatz</h3>
      <br />
      <br />
      <p className={home.Note}>
        Sollten Sie diese Seite sehen haben Sie keinen angepassten Link (<b>/custom/...</b>)
        erhalten.
      </p>
      {/* <p>Erstellen sie ihren individuellen CV unter <Link to='/config'>/config</Link></p> */}
      <br />
      <br />
      <div className={home.Source}>
        <span>
          Den Source Code finden sie auf{' '}
          <a href='https://github.com/4Pixel' target='_blank' rel='noopener noreferrer'>
            github.com/4Pixel.
            <br />
            <Ico icon='github' />
          </a>
        </span>
      </div>
    </div>
  )
}
