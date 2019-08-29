import React, { Fragment } from 'react'
import { withRouter } from 'react-router-dom'
// import Button from 'react-bootstrap/Button'

// import UpdateReview from './updateReview'

// {review.favorited ? <h3>A Gem!</h3> : <h3>Coal!</h3>}

const EditReview = ({ review }) => {
  const reviewJsx =
  <Fragment>
    <p>Review: HA!</p>
    <p>Edit Your Review!</p>
  </Fragment>

  return reviewJsx
}

export default withRouter(EditReview)
