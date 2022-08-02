import React from "react";
import { useState, useReducer } from "react";
import Navbar from "../Navbar/Navbar";
import Modal from "@mui/material/Modal";
import Sidebar from "../sidebar/Sidebar";
//import "./Company.css";

const defaultState = {
  name: "",
  description: "",
  phone: "",
  email: "",
  status: "",
};

const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "INPUT_NAME":
      // action.payload --> When you are handling a request, say onclick of an element we need to update the state
      return { ...state, name: action.name };
    case "INPUT_DESCRIPTION":
      return { ...state, description: action.description };
    case "INPUT_PHONE":
      return { ...state, phone: action.phone };
    case "INPUT_EMAIL":
      return { ...state, email: action.email };
    case "INPUT_STATUS":
      return { ...state, status: action.status };
    case "RESET":
      return {
        name: "",
        description: "",
        phone: "",
        email: "",
        status: "",
      };

    default:
      return "";
  }
};

const Company = () => {
  const [isOpen, setOpen] = useState(false);

  const onClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const onClickReset = () => {
    dispatch({ type: "RESET" });
  };

  const [state, dispatch] = useReducer(reducer, defaultState);
  const onHandlesubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div data-testid="company">
      <div data-testid="main_container" className="main-container">
        <Sidebar />
        <div data-testid="container" className="container">
          <Navbar
            data={[
              { path: "/PersonnelManagement/Company", pathName: "Company " },
              { path: "/PersonnelManagement/Map", pathName: "Map" },
              {
                path: "/Personnel Management/Individual",
                pathName: "Individual",
              },
            ]}
          />
          <div data-testid="company_button" className="b1">
            <button id="Company_Button" type="button" onClick={handleOpen}>
              Company
            </button>
          </div>
          <Modal open={isOpen} onClose={() => setOpen(false)}>
            <div>
              <form id="Form_2" className="bordering" onSubmit={onHandlesubmit}>
                <div className="closeButton">
                  <button data-testid="close_button" id="b2" onClick={onClose}>
                    X
                  </button>
                </div>

                <div data-testid="input_name">
                  <h1>Company</h1>
                  <label htmlFor="inputName">Name:</label>
                  <input
                    id="ip_Name"
                    value={state.name}
                    type="text"
                    placeholder="Enter Your Name"
                    onChange={(e) =>
                      dispatch({ type: "INPUT_NAME", name: e.target.value })
                    }
                  />
                </div>

                <div data-testid="input_description">
                  <br></br>
                  <label htmlFor="inputDescription">Description:</label>
                  <input
                    id="ip_Description"
                    value={state.description}
                    type="text"
                    placeholder=" Enter Description"
                    onChange={(e) =>
                      dispatch({
                        type: "INPUT_DESCRIPTION",
                        description: e.target.value,
                      })
                    }
                  />
                </div>

                <div data-testid="input_phone">
                  <br></br>
                  <label htmlFor="inputPhone">Phone:</label>
                  <input
                    id="ip_Phone"
                    value={state.phone}
                    type="phone"
                    placeholder="Enter Phone No."
                    onChange={(e) =>
                      dispatch({ type: "INPUT_PHONE", phone: e.target.value })
                    }
                  />
                </div>

                <div data-testid="input_email">
                  <br></br>
                  <label htmlFor="ip_Email">Email:</label>
                  <input
                    id="ip_Email"
                    value={state.email}
                    type="email"
                    placeholder="Enter Email"
                    onChange={(e) =>
                      dispatch({ type: "INPUT_EMAIL", email: e.target.value })
                    }
                  />
                </div>

                <div data-testid="input_status">
                  <h5>STATUS:</h5>
                  <label htmlFor="inputStatus">Active </label>
                  <input
                    id="ip_Status"
                    type="radio"
                    value="Active"
                    name="status"
                    onClick={() =>
                      dispatch({ type: "INPUT_STATUS", status: "active" })
                    }
                  />
                  <label htmlFor="inputStatus">Inactive </label>
                  <input
                    id="ip_Status"
                    type="radio"
                    value="Inactive"
                    name="status"
                    onClick={() =>
                      dispatch({ type: "INPUT_STATUS", status: "inactive" })
                    }
                  />
                </div>

                <div data-testid="lower_button">
                  <br></br>
                  <div className="lower_buttons">
                    <button className="reset" onClick={onClickReset}>
                      RESET
                    </button>
                    &nbsp; &nbsp;
                    <button
                      className="add"
                      type="submit"
                      onClick={onHandlesubmit}
                    >
                      ADD
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};
export default Company;
