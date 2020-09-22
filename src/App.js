import React, { Component } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import './App.css';

class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <Navbar>
          <nav className="navbar navbar-expand announcement">
            <p>
              UPCOMING CONFERENCE: How to use Access Manager to it's fullest potential. <a href="/">Grab a seat in the Virtual Classroom</a>
            </p>
          </nav>
          <nav className="navbar navbar-expand">
             <div className="logo">
               <a href="/home"><img src="https://s3.us-east-2.amazonaws.com/fiservseminars-media.com/logo.png" height="84px" alt="logo"></img></a>
             </div>
          </nav>
          <nav className="navbar-nav-scroll authentication">
              {
                  !isAuthenticated() && (
                      <Button
                          className="btn-margin"
                          onClick={this.login.bind(this)}
                      >
                        Login
                      </Button>
                  )
              }
              {
                  isAuthenticated() && (
                      <Button
                          className="btn-margin"
                          onClick={this.goTo.bind(this, 'profile')}
                      >
                        Profile
                      </Button>
                  )
              }
              {
                  isAuthenticated() && (
                      <Button
                          className="btn-margin"
                          onClick={this.goTo.bind(this, 'chat')}
                      >
                        Chat
                      </Button>
                  )
              }
              {
                  isAuthenticated() && (
                      <Button
                          className="btn-margin"
                          onClick={this.logout.bind(this)}
                      >
                        Log Out
                      </Button>
                  )
              }
          </nav>
        </Navbar>
    );
  }
}

export default App;
