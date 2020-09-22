import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sidenav from '../components/sidenav'
import Left from '../components/left'
import Right from '../components/right'
import Footer from '../components/footer'

class Home extends Component {
    componentWillMount() {
        const { isAuthenticated, getProfile } = this.props.auth;

        if (isAuthenticated() ) {
            getProfile();
        }
    }
    login() {
        this.props.auth.login();
    }

    render() {
        const { isAuthenticated } = this.props.auth;
        return (
            <div>
               <div className="wrapper">
                    <div className="navbar sidebar">
                        <Sidenav/>
                    </div>
                     <div className="main-content">
                        <Left/>
                        <Right/>
                    </div>
                </div> 
                <Footer/>
            </div>
            
            
        );
    }
}

export default Home;
