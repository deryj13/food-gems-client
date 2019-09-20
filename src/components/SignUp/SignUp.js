import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'

import { signUp, signIn } from '../../api/auth'
import messages from '../AutoDismissAlert/messages'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Jumbotron from 'react-bootstrap/Jumbotron'

class SignUp extends Component {
  constructor () {
    super()

    this.state = {
      email: '',
      password: '',
      passwordConfirmation: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onSignUp = event => {
    event.preventDefault()

    const { alert, history, setUser } = this.props

    signUp(this.state)
      .then(() => signIn(this.state))
      .then(res => setUser(res.data.user))
      .then(() => alert({
        heading: 'Sign Up Success',
        message: messages.signUpSuccess,
        variant: 'success'
      }))
      .then(() => history.push('/'))
      .catch(error => {
        console.error(error)
        this.setState({ email: '', password: '', passwordConfirmation: '' })
        alert({
          heading: 'Sign Up Failed',
          message: messages.signUpFailure,
          variant: 'danger'
        })
      })
  }

  render () {
    const { email, password, passwordConfirmation } = this.state

    return (
      <Fragment>
        <Row className="row top-display">
          <Jumbotron className="jumbo col-sm-10 col-md-8 mx-auto mt-5">
            <h3>Sign Up</h3>
            <p className="col-4">already a member?<br/><a href="#/sign-in" style={{ color: '#efefef' }}>Sign-in!</a></p>
            <Form onSubmit={this.onSignUp}>
              <Form.Group controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  required
                  type="email"
                  name="email"
                  value={email}
                  placeholder="DON'T USE A REAL EMAIL"
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
              <Form.Group controlId="passwordConfirmation">
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control
                  required
                  name="passwordConfirmation"
                  value={passwordConfirmation}
                  type="password"
                  placeholder="Confirm FAKE Password"
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

export default withRouter(SignUp)
