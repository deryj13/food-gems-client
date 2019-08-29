import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import ReviewForm from './reviewForm'

class UpdateReview extends Component {
  state = {
    review: {
      favorited: null,
      description: '',
      restaurant: this.props.restaurant._id
    }
  }

  handleChange = event => {
    console.log(event.target)
    const updatedField = {
      [event.target.name]: event.target.value
    }

    const createdReview = Object.assign(this.state.review, updatedField)
    this.setState({ review: createdReview })
  }

  handleSubmit = (event, id) => {
    event.preventDefault()
    axios({
      method: 'PATCH',
      url: `${apiUrl}/reviews/${id}`,
      headers: {
        'Authorization': `Bearer ${this.props.user.token}`
      },
      data: {
        review: this.state.review
      }
    })
      .then(response => {
        console.log(this.props)
        this.props.alert({
          head: 'Success!!!',
          message: 'You edited your review',
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

export default withRouter(UpdateReview)
