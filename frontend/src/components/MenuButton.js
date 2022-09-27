import React from 'react'

function MenuButton({id, img}) {
    


    return (
    <div id={`${id}-button-div`} style={{
        backgroundImage: `url(${img})`,
        backgroundSize: '75%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '25%',
        height: '75%',
    }}>
        

    </div>
  )
}

export default MenuButton