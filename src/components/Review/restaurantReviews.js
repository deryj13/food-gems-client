import React, { Component } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import ListGroup from 'react-bootstrap/ListGroup'

import Review from './review'

class RestaurantReviews extends Component {
  constructor (props) {
    super(props)

    this.state = {
      restaurantReviews: this.props.restaurant.reviews
    }
  }

  handleDelete = (id) => {
    axios({
      method: 'DELETE',
      url: `${apiUrl}/reviews/${id}`,
      headers: {
        'Authorization': `Token token=${this.props.user.token}`
      }
    })
      .then(response => {
        console.log('da propsss,', this.props)
        this.props.alert({
          heading: 'Success!!!!!!',
          message: 'You deleted your review!.',
          variant: 'success'
        })
        // this.props.updatePostState('deleted')
      })
      .catch(console.error)
  }

  render () {
    const { restaurant, alert } = this.props
    const user = this.props.user
    const theReviews = restaurant.reviews

    let restaurantReviewsJsx

    if (theReviews.length !== 0) {
      restaurantReviewsJsx = theReviews.map(review => (
        <ListGroup.Item key={review._id}>
          <Review
            user={user}
            alert={alert}
            review={review}
            restaurant={restaurant}
            handleDelete={this.handleDelete}
          />
        </ListGroup.Item>
      ))
    } else {
      restaurantReviewsJsx = 'Be the first to leave a review!'
    }

    return (
      <ListGroup>
        {restaurantReviewsJsx}
      </ListGroup>
    )
  }
}

export default RestaurantReviews
