import React, { Component } from 'react'
import './style.css'
import PersonalData from '../personal-data/personal-data-component'
import ProfileFoto from '../profile-foto/profile-foto-component'
import Education from '../education/education-component'
import Profile from '../profile/profile-component'
import Skills from '../skills/skills-component'
import Projects from '../projects/projects-component'
import Jobs from '../jobs/jobs-component'
import f from 'lodash/fp'

const components = {
  profileFoto: ProfileFoto,
  education: Education,
  personalData: PersonalData,
  profile: Profile,
  skills: Skills,
  jobs: Jobs,
  projects: Projects
}

export default class CV extends Component {
  constructor( props ) {
    super( props )
    this.state = {
      active: props.active
    }
  }

  renderComponent = ( activeKey, idx ) => {
    const { data } = this.props
    const Component = components[ activeKey ]
    return <Component data={ data } key={ idx } />
  }
  
	render() {
    const { active } = this.props
    const actives = [ ]
    f.mapKeys( activeKey => active[ activeKey ] && actives.push( activeKey ), active )
		return (
			<div className="CV">
				<div className="CV-Sections">
          { actives.map( ( activeKey, idx ) => this.renderComponent( activeKey, idx ) ) }
        </div>
			</div>
		)
	}
}
