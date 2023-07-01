import { FormEvent, useRef } from "react";
import { Button, Row, Col, Form, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
// import CreatableReactSelect from "react-select/creatable"

const NoteForm = () => {
  const titleRef = useRef<HTMLInputElement>(null);
  const markDownRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(titleRef)
    console.log("clciked");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Stack gap={4}>
        <Row>
          <Col>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control placeholder="Enter title" required ref={titleRef} />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="tags">
              <Form.Label>Tags</Form.Label>
              {/* <CreatableReactSelect
                isMulti
              /> */}
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="tags">
              <Form.Label>Body</Form.Label>
              <Form.Control
                as="textarea"
                rows={15}
                required
                ref={markDownRef}
              />
            </Form.Group>
          </Col>
        </Row>
        <Stack className="justify-content-end" gap={4} direction="horizontal">
          <Button variant="primary">Submit</Button>
          <Link to="..">
            <Button variant="outline-secondary">Cancel</Button>
          </Link>
        </Stack>
      </Stack>
    </Form>
  );
};

export default NoteForm;
