import React from 'react'
import { Link } from 'react-router'

// import { navigate } from '@reach/router'

// import { logout, isLoggedIn } from '../utils/auth'
// import { Auth } from 'aws-amplify'
// import { getCurrentUser } from '../utils/auth'
// const user = getCurrentUser()

const Header = ({ siteTitle }) => (
  <div className="navbar-wrapper">
    <nav className="navbar navbar-expand announcement">
      <p>
        UPCOMING CONFERENCE: How to use Access Manager to it's fullest potential. <a href="/">Grab a seat in the Virtual Classroom</a>
      </p>
    </nav>
    <nav className="navbar navbar-expand">
      <div className="logo">
        <Link className="text-center logo" to="/">
          <img src="https://s3.us-east-2.amazonaws.com/fiservseminars-media.com/logo.png" height="84px" alt="logo"></img>
          {/* <h1 className="navbar-brand mb-0 text-primary">Authenticaysh</h1> */}
        </Link>
      </div>
      <div className="navbar-nav-scroll d-flex flex-grow-1" />
      <div className="navbar-nav-scroll authentication">
    </div>
  </nav>
  </div>
)

export default Header
