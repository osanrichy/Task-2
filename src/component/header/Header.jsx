import React from 'react'
import './header.css'

function Header() {
  return (
    <div className='search1'>
        <div className="searchWrapper">
            <div className="search">
            <input className='searchBox' />
            <div className="searchbtn">
                <h5 className='searchWord'>Contact us</h5>
                <button type='submit' className='btn'>Signup</button>
            </div>
        </div>
        </div>

    </div>
  )
}

export default Header