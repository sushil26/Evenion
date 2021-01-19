import React from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import List from "../user/list";

const Body = () => {
  return (
    <div className="bodyarea">
      <div className="row mr-0 ml-0 p-4">
        <List />
      </div>
    </div>
  );
};

export default Body;
