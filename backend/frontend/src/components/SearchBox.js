import React, { useState } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';

function SearchBox() {
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword) {
      navigate(`/?keyword=${keyword}&page=1`);
    } else {
      navigate(location.pathname);
    }
  };

  return (
    <Form onSubmit={submitHandler}>
      <Row className="align-items-center">
        <Col sm={8} className="my-1">
          <Form.Control
            type="text"
            name="q"
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Enter your search query"
          />
        </Col>
        <Col sm={4} className="my-1">
          <Button
            type="submit"
            variant="outline-success"
            style={{ width: '100%' }}
          >
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default SearchBox;
