import React, { Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

import UpdateReview from './updateReview'

const Review = ({ review, user, handleDelete, alert }) => {
  const reviewJsx =
  <Fragment>
    {review.favorited ? <h3>A Gem!</h3> : <h3>Coal!</h3>}
    <p>Review: {review.description}</p>
    <h4>Change of Heart? Edit Below :)</h4>
    {user._id === review.owner
      ? <Fragment>
        <UpdateReview
          review={review}
          user={user}
          alert={alert}
        /><br /><br />
        <Button variant="danger" onClick={() => handleDelete(review._id)}>
          Delete Review
        </Button>
      </Fragment>
      : ''}
  </Fragment>

  return reviewJsx
}

export default withRouter(Review)
