import React, { Component } from 'react';
import './style.css';
import f from 'lodash/fp';

export default class Skills extends Component {
  render() {
    return (
      <div className="Skills">
        <h2>Skills</h2>
        { f.flow(
            f.get( 'data.skills' ),
            f.map( entry =>
              <div className="Skills-Row" key={ entry.type }>
                <div className="Skills-Type">{ entry.type }</div>
                <div>
                  { entry.list.map( ( skillList, idx ) =>
                    <span key={ idx }>{ skillList }{ idx < entry.list.length - 1 ? ', ' : '' }</span>
                  ) }
                </div>
              </div>
            ) 
          )( this.props ) }
      </div>
    );
  }
};