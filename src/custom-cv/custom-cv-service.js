import f from 'lodash/fp'

const extendImagePath = ( base, path, data ) => f.set( path, base + f.get( path, data ), data )

export const loadData = url => (
  fetch( url )
  .then( json => json.json( ) )
  .then( data => {
    const base = f.getOr( '', 'imageBasePath', data )
    return f.flow(
      data => extendImagePath( base, 'profileFoto', data ),
      data => {
        if( data.projects ){
          data.projects.map( project => {
            project.images = f.map( image => base + image, project.images )
            return project
          } )
        }
        return data
      }
    )( data )
  } )
)
