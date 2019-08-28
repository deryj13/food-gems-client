import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import ReviewForm from './reviewForm'

class CreateReview extends Component {
  state = {
    review: {
      favorited: null,
      description: ''
    }
  }

  handleChange = event => {
    this.setState({
      review: {
        ...this.state.review, [event.target.name]: event.target.value
      }
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    axios({
      method: 'POST',
      url: `${apiUrl}/reviews`,
      headers: {
        'Authorization': `Bearer ${this.props.user.token}`
      },
      data: {
        review: this.state.review
      }
    })
      .then(response => {
        this.props.alert({
          head: 'Success!!!',
          message: 'You created a review',
          variant: 'success'
        })
        this.props.history.push(`/reviews/${response.data.review._id}`)
      })
      .catch(console.error)
  }

  render () {
    return (
      <ReviewForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} review={this.state.review}/>
    )
  }
}

export default withRouter(CreateReview)
