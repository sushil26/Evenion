import React from "react";

import Form from "react-bootstrap/Form";

import Button from "react-bootstrap/Button";

const EditInvoice = (props) => {
  return (
    <ul>
      <li>
        <a href="#">
          <Form.Control
            placeholder="title"
            name="item"
            value={props.item}
            onChange={props.handleInputChange}
          />

          <Form.Control
            placeholder="note"
            type="text"
            name="han"
            value={props.han}
            onChange={props.handleInputChange}
            as="textarea"
            rows={2}
          />

          <Button variant="success" size="sm" onClick={props.updateinvoice}>
            Update
          </Button>

          <Button variant="danger" size="sm" onClick={props.Closehandler}>
            Close
          </Button>
        </a>
      </li>
    </ul>
  );
};

export default EditInvoice;
