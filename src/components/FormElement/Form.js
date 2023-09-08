import React, { useState } from "react";
import FormTable from "../FormTable/FormTable";
import TableTop from "../TableTop/TableTop";
import Pagination from "../Pagination/Pagination";
import ControllsBtn from "../ControllsBtn/ControllsBtn";

const Form = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [customers, setCustomers] = useState([]);

  // Search
  const [search, setSearch] = useState("");
  const keys = [
    "Customer ID",
    "Customer Name",
    "Customer Address",
    "Customer Mobile No.",
  ];

  // const searchInput = (customers) => {
  //   return customers.filter((item) =>
  //     keys.some((key) => item[key].toLowerCase().includes(search))
  //   );
  // };

  // Handle Id
  function handleId(e) {
    setId(e.target.value);
  }

  // Handle Name
  function handleName(e) {
    setName(e.target.value);
  }

  // Handle Mobile
  function handleMobile(e) {
    setMobile(e.target.value);
  }

  // Handle Address
  function handleAddress(e) {
    setAddress(e.target.value);
  }

  return (
    <>
      <div className="mainFormBox">
        <div className="container">
          <h1 className="text-center">Customer Management System</h1>
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="mb-3">
                  <label htmlFor="formGroupExampleInput" className="form-label">
                    Customer ID:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput"
                    placeholder="Enter Customer ID"
                    value={id}
                    onChange={handleId}
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="formGroupExampleInput2"
                    className="form-label"
                  >
                    Customer Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput2"
                    placeholder="Enter Customer Name"
                    value={name}
                    onChange={handleName}
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="formGroupExampleInput2"
                    className="form-label"
                  >
                    Customer Mobile Number:
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="formGroupExampleInput2"
                    placeholder="Enter Customer Mobile Number"
                    value={mobile}
                    onChange={handleMobile}
                  />
                </div>
                <div className="form-floating mb-3">
                  <textarea
                    className="form-control"
                    placeholder="Enter Customer Address..."
                    id="floatingTextarea2"
                    style={{ height: "200px" }}
                    value={address}
                    onChange={handleAddress}
                  ></textarea>
                  <label for="floatingTextarea2">Customer Address:</label>
                </div>
                <ControllsBtn
                  id={id}
                  name={name}
                  mobile={mobile}
                  address={address}
                  setCustomers={setCustomers}
                  setName={setName}
                  setAddress={setAddress}
                  setMobile={setMobile}
                />
              </div>
              <div className="col">
                <figure
                  className="figure"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                  }}
                >
                  <img
                    src="./images/formImg.jpg"
                    className="figure-img img-fluid rounded"
                    alt="..."
                  />
                  <figcaption className="figure-caption text-end">
                    Customer Management System
                  </figcaption>
                </figure>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <Pagination
                  id={id}
                  setCustomers={setCustomers}
                  setName={setName}
                  setAddress={setAddress}
                  setMobile={setMobile}
                  setId={setId}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <TableTop setSearch={setSearch} />
              </div>
            </div>

            <div className="row">
              <div className="col">
                <FormTable customers={customers} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
