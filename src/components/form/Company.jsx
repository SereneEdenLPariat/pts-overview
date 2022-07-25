import React from "react";
import { useState, useReducer } from "react";
import Navbar from "../Navbar/Navbar";
import Modal from "@mui/material/Modal";
import Sidebar from "../sidebar/Sidebar";

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
    <div className="main-container">
      <Sidebar />
      <div>
        <Navbar
          data={[
            { path: "/PersonnelManagement/Company", pathName: "Company" },
            { path: "/PersonnelManagement/Team", pathName: "Team" },
            {
              path: "/Personnel Management/Individual",
              pathName: "Individual",
            },
          ]}
        />

        <button type="button" onClick={handleOpen}>
          Company
        </button>

        {/* <Modal onClose={handleClose} open={open}> */}
        <Modal open={isOpen} onClose={() => setOpen(false)}>
          <form onSubmit={onHandlesubmit}>
            <h1>Company</h1>

            <button onClick={onClose}>X</button>
            <div>
              <br></br>
              <label htmlFor="inputName">Name:</label>
              <input
                id="inputName"
                value={state.name}
                type="text"
                placeholder="Name"
                onChange={(e) =>
                  dispatch({ type: "INPUT_NAME", name: e.target.value })
                }
              />
            </div>

            <div>
              <br></br>
              <label htmlFor="inputDescription">Description:</label>
              <input
                id="inputDescription"
                value={state.description}
                type="text"
                placeholder="Description"
                onChange={(e) =>
                  dispatch({
                    type: "INPUT_DESCRIPTION",
                    description: e.target.value,
                  })
                }
              />
            </div>

            <div>
              <br></br>
              <label htmlFor="inputPhone">Phone:</label>
              <input
                id="inputPhone"
                value={state.phone}
                type="phone"
                placeholder="Phone"
                onChange={(e) =>
                  dispatch({ type: "INPUT_PHONE", phone: e.target.value })
                }
              />
            </div>

            <div>
              <br></br>
              <label htmlFor="inputEmail">Email</label>
              <input
                id="inputEmail"
                value={state.email}
                type="email"
                placeholder="Email"
                onChange={(e) =>
                  dispatch({ type: "INPUT_EMAIL", email: e.target.value })
                }
              />
            </div>
            <br></br>

            <div>
              <br></br>
              <h5>STATUS:</h5>
              <label htmlFor="inputStatus">Active </label>
              <input
                id="inputStatus"
                type="radio"
                value="Active"
                name="status"
                onClick={() =>
                  dispatch({ type: "INPUT_STATUS", status: "active" })
                }
              />
              <label htmlFor="inputStatus">Inactive </label>
              <input
                id="inputStatus"
                type="radio"
                value="Inactive"
                name="status"
                onClick={() =>
                  dispatch({ type: "INPUT_STATUS", status: "inactive" })
                }
              />
            </div>

            <div>
              <br></br>
              <button onClick={onClickReset}>RESET</button>
              &nbsp;
              <button type="submit" onClick={onHandlesubmit}>
                ADD
              </button>
            </div>
          </form>
        </Modal>
      </div>
    </div>
  );
};
export default Company;
