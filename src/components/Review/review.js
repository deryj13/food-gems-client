import React, { Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

const Review = ({ review, user, handleUpdate, handleDelete }) => {
  const reviewJsx =
  <Fragment>
    {review.favorited ? <h3>A Gem!</h3> : <h3>Coal!</h3>}
    <p>Review: {review.description}</p>
    {user._id === review.owner
      ? <Fragment>
        <Button onClick={() => handleUpdate(review._id)}>
          Update Review!
        </Button><br /><br />
        <Button variant="danger" onClick={() => handleDelete(review._id)}>
          Delete Review
        </Button>
      </Fragment>
      : ''}
  </Fragment>

  return reviewJsx
}

export default withRouter(Review)
