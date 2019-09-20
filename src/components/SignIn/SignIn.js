import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'

import { signIn } from '../../api/auth'
import messages from '../AutoDismissAlert/messages'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Jumbotron from 'react-bootstrap/Jumbotron'

class SignIn extends Component {
  constructor () {
    super()

    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onSignIn = event => {
    event.preventDefault()

    const { alert, history, setUser } = this.props

    signIn(this.state)
      .then(res => setUser(res.data.user))
      .then(() => alert({
        heading: 'Sign In Success',
        message: messages.signInSuccess,
        variant: 'success'
      }))
      .then(() => history.push('/'))
      .catch(error => {
        console.error(error)
        this.setState({ email: '', password: '' })
        alert({
          heading: 'Sign In Failed',
          message: messages.signInFailure,
          variant: 'danger'
        })
      })
  }

  render () {
    const { email, password } = this.state

    return (
      <Fragment>
        <Row className="row top-display">
          <Jumbotron className="jumbo col-sm-10 col-md-8 mx-auto mt-5">
            <h3>Sign In</h3>
            <p className="col-4">not a member?<br/><a href="#/sign-up" style={{ color: '#efefef' }}>Sign-up!</a></p>
            <Form onSubmit={this.onSignIn}>
              <Form.Group controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  required
                  type="email"
                  name="email"
                  value={email}
                  placeholder="DO NOT USE REAL EMAIL"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  required
                  name="password"
                  value={password}
                  type="password"
                  placeholder="FAKE PASSWORD"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                className="btn btn-dark"
              >
                Submit
              </Button>
            </Form>
          </Jumbotron>
        </Row>
        <Row className="about-me justify-content-center align-items-center">
          <div>
            <h2 className="about-header">About Food Gems!</h2>
            <img
              src="diamond_icon.png"
              className="home-diamond"
            />
            <p className="about-para">Our app consists of a collection of top tier restaurants in New England.  Each selection is a critically acclaimed restaurant with their own reknown dishes.  Please view all of the restaurants listed and leave a review after a visit!</p>
          </div>
        </Row>
        <Row className="footer">
          <div>
            <p>All logos made through <a href="https://www.canva.com/tools/logo-maker-q1/?utm_source=google_sem&utm_medium=cpc&utm_campaign=REV_US_EN_CanvaPro_Branded_Tier2_EM&utm_term=REV_US_EN_CanvaPro_Branded_Tier2_Logo%20Maker_EM&gclid=Cj0KCQjwzozsBRCNARIsAEM9kBNbGVvehowA9BnX8vfTes_gyVskudxeJMQTYtsmWKA1fPBQJgMptyIaAqwVEALw_wcB" target="_blank" rel="noopener noreferrer" >Canva</a></p>
          </div>
        </Row>
      </Fragment>
    )
  }
}

export default withRouter(SignIn)
