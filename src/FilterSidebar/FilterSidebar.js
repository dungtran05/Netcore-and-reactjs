// FilterSidebar.js
import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';

const FilterSidebar = ({ handleCheckboxChange ,handleSubmit}) => {
  return (
    <Container style={{marginLeft:'-50px'}}>
      <h4>Tìm kiếm</h4>
      <Form>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="0-100"
            id="0-100"
            onChange={handleCheckboxChange}
          />
          <Form.Check
            type="checkbox"
            label="100-200"
            id="100-200"
            onChange={handleCheckboxChange}
          />
          <Form.Check
            type="checkbox"
            label="100-200"
            id="100-200"
            onChange={handleCheckboxChange}
          />
          <Form.Check
            type="checkbox"
            label="200-300"
            id="200-300"
            onChange={handleCheckboxChange}
          />
          <Form.Check
            type="checkbox"
            label="300-400"
            id="300-400"
            onChange={handleCheckboxChange}
          />

        </Form.Group>
        <Button onClick={handleSubmit}>Tìm</Button>
      </Form>
    </Container>
  );
};

export default FilterSidebar;
