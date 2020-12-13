import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const AddNote = (props) => {
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
          {/* <input
            placeholder="Note title"
            type="text"
            className="form-control"
            name="item"
            value={props.item}
            onChange={props.handleInputChange}
          />{" "} */}

          <Button variant="primary" size="sm" onClick={props.addinvoice}>
            {" "}
            Add
          </Button>
        </a>
      </li>
    </ul>
  );
};

export default AddNote;
