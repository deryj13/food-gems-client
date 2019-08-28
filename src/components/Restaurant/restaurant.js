import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'

import CreateReview from '../Review/createReview'
import RestaurantReviews from '../Review/restaurantReviews'

// import ListGroup from 'react-bootstrap/ListGroup'

class Restaurant extends Component {
  constructor () {
    super()

    this.state = {
      restaurant: null
    }
  }

  async componentDidMount () {
    try {
      const response = await axios(`${apiUrl}/restaurants/${this.props.match.params.id}`)

      console.log('this is response data', response.data)
      this.setState({
        restaurant: response.data.restaurant
      })
    } catch (error) {
      console.error(error)
    }
  }

  render () {
    const { user, alert } = this.props
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
            <CreateReview user={user} alert={alert} restaurant={restaurant} />
            <Fragment>
              <h2>Check out our reviews!</h2>
              <RestaurantReviews user={user} restaurant={restaurant} alert={alert}/>
            </Fragment>
          </Fragment>
        )}
      </div>
    )
  }
}

export default withRouter(Restaurant)
