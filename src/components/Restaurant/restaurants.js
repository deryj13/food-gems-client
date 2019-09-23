import React, { Component, Fragment } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import ListGroup from 'react-bootstrap/ListGroup'
import Spinner from 'react-bootstrap/Spinner'
import Row from 'react-bootstrap/Row'

class Restaurants extends Component {
  constructor () {
    super()

    this.state = {
      restaurants: [],
      isLoading: true
    }
  }

  async componentDidMount () {
    try {
      const response = await axios(`${apiUrl}/restaurants`)
      setTimeout(() => this.setState({ restaurants: response.data.restaurants, isLoading: false }),
        1000)
    } catch (error) {
      console.error(error)
    }
  }
  render () {
    const restaurantsJsx = this.state.restaurants.map(restaurant => (
      <ListGroup.Item as="a" href={`#restaurants/${restaurant._id}`} key={restaurant._id} className="restaurants">
        {restaurant.name}
        <h6>{restaurant.description}</h6>
      </ListGroup.Item>
    ))

    if (this.state.isLoading) {
      return (
        <Spinner animation="border" variant="primary" />
      )
    }

    return (
      <Fragment>
        <h2>Restaurants</h2>
        { restaurantsJsx }
        <Row className="footer">
          <div>
            <p>All logos made through <a href="https://www.canva.com/tools/logo-maker-q1/?utm_source=google_sem&utm_medium=cpc&utm_campaign=REV_US_EN_CanvaPro_Branded_Tier2_EM&utm_term=REV_US_EN_CanvaPro_Branded_Tier2_Logo%20Maker_EM&gclid=Cj0KCQjwzozsBRCNARIsAEM9kBNbGVvehowA9BnX8vfTes_gyVskudxeJMQTYtsmWKA1fPBQJgMptyIaAqwVEALw_wcB" target="_blank" rel="noopener noreferrer" >Canva</a></p>
          </div>
        </Row>
      </Fragment>
    )
  }
}

export default Restaurants
