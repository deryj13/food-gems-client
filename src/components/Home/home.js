import React, { Fragment } from 'react'
import Row from 'react-bootstrap/Row'
import Jumbotron from 'react-bootstrap/Jumbotron'
// import axios from 'axios'
// import apiUrl from '../../apiConfig'

const Home = () => {
  return (
    <Fragment>
      <header>
        <Row className='head-display justify-content-center align-items-center'>
          <Jumbotron variant='dark' className='jumbo col-sm-10 col-md-8 mx-auto mt-5'>
            <div>
              <h1>Nothing but gems.</h1>
              <h6>Selection, done right.</h6>
            </div>
          </Jumbotron>
        </Row>
      </header>
      <div className="about-me">
        <h2>About Food Gems!</h2>
        <img
          src="diamond_icon.png"
        />
        <p>Our app consists of a collection of top tier restaurants in New England.  Each selection is a critically acclaimed restaurant with their own reknown dishes.  Please view all of the restaurants listed and leave a review after a visit!</p>
      </div>
    </Fragment>
  )
}

export default Home
