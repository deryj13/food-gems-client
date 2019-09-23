import React, { Component, Fragment } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import ListGroup from 'react-bootstrap/ListGroup'
import Row from 'react-bootstrap/Row'

import CreateReview from '../Review/createReview'
import Review from '../Review/review'

class Restaurant extends Component {
  constructor (props) {
    super(props)

    this.state = {
      restaurant: null,
      reviewDeleted: null
    }
  }

  async componentDidMount () {
    try {
      const response = await axios(`${apiUrl}/restaurants/${this.props.match.params.id}`)
      this.setState({ restaurant: response.data.restaurant })
    } catch (error) {
      console.error(error)
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
        this.setState({ reviewDeleted: true })
      })
      .then(response => {
        this.props.alert({
          heading: 'Success!!!!!!',
          message: 'You deleted your review!',
          variant: 'success'
        })
      })
      .catch(console.error)
  }

  render () {
    if (this.state.reviewDeleted) {
      return <Redirect to={'/restaurants'}/>
    }
    const { user, alert } = this.props
    const { restaurant } = this.state
    let restaurantReviewsJsx
    if (restaurant) {
      const theReviews = restaurant.reviews

      if (theReviews.length !== 0) {
        restaurantReviewsJsx = theReviews.map(review => (
          <ListGroup.Item key={review._id} className="review">
            <Review
              user={user}
              alert={alert}
              review={review}
              restaurant={restaurant}
              handleDelete={this.handleDelete}
              handleUpdate={this.handleUpdate}
            />
          </ListGroup.Item>
        ))
      } else {
        restaurantReviewsJsx = 'Be the first to leave a review!'
      }
    }
    return (
      <div>
        { restaurant && (
          <Fragment>
            <h1 className="restaurant-name">{restaurant.name}</h1>
            <h2 className="restaurant-info">{restaurant.description}</h2>
            <h2 className="restaurant-info">{restaurant.general_location}</h2>
            <h2 className="restaurant-info"><a href={restaurant.website} target="_blank" rel="noopener noreferrer">Visit Us!</a></h2>
            <CreateReview user={user} alert={alert} restaurant={restaurant} />
            <ListGroup><br /><br />
              <h2 className="restaurant-info">Check out our reviews!</h2>
              {restaurantReviewsJsx}
            </ListGroup>
            <Row className="footer">
              <div>
                <p>All logos made through <a href="https://www.canva.com/tools/logo-maker-q1/?utm_source=google_sem&utm_medium=cpc&utm_campaign=REV_US_EN_CanvaPro_Branded_Tier2_EM&utm_term=REV_US_EN_CanvaPro_Branded_Tier2_Logo%20Maker_EM&gclid=Cj0KCQjwzozsBRCNARIsAEM9kBNbGVvehowA9BnX8vfTes_gyVskudxeJMQTYtsmWKA1fPBQJgMptyIaAqwVEALw_wcB" target="_blank" rel="noopener noreferrer" >Canva</a></p>
              </div>
            </Row>
          </Fragment>
        )}
      </div>
    )
  }
}

export default withRouter(Restaurant)
