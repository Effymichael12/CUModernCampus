import React from 'react'

function Header() {
  return (
    <div className='Header'>
      <img src='CU-image.png' alt='header-image' className='logo-header'></img>
      <div className='items-box-header'>
        <div className='items-box'>
      <p className='items-header'>Campus Data</p>
      <p className='items-header'>Departments </p>
      <p className='items-header'>Quick Actions</p>
      <p className='items-header'>Send a note</p>
      </div>
      </div>
    </div>
  )
}

export default Header