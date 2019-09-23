import React, { Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

import UpdateReview from './updateReview'

const Review = ({ review, user, handleDelete, alert }) => {
  const reviewJsx =
  <Fragment>
    {review.favorited ? <img src="review-diamond.png" className="review-diamond"/> : <img src="review-coal.png" className="review-coal"/>}
    <p className="review-description">Review: {review.description}</p>
    {user._id === review.owner
      ? <Fragment>
        <h4>Change of Heart? Edit Below :)</h4>
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
