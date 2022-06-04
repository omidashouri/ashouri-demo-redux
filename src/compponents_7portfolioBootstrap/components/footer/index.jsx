import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    //  py: padding y=top & bottom
    <footer className='container-fluid footer text-center py-2'>
      <div className='container'>
        <div className='row py-3'>
          <div className='col-md-3 col-sm-12 link-container'>
            <ul>
              <li>
                <a href='#'>omid ashouri</a>
              </li>
              <li>
                <a href='#'>09126607350</a>
              </li>
            </ul>
          </div>
          <div className='col-md-3 col-sm-12 link-container'>
            <ul>
              <li>
                <a href='#'>omid ashouri</a>
              </li>
              <li>
                <a href='#'>09126607350</a>
              </li>
            </ul>
          </div>
          <div className='col-md-3 col-sm-12 link-container'>
            <ul>
              <li>
                <a href='#'>omid ashouri</a>
              </li>
              <li>
                <a href='#'>09126607350</a>
              </li>
            </ul>
          </div>
          <div className='col-md-3 col-sm-12 link-container'>
            <ul>
              <li>
                <a href='#'>omid ashouri</a>
              </li>
              <li>
                <a href='#'>09126607350</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <span
        style={{ color: '#4e4e4e' }}
      >{`Omid Ashouri | All Rights Reserved ©${new Date().getFullYear()}`}</span>
    </footer>
  )
}

export default Footer
