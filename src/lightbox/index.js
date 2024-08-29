import React, { Component } from 'react';
import './style.css';
import f from 'lodash/fp';

export default class Lightbox extends Component {
  constructor( props ) {
    super( props );
    this.state = {  images: null };
  }

  componentWillReceiveProps( nextProps ) {
    this.setState( { 
      images: nextProps.images 
    } );
  }
  
  closeLightbox = ( ) => {
    this.setState( { images: null } );
  }

	render() {
    if (  this.state.images ) {
      return (
        <div className="Lightbox" onClick={ this.closeLightbox }>
          <img className="Lightbox-Img" src={ f.get( 'images[0]', this.state ) } alt=''/>
        </div>
      );
    } else {
      return null;
    }
  }
};