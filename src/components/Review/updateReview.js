import React, { Component } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import ReviewForm from './reviewForm'

class updateReview extends Component {
  state = {
    review: {
      favorited: null,
      description: ''
    },
    updated: false
  }

  handleChange = event => {
    const updatedField = {
      [event.target.name]: event.target.value
    }

    const updatedReview = Object.assign(this.state.review, updatedField)
    this.setState({ review: updatedReview })
  }

  handleSubmit = event => {
    event.preventDefault()
    axios({
      method: 'PATCH',
      url: `${apiUrl}/reviews/${this.props.review._id}`,
      headers: {
        'Authorization': `Bearer ${this.props.user.token}`
      },
      data: {
        review: this.state.review
      }
    })
      .then(response => {
        this.setState({ updated: true })
      })
      .then(response => {
        this.props.alert({
          head: 'Success!!!',
          message: 'You updated a review',
          variant: 'success'
        })
      })
      .catch(console.error)
  }

  render () {
    if (this.state.updated) {
      return <Redirect to={'/restaurants'}/>
    }
    return (
      <ReviewForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} review={this.state.review}/>
    )
  }
}

export default withRouter(updateReview)
