import React, { Fragment } from 'react'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'
// import axios from 'axios'
// import apiUrl from '../../apiConfig'

const Home = () => {
  return (
    <Fragment style="min-width: 1920px; margin: 0 auto; max-height: 1080px;">
      <header>
        <Row className='top-display justify-content-center align-items-center'>
          <Jumbotron variant='dark' className='jumbo col-sm-10 col-md-8 mx-auto mt-5'>
            <div>
              <h1>Nothing but gems.</h1>
              <h6>Selection, done right.</h6><br/>
              <p><Button className="auth btn btn-dark">Sign Up</Button> or <Button className="auth btn btn-dark">Sign In</Button> to begin.</p>
            </div>
          </Jumbotron>
        </Row>
      </header>
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

export default Home
