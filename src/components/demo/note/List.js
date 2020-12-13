import React from "react";
import Button from "react-bootstrap/Button";

const List = (props) => {
  const itenararyHeaders = ["Note Title", "Action"];
  return (
    <ul>
      {props.itenraries.length > 0
        ? props.itenraries.map((invoice) => (
            <li key={invoice.id}>
              <a href="#">
                <h2>{invoice.item}</h2>
                <p>{invoice.han}</p>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => props.editinvoice(invoice)}
                >
                  {" "}
                  Edit
                </Button>

                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => props.deleteinvoice(invoice.id)}
                >
                  Delete
                </Button>
              </a>
            </li>
          ))
        : null}
    </ul>
  );
};

export default List;
