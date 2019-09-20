import React, { Component, Fragment } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import ListGroup from 'react-bootstrap/ListGroup'
import Spinner from 'react-bootstrap/Spinner'

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
      <ListGroup.Item as="a" href={`#restaurants/${restaurant._id}`} key={restaurant._id}>
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
      <Fragment className="restaurants">
        <h2>Restaurants</h2>
        { restaurantsJsx }
      </Fragment>
    )
  }
}

export default Restaurants
