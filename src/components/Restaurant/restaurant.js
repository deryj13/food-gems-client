import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'

import Button from 'react-bootstrap/Button'
// import ListGroup from 'react-bootstrap/ListGroup'

class Restaurant extends Component {
  state = {
    restaurant: null
  }

  async componentDidMount () {
    try {
      const response = await axios(`${apiUrl}/restaurants/${this.props.match.params.id}`)

      this.setState({
        restaurant: response.data.restaurant
      })
    } catch (error) {
      console.error(error)
    }
  }

  render () {
    const { restaurant } = this.state
    // const reviewsJsx = this.state.restaurants.reviews.map(review => (
    //   <ListGroup.Item key={review._id}>
    //     {review.favorited}
    //     {review.description}
    //   </ListGroup.Item>
    // ))

    // ** Add under return line, under review button **
    // <ListGroup>
    //   {this.state.reviews.length ? reviewsJsx : <li>No Reviews Yet</li>}
    // </ListGroup>

    return (
      <div>
        { restaurant && (
          <Fragment>
            <h1>{restaurant.name}</h1>
            <h2>{restaurant.description}</h2>
            <h2>{restaurant.general_location}</h2>
            <h2><a href={restaurant.website}>Visit Us!</a></h2>
            <Button href='#reviews/create'>Leave A Review!</Button>
          </Fragment>
        )}
      </div>
    )
  }
}

export default withRouter(Restaurant)
