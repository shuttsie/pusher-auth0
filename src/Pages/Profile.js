import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      profile: {},
    };
  }

  componentDidMount() {
    const { userProfile, getProfile } = this.props.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({
          profile: profile,
        });
      });
    } else {
      this.setState({ profile: userProfile });
    }
  }

  render() {
    const { profile } = this.state;
    console.log(profile);
    return (
      <Container className='mb-5'>
        <Row className='align-items-center profile-header mb-5 text-center text-md-left'>
          <Col md={2}>
            <img
              src={profile.picture}
              alt='Profile'
              className='rounded-circle img-fluid profile-picture mb-3 mb-md-0'
            />
          </Col>
          <Col md>
            <h2>{profile.name}</h2>

            <p className='lead text-muted'>{profile.email}</p>
          </Col>
        </Row>
        <Row>
          <h2>
            Name: {profile[`https://fiservseminars.com/first_name`]}{' '}
            {profile[`https://fiservseminars.com/last_name`]}{' '}
          </h2>
        </Row>
        <Row>
          <h2>Bank Name: {profile[`https://fiservseminars.com/bank_name`]}</h2>
        </Row>
        <Row>
          <h2>
            Bank Title: {profile[`https://fiservseminars.com/bank_title`]}
          </h2>
        </Row>
        <Row>
          <h2>City: {profile[`https://fiservseminars.com/city`]}</h2>
        </Row>
        <Row>
          <h2>State: {profile[`https://fiservseminars.com/state`]}</h2>
        </Row>
        <Row>
          <h2>
            Seminar Date: {profile[`https://fiservseminars.com/seminarDate`]}
          </h2>
        </Row>
      </Container>
    );
  }
}
export default Profile;
