import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const ReviewForm = ({ handleChange, handleSubmit, review }) => (
  <Form.Label>
    Are We a Gem? <br />

    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="Yes">
        <Form.Label>
          Hell Yeah!
          <Form.Control
            type="radio"
            name="favorite?"
            value={true}
            onChange={handleChange}
          />
        </Form.Label><br />
        <Form.Label>
          Oh Nah!
          <Form.Control
            type="radio"
            name="favorite?"
            value={false}
            onChange={handleChange}
          />
        </Form.Label><br />
      </Form.Group>

      <Form.Group controlId="description">
        <Form.Label>Any Praise or Feedback?</Form.Label><br />
        <Form.Control
          type="text"
          name="description"
          placeholder="What'd You Think?"
          value={review.description}
          onChange={handleChange}
        />
      </Form.Group>

      <Button className="btn btn-primary mt-2" type="submit">
        Submit
      </Button>
    </Form>
  </Form.Label>
)

export default ReviewForm
