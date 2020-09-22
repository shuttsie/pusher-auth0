import React from 'react'
import Left from '../components/left'
import Right from '../components/right'
import Sidenav from '../components/sidenav'
import Header from '../components/header'
import Footer from '../components/footer'

const Meetings = () => {
  return (
    <div>
      {/* <Header/> */}
        <div className="wrapper">
          <div className="navbar sidebar">
            <Sidenav/>
          </div>
          <div className="main-content">
            <Left/>
            <Right/>
          </div>
        </div> 
      {/* <Footer/> */}
    </div>
  )
}

export default Meetings