import React from 'react'

function Logo({img_src}) {
  return (
    <div id='logo-div' style={{
        //marginLeft: '2em',
        //marginRight: '100%',
        marginTop: '1em',
        //marginBottom: '3em',
    }}>
        <a id='logo-home-link' href='' style={{
            width: '100%',
            height: '100%',
        }}>
            <img src={img_src} style={{
                //margin: 'auto',
                width: '10em',
                height: '8em',
                //verticalAlign: 'center',
            }}>

            </img>
        </a>
    </div>
  )
}

export default Logo