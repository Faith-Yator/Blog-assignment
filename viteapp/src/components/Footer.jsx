import React from 'react'

function Footer() {
    const year = new Date().toLocaleDateString();

  return (
    <div className='footer'>
      <h4>Jerop faith</h4>

       <h4> Date:{year}</h4>


    </div>
  )
}

export default Footer
