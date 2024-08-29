import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import registerServiceWorker from './registerServiceWorker'
import './index.css'
import ConfigCV from './components/config-cv/config-cv-component'
import CustomCV from './components/custom-cv/custom-cv-component'
import Home from './components/home/home-component'

ReactDOM.render(
  <Router>
    <div className='App'>
      <Route exact path='/' component={Home} />
      <Route path='/config' component={ConfigCV} />
      <Route path='/custom/:config' component={CustomCV} />
    </div>
  </Router>,
  document.getElementById('root')
)
registerServiceWorker()
