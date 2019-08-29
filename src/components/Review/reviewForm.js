import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const ReviewForm = ({ handleChange, handleSubmit, review }) => (
  <Form.Label>
    Leave a review! Are We a Gem? <br /><br />

    <Form onSubmit={handleSubmit}>
      <Form.Label>
          Hell Yeah!
        <Form.Control
          type="radio"
          name="favorited"
          value={true}
          onChange={handleChange}
          required
        />
      </Form.Label><br />
      <Form.Label>
          Oh Nah!
        <Form.Control
          type="radio"
          name="favorited"
          value={false}
          onChange={handleChange}
          required
        />
      </Form.Label><br />
      <Form.Label>Any Praise or Feedback?</Form.Label><br />
      <Form.Control
        type="text"
        name="description"
        placeholder="What'd You Think?"
        value={review.description}
        onChange={handleChange}
      />
      <Button className="btn btn-primary mt-2" type="submit">
        Submit
      </Button>
    </Form>
  </Form.Label>
)

export default ReviewForm
