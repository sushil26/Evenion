import React from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import Edit from "./edit";

const List = () => {
  const [profiles, setProfiles] = React.useState([]);
  const [totalPages, setTotalPages] = React.useState("");
  const [xPerPage, setXPerPage] = React.useState("");
  const [totalTableRow, setTotalTableRow] = React.useState("");
  const [xTotal, setXTotal] = React.useState("");
  const [activePage, setActivePage] = React.useState(1);

  const [rowData, setRowData] = React.useState([]);

  const [view, setView] = React.useState("List");
  const getMessage = () => {
    axios.get("https://reqres.in/api/users").then((res) => {
      setProfiles(res.data.data);
      setTotalPages(res.data.total_pages);
      setXPerPage(res.data.per_page);
      setTotalTableRow(res.data.data.length);
      setXTotal(res.data.total);
    });
  };

  const handlePageClick = (n) => {
    setActivePage(n);
    axios.get(`https://reqres.in/api/users?page=${n}`).then((res) => {
      setProfiles(res.data.data);
      setTotalPages(res.data.total_pages);
      setXPerPage(res.data.per_page);
      setTotalTableRow(res.data.data.length);
      setXTotal(res.data.total);
    });
  };

  const showNextView = (data) => {
    setRowData(data);
    setView("Edit");
  };
  React.useEffect(() => {
    getMessage();
  }, []);
  console.log(profiles);

  return (
    <>
      <div className="col-12 text-left">
        <button
          class={view !== "List" ? "btn btn-secondary" : "btn btn-primary"}
          onClick={() => setView("List")}
        >
          Users
        </button>{" "}
        <button
          class={view !== "Edit" ? "btn btn-secondary" : "btn btn-primary"}
        >
          View/Edit
        </button>
      </div>

      {view === "List" ? (
        <div className="col-12">
          <div class="table-responsive border">
            <table class="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>First name</th>
                  <th>Last name</th>
                  <th>email</th>
                </tr>
              </thead>
              <tbody>
                {profiles.map((xyz, i) => (
                  <tr key={i} onClick={() => showNextView(xyz)}>
                    <td>{xyz.id}</td>
                    <td>{xyz.first_name}</td>
                    <td>{xyz.last_name}</td>
                    <td>{xyz.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>{" "}
          {totalTableRow < 1 ? null : (
            <React.Fragment>
              {" "}
              <p className="paginationMsg text-left pl-3 mt-4">
                Showing &nbsp;
                {xTotal <= 1 ? (
                  xTotal < 1 ? (
                    <React.Fragment>&nbsp;0&nbsp;</React.Fragment>
                  ) : (
                    <React.Fragment>&nbsp;1&nbsp;</React.Fragment>
                  )
                ) : (
                  <React.Fragment>
                    {totalTableRow < 2 ? (
                      <React.Fragment>&nbsp; {xTotal}</React.Fragment>
                    ) : (
                      <React.Fragment>
                        {" "}
                        {(activePage - 1) * xPerPage + 1} -{" "}
                        {totalTableRow + (activePage - 1) * xPerPage}{" "}
                      </React.Fragment>
                    )}
                  </React.Fragment>
                )}
                &nbsp;of&nbsp; <span>{xTotal}&nbsp;</span>
                {xTotal > 1 ? "Entries" : "Entry"}
              </p>
              <ReactPaginate
                previousLabel={
                  <span class="material-icons">navigate_before</span>
                }
                nextLabel={<span class="material-icons">navigate_next</span>}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={totalPages}
                forcePage={activePage - 1}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={(e) => handlePageClick(e.selected + 1)}
                containerClassName={"pagination justify-content-end"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}
              />
            </React.Fragment>
          )}
        </div>
      ) : (
        <Edit data={rowData} />
      )}
    </>
  );
};

export default List;
