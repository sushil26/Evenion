import React from "react";
import { Link } from "react-router-dom";

const List = (props) => {
  console.log(props.data);
  const data = props.data;

  const [disable, setDisable] = React.useState(true);
  const [fname, setFname] = React.useState(data.first_name);
  const [lname, setLname] = React.useState(data.last_name);
  const [email, setEmail] = React.useState(data.email);

  return (
    <>
      <div className="col-6 text-left">
        <div class="form-group float-right">
          <button type="button" class="btn btn-info">
            <span
              class="material-icons"
              onClick={() => {
                setDisable(!disable);
              }}
            >
              border_color
            </span>
          </button>
        </div>
        <div class="form-group ">
          <label for="exampleFormControlInput1">First Name</label>
          <input
            type="name"
            class="form-control"
            placeholder="sushil"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
            disabled={disable}
          />
        </div>
        <div class="form-group ">
          <label for="exampleFormControlInput1">Last Name</label>
          <input
            type="name"
            class="form-control"
            placeholder="kumar"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
            disabled={disable}
          />
        </div>
        <div class="form-group ">
          <label for="exampleFormControlInput1">Email</label>
          <input
            type="name"
            class="form-control"
            placeholder="kumar"
            value={email}
            disabled={disable}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div class="form-group float-right">
          <button
            type="button"
            class="btn btn-info"
            onClick={() =>
              console.log(
                "data to sent::" +
                  {
                    id: data.id,
                    first_name: fname,
                    last_name: lname,
                    email: email,
                  }
              )
            }
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default List;
