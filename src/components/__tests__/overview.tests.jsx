import React from "react";
import { render, cleanup, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Login from "../../pages/login/Login.jsx";
import { BrowserRouter } from "react-router-dom";

afterEach(cleanup);
it("Login form renders without crashing", () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );

  const email = getByTestId("input_email");
  expect(getByTestId("login")).toContainElement(email);

  const password = getByTestId("input_password");
  expect(getByTestId("login")).toContainElement(password);

  const linkElement = screen.getByText(/Forgot Password?/i);
  expect(linkElement).toBeInTheDocument();
});

it("Company button should open company form", () => {
  const button = screen.getByTestId("company_button");
  userEvent.click(button);
});
