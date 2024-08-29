import React, { Component } from 'react'
import './style.css'
import f from 'lodash/fp'
import { format } from 'date-fns'
import { i18n } from '../locale'

export default class Education extends Component {
  render() {
    const list = f.flow(f.get('data.education'), f.sortBy('from'), f.reverse)(this.props)

    return (
      <div className='Education'>
        <h2>{i18n('education')}</h2>
        {list.map(entry => (
          <div className='Education-Row' key={entry.title}>
            <div className='Education-Daterange'>
              {format(new Date(entry.from), 'YYYY')} -{' '}
              {entry.to ? format(new Date(entry.to), 'YYYY') : ''}
            </div>
            <div>
              <p>{entry.title}</p>
              {f.getOr([], 'notes', entry).map((note, idx) => (
                <p className='Education-Note' key={idx}>
                  {note}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    )
  }
}
